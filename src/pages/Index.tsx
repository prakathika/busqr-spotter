
import { useState, useEffect } from 'react';
import QRScanner from '@/components/QRScanner';
import RecentScans from '@/components/RecentScans';
import { Separator } from '@/components/ui/separator';
import { Bus } from 'lucide-react';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 pt-6 pb-20">
        <header className="w-full max-w-md mx-auto mb-8 text-center">
          <div className="inline-flex items-center justify-center space-x-2 mb-2">
            <Bus className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">BusQR Spotter</h1>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs mx-auto">
            Scan any bus QR code to see complete route, schedule and driver information
          </p>
        </header>

        <div className="space-y-12">
          <QRScanner />
          
          <Separator className="w-full max-w-md mx-auto opacity-30" />
          
          <RecentScans />
        </div>
      </div>
    </div>
  );
};

export default Index;
