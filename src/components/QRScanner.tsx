
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { scanQRCode, saveRecentScan } from '../utils/busData';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Loader2, ScanLine, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';

const QRScanner = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const timerRef = useRef<number | null>(null);

  const handleScan = async () => {
    setIsScanning(true);
    // Simulate countdown timer for demo
    setCountdown(3);
    
    timerRef.current = window.setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current as number);
          // In a real app, we would use a QR scanner library
          // For demo, just simulate scanning one of our mock buses
          simulateScan();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const simulateScan = async () => {
    try {
      // Randomly select one of our mock buses for demo
      const busIds = ['tnstc001', 'tnstc002', 'tnstc003', 'tnstc004', 'tnstc005'];
      const randomBusId = busIds[Math.floor(Math.random() * busIds.length)];
      
      // Use the actual app URL format for scanning
      const bus = await scanQRCode(`https://busqr-spotter.lovable.app/${randomBusId}`);
      saveRecentScan(randomBusId);
      
      toast({
        title: "QR Code Scanned",
        description: `Found bus ${bus.busNumber}`,
        duration: 3000,
      });
      
      // Navigate to bus details page
      navigate(`/bus/${randomBusId}`);
    } catch (error) {
      toast({
        title: "Scan Failed",
        description: "Unable to recognize QR code",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsScanning(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col items-center space-y-6">
        <div className="qr-scan-overlay w-64 h-64 md:w-80 md:h-80 mx-auto bg-black/5">
          {isScanning ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <ScanLine className="w-full h-full text-primary/50 animate-pulse-light" />
              {countdown > 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white drop-shadow-lg">{countdown}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-6 glass-card rounded-xl">
                <p className="text-sm text-muted-foreground font-medium">Position QR code within frame</p>
              </div>
            </div>
          )}
        </div>
        
        <Button
          onClick={handleScan}
          disabled={isScanning}
          className="w-full max-w-xs transition-all duration-300 bg-primary hover:bg-primary/90 text-white font-medium py-6 rounded-xl shadow-lg"
        >
          {isScanning ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Scanning...
            </>
          ) : (
            "Scan QR Code"
          )}
        </Button>
        
        <p className="text-sm text-center text-muted-foreground max-w-xs">
          Scan the QR code on any TNSTC bus to view complete information about its route, schedule, and driver details.
        </p>
        
        <div className="w-full max-w-xs">
          <Link to="/qrcodes">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <QrCode className="h-4 w-4" />
              View Available QR Codes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
