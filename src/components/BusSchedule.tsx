
import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { BusRoute } from '../utils/busData';

interface BusScheduleProps {
  schedule: {
    weekday: string[];
    weekend: string[];
  };
  route: BusRoute;
}

const BusSchedule = ({ schedule, route }: BusScheduleProps) => {
  const [selectedDay, setSelectedDay] = useState<'weekday' | 'weekend'>('weekday');
  
  const startStop = route.stops[0];
  const endStop = route.stops[route.stops.length - 1];
  
  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Button
          variant={selectedDay === 'weekday' ? 'default' : 'outline'}
          onClick={() => setSelectedDay('weekday')}
          className="flex-1"
        >
          Weekdays
        </Button>
        <Button
          variant={selectedDay === 'weekend' ? 'default' : 'outline'}
          onClick={() => setSelectedDay('weekend')}
          className="flex-1"
        >
          Weekends
        </Button>
      </div>
      
      <div className="glass-card rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="h-4 w-4 text-primary" />
          <h3 className="font-medium">
            {selectedDay === 'weekday' ? 'Monday to Friday' : 'Saturday & Sunday'}
          </h3>
        </div>
        
        <div className="space-y-4">
          {schedule[selectedDay].map((time, index) => (
            <div key={index} className="glass-card rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">{time}</span>
                </div>
                
                <div className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                  Trip #{index + 1}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-xs text-muted-foreground">Departure</div>
                  <div className="font-medium">{startStop.name}</div>
                </div>
                
                <div>
                  <div className="text-xs text-muted-foreground">Arrival</div>
                  <div className="font-medium">{endStop.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="glass-card rounded-xl p-4">
        <h3 className="font-medium mb-2">Stops Schedule</h3>
        <div className="text-sm space-y-3">
          {route.stops.map((stop, index) => (
            <div key={stop.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  index === 0 ? 'bg-green-500' : 
                  index === route.stops.length - 1 ? 'bg-red-500' : 
                  'bg-primary'
                }`}></div>
                <span className={index === 0 || index === route.stops.length - 1 ? 'font-medium' : ''}>
                  {stop.name}
                </span>
              </div>
              <div className="text-muted-foreground">{stop.arrivalTime}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusSchedule;
