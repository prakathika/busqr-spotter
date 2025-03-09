
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { History, Bus, MapPin, Calendar } from 'lucide-react';
import { getRecentScans } from '../utils/busData';
import type { Bus as BusType } from '../utils/busData';
import { Card, CardContent } from '@/components/ui/card';

const RecentScans = () => {
  const navigate = useNavigate();
  const [recentBuses, setRecentBuses] = useState<BusType[]>([]);
  
  useEffect(() => {
    const loadRecentScans = () => {
      const scans = getRecentScans();
      setRecentBuses(scans);
    };
    
    loadRecentScans();
    
    // Listen for storage events to update recent scans
    window.addEventListener('storage', loadRecentScans);
    
    return () => {
      window.removeEventListener('storage', loadRecentScans);
    };
  }, []);
  
  if (recentBuses.length === 0) {
    return null;
  }
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4 flex items-center space-x-2">
        <History className="h-4 w-4 text-primary" />
        <h2 className="text-lg font-medium">Recent Scans</h2>
      </div>
      
      <div className="space-y-3">
        {recentBuses.map((bus) => (
          <Card 
            key={bus.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer"
            onClick={() => navigate(`/bus/${bus.id}`)}
          >
            <div className="flex h-24">
              <div className="w-24 h-full overflow-hidden">
                <img 
                  src={bus.images[0]} 
                  alt={bus.busNumber}
                  className="h-full w-full object-cover" 
                />
              </div>
              
              <CardContent className="flex-1 p-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <Bus className="h-3.5 w-3.5 mr-1 text-primary" />
                    <h3 className="font-medium">{bus.busNumber}</h3>
                  </div>
                  
                  <div className={`text-xs px-1.5 py-0.5 rounded-full ${
                    bus.status === 'active' ? 'bg-green-100 text-green-800' :
                    bus.status === 'delayed' ? 'bg-amber-100 text-amber-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {bus.status === 'active' ? 'Active' : 
                     bus.status === 'delayed' ? 'Delayed' : 
                     'Out of Service'}
                  </div>
                </div>
                
                <div className="text-xs text-muted-foreground flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {bus.route.name}
                </div>
                
                <div className="text-xs mt-1.5 text-muted-foreground flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Last scanned: {new Date().toLocaleDateString()}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentScans;
