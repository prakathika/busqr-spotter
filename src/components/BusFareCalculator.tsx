
import { useState, useEffect } from 'react';
import { Bus as BusType, BusStop } from '../utils/busData';
import { Button } from './ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { MapPin, IndianRupee, Clock, Info } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface BusFareCalculatorProps {
  bus: BusType;
}

const BusFareCalculator = ({ bus }: BusFareCalculatorProps) => {
  const [originStop, setOriginStop] = useState<string>('');
  const [destinationStop, setDestinationStop] = useState<string>('');
  const [fare, setFare] = useState<number | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [notificationEnabled, setNotificationEnabled] = useState<boolean>(false);

  // Calculate fare based on distance between stops
  useEffect(() => {
    if (originStop && destinationStop) {
      const originStopObj = bus.route.stops.find(stop => stop.id === originStop);
      const destinationStopObj = bus.route.stops.find(stop => stop.id === destinationStop);
      
      if (originStopObj && destinationStopObj) {
        // Calculate distance using lat/lng (simplified calculation)
        const dist = calculateDistance(
          originStopObj.location.lat, 
          originStopObj.location.lng,
          destinationStopObj.location.lat,
          destinationStopObj.location.lng
        );
        
        setDistance(dist);
        
        // Calculate fare (base fare + distance-based fare)
        // Tamil Nadu bus fares: ~₹1.5-3.5 per km depending on bus type
        let ratePerKm = 1.5;
        if (bus.busType.includes('AC') || bus.busType.includes('Deluxe')) {
          ratePerKm = 3.5;
        } else if (bus.busType.includes('Super') || bus.busType.includes('Express')) {
          ratePerKm = 2.5;
        }
        
        const calculatedFare = Math.max(10, Math.round(dist * ratePerKm));
        setFare(calculatedFare);
        
        // Calculate duration
        const originTimeIndex = bus.route.stops.findIndex(stop => stop.id === originStop);
        const destTimeIndex = bus.route.stops.findIndex(stop => stop.id === destinationStop);
        
        if (originTimeIndex !== -1 && destTimeIndex !== -1) {
          const originTime = convertTimeToMinutes(originStopObj.departureTime);
          const destTime = convertTimeToMinutes(destinationStopObj.arrivalTime);
          
          let durationMinutes = destTime - originTime;
          // Handle overnight trips
          if (durationMinutes < 0) {
            durationMinutes += 24 * 60;
          }
          
          const hours = Math.floor(durationMinutes / 60);
          const minutes = durationMinutes % 60;
          
          setDuration(`${hours}h ${minutes}m`);
        }
      }
    }
  }, [originStop, destinationStop, bus]);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; // Distance in km
    return Math.round(distance * 10) / 10;
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI/180);
  };

  const convertTimeToMinutes = (timeStr: string): number => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const requestNotificationPermission = async () => {
    try {
      if (!("Notification" in window)) {
        toast({
          title: "Notifications Not Supported",
          description: "Your browser doesn't support notifications",
          variant: "destructive",
        });
        return;
      }
      
      const permission = await Notification.requestPermission();
      
      if (permission === "granted") {
        setNotificationEnabled(true);
        scheduleNotification();
        toast({
          title: "Notifications Enabled",
          description: "You'll be notified 10 minutes before bus arrival",
        });
      } else {
        toast({
          title: "Notification Permission Denied",
          description: "Please enable notifications to receive bus alerts",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      toast({
        title: "Error",
        description: "Failed to set up notifications",
        variant: "destructive",
      });
    }
  };

  const scheduleNotification = () => {
    if (!originStop) return;
    
    const originStopObj = bus.route.stops.find(stop => stop.id === originStop);
    if (!originStopObj) return;
    
    // Get arrival time of the bus at the origin stop
    const arrivalTimeStr = originStopObj.arrivalTime;
    const [hours, minutes] = arrivalTimeStr.split(':').map(Number);
    
    // Create a Date object for today with that time
    const arrivalTime = new Date();
    arrivalTime.setHours(hours, minutes, 0, 0);
    
    // If the time has already passed today, schedule for tomorrow
    if (arrivalTime.getTime() < Date.now()) {
      arrivalTime.setDate(arrivalTime.getDate() + 1);
    }
    
    // Calculate notification time (10 minutes before arrival)
    const notificationTime = new Date(arrivalTime.getTime() - 10 * 60 * 1000);
    
    // Calculate milliseconds until notification
    const msUntilNotification = notificationTime.getTime() - Date.now();
    
    // Schedule the notification
    if (msUntilNotification > 0) {
      setTimeout(() => {
        new Notification(`Bus ${bus.busNumber} Arriving Soon`, {
          body: `The bus will arrive at ${originStopObj.name} in about 10 minutes.`,
          icon: '/favicon.ico'
        });
      }, msUntilNotification);
      
      console.log(`Notification scheduled for ${notificationTime.toLocaleTimeString()}`);
    }
  };

  return (
    <div className="glass-card rounded-xl p-4 space-y-4">
      <h3 className="font-medium text-lg flex items-center">
        <IndianRupee className="h-5 w-5 mr-2 text-primary" />
        Bus Fare Calculator
      </h3>
      
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">
            Your Location
          </label>
          <Select
            value={originStop}
            onValueChange={setOriginStop}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select pickup point" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {bus.route.stops.map((stop) => (
                  <SelectItem key={stop.id} value={stop.id}>
                    <div className="flex items-center">
                      <MapPin className="h-3.5 w-3.5 mr-2 text-primary" />
                      {stop.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">
            Your Destination
          </label>
          <Select
            value={destinationStop}
            onValueChange={setDestinationStop}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {bus.route.stops.map((stop) => (
                  <SelectItem 
                    key={stop.id} 
                    value={stop.id}
                    disabled={stop.id === originStop}
                  >
                    <div className="flex items-center">
                      <MapPin className="h-3.5 w-3.5 mr-2 text-primary" />
                      {stop.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {fare !== null && distance !== null && (
        <>
          <Separator />
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Distance</span>
              <span className="font-medium">{distance} km</span>
            </div>
            
            {duration && (
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Travel Time</span>
                <span className="font-medium">{duration}</span>
              </div>
            )}
            
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Fare</span>
              <span className="text-lg font-semibold text-primary">₹{fare}</span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={requestNotificationPermission}
            disabled={notificationEnabled}
          >
            {notificationEnabled ? (
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Notification Enabled
              </span>
            ) : (
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Notify me before bus arrival
              </span>
            )}
          </Button>
          
          <div className="bg-muted rounded-lg p-3">
            <div className="flex">
              <Info className="h-4 w-4 mr-2 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                Fare is calculated based on distance and bus type. Actual fare may vary. 
                Enable notifications to get alerted 10 minutes before your bus arrives.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BusFareCalculator;
