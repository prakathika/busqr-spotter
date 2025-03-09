
import { useState } from 'react';
import { getAllBuses } from '../utils/busData';
import QRCodeDisplay from '@/components/QRCodeDisplay';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QRCodes = () => {
  const navigate = useNavigate();
  const buses = getAllBuses();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/')}
          className="flex items-center text-muted-foreground"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Button>
      </div>
      
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Tamilnadu Bus QR Codes</h1>
        <p className="text-muted-foreground">
          Scan any of these QR codes to view complete bus information
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {buses.map(bus => (
          <div key={bus.id} className="flex flex-col items-center">
            <QRCodeDisplay 
              busId={bus.id} 
              busNumber={bus.busNumber} 
            />
            <div className="mt-4 text-center px-4">
              <h3 className="font-medium">{bus.route.name}</h3>
              <p className="text-sm text-muted-foreground">
                {bus.route.stops[0].name} to {bus.route.stops[bus.route.stops.length - 1].name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRCodes;
