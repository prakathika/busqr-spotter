
import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import type { BusRoute } from '../utils/busData';

interface RouteMapProps {
  route: BusRoute;
}

const RouteMap = ({ route }: RouteMapProps) => {
  return (
    <div className="space-y-4">
      <div className="glass-card rounded-xl p-4">
        <h3 className="font-medium text-lg mb-3">{route.name} Route</h3>
        <div className="text-sm text-muted-foreground mb-4">
          {route.stops.length} stops from {route.stops[0].name} to {route.stops[route.stops.length - 1].name}
        </div>
        
        <div className="space-y-1 relative">
          {route.stops.map((stop, index) => {
            const isFirst = index === 0;
            const isLast = index === route.stops.length - 1;
            
            return (
              <div key={stop.id} className="relative">
                <div className="flex items-start pl-6 py-3 relative">
                  <div className="absolute left-0 top-0 mt-3.5 flex flex-col items-center">
                    <div className={`route-dot ${isFirst ? 'bg-green-500' : isLast ? 'bg-red-500' : 'bg-primary'}`}></div>
                    {!isLast && <div className="route-line h-full min-h-[40px]"></div>}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{stop.name}</h4>
                      <div className="text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 inline mr-1" />
                        {stop.arrivalTime}
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground mt-1">
                      {isFirst ? 'Departure' : isLast ? 'Final Destination' : 'Est. time at stop: 5 min'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="glass-card rounded-xl p-4">
        <h3 className="font-medium mb-2">Route Information</h3>
        <div className="text-sm space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Stops</span>
            <span>{route.stops.length}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Estimated Duration</span>
            <span>
              {(() => {
                const first = route.stops[0];
                const last = route.stops[route.stops.length - 1];
                
                const startTime = first.departureTime.split(':').map(Number);
                const endTime = last.arrivalTime.split(':').map(Number);
                
                const startMinutes = startTime[0] * 60 + startTime[1];
                const endMinutes = endTime[0] * 60 + endTime[1];
                
                const durationMinutes = endMinutes - startMinutes;
                
                const hours = Math.floor(durationMinutes / 60);
                const minutes = durationMinutes % 60;
                
                return `${hours}h ${minutes}m`;
              })()}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Distance</span>
            <span>14.5 km</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteMap;
