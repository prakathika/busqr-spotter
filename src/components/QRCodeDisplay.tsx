
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateQRCodeUrl } from '../utils/busData';
import { Button } from '@/components/ui/button';
import { Download, QrCode } from 'lucide-react';

interface QRCodeDisplayProps {
  busId: string;
  busNumber: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ busId, busNumber }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageError, setIsImageError] = useState(false);
  
  // Generate QR code URL with timestamp to prevent caching
  const qrCodeUrl = generateQRCodeUrl(busId);
  
  const handleDownload = () => {
    // Create a temporary link to download the QR code
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `QRCode-${busNumber}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageLoad = () => {
    console.log("QR code image loaded successfully for bus:", busNumber);
    setIsImageLoaded(true);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error("QR Code image failed to load for bus:", busNumber, e);
    setIsImageError(true);
    // Don't set source here, we'll handle it in the render
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <QrCode className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Bus QR Code</CardTitle>
        </div>
        <CardDescription>Scan this QR code to get bus details</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="border-2 border-muted p-2 rounded-lg bg-white">
          {isImageError ? (
            <div className="w-48 h-48 flex items-center justify-center bg-gray-100 text-gray-500">
              <QrCode size={80} />
            </div>
          ) : (
            <img 
              src={qrCodeUrl}
              alt={`QR Code for ${busNumber}`}
              className="w-48 h-48 object-contain"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </div>
        <div className="text-center">
          <p className="font-medium">{busNumber}</p>
          <p className="text-sm text-muted-foreground">TNSTC Bus</p>
        </div>
        <Button onClick={handleDownload} variant="outline" className="w-full gap-2">
          <Download className="h-4 w-4" />
          Download QR Code
        </Button>
      </CardContent>
    </Card>
  );
};

export default QRCodeDisplay;
