
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Bus, MapPin, Calendar, Clock, User, Phone, Shield, Info } from 'lucide-react';
import type { Bus as BusType } from '../utils/busData';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import RouteMap from './RouteMap';
import BusSchedule from './BusSchedule';

interface BusDetailsProps {
  bus: BusType;
}

const BusDetails = ({ bus }: BusDetailsProps) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    delayed: 'bg-amber-100 text-amber-800',
    outOfService: 'bg-red-100 text-red-800'
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % bus.images.length);
  };

  return (
    <div className="w-full max-w-3xl mx-auto pb-20 animate-slide-up">
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md pt-4 pb-2">
        <div className="flex items-center justify-between px-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/')}
            className="flex items-center text-muted-foreground"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          
          <div className="flex items-center space-x-2">
            <Badge className={`${statusColors[bus.status]}`}>
              {bus.status === 'active' ? 'On Time' : 
               bus.status === 'delayed' ? 'Delayed' :
               'Out of Service'}
            </Badge>
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-6">
        {/* Bus Images */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <AspectRatio ratio={16/9} className="bg-muted relative">
            <img 
              src={bus.images[currentImageIndex]} 
              alt={`Bus ${bus.busNumber}`}
              className="w-full h-full object-cover transition-opacity duration-300"
              onClick={nextImage}
            />
            
            <div className="absolute bottom-3 right-3 flex space-x-1">
              {bus.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                ></button>
              ))}
            </div>
          </AspectRatio>
        </div>
        
        {/* Bus Info Header */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Bus className="h-5 w-5 text-primary" />
            <h1 className="text-2xl font-semibold">{bus.busNumber}</h1>
          </div>
          
          <div className="flex items-center text-md font-medium text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1 inline-flex text-primary" />
            <span>{bus.route.name}</span>
          </div>
          
          <p className="text-sm text-muted-foreground">{bus.description}</p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {bus.amenities.map((amenity, index) => (
              <Badge key={index} variant="outline" className="bg-secondary/50">
                {amenity}
              </Badge>
            ))}
          </div>
        </div>
        
        <Separator />
        
        {/* Tabs for different sections */}
        <Tabs defaultValue="route" className="w-full">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="route">Route</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="driver">Driver</TabsTrigger>
          </TabsList>
          
          <TabsContent value="route" className="space-y-4 pt-4">
            <RouteMap route={bus.route} />
          </TabsContent>
          
          <TabsContent value="schedule" className="space-y-4 pt-4">
            <BusSchedule schedule={bus.schedule} route={bus.route} />
          </TabsContent>
          
          <TabsContent value="driver" className="space-y-4 pt-4">
            <div className="glass-card rounded-xl p-4 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <img 
                    src={bus.driver.image} 
                    alt={bus.driver.name}
                    className="h-full w-full object-cover" 
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">{bus.driver.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Shield className="h-3 w-3 mr-1" />
                    {bus.driver.experience} experience
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-primary" />
                  <span className="text-sm">{bus.driver.contactNumber}</span>
                </div>
              </div>
              
              <div className="bg-muted rounded-lg p-3">
                <div className="flex items-start">
                  <Info className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    Please contact the driver only in case of emergencies or lost items.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-4">
              <h3 className="font-medium mb-2">Bus Information</h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div className="text-muted-foreground">Bus Type</div>
                <div>{bus.busType}</div>
                
                <div className="text-muted-foreground">Capacity</div>
                <div>{bus.capacity} passengers</div>
                
                <div className="text-muted-foreground">Last Updated</div>
                <div>{new Date(bus.lastUpdated).toLocaleString()}</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BusDetails;
