
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBusById } from '../utils/busData';
import BusDetails from '@/components/BusDetails';
import { toast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

const BusInfo = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [bus, setBus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }

    // Request notification permission early
    const checkNotificationPermission = () => {
      if ("Notification" in window) {
        // Log current permission without requesting it
        console.log("Notification permission:", Notification.permission);
      }
    };
    
    // Check permission without showing prompt
    checkNotificationPermission();

    const loadBusInfo = async () => {
      try {
        setLoading(true);
        // Simulate network delay for demo
        await new Promise(resolve => setTimeout(resolve, 800));
        const busInfo = getBusById(id);
        
        if (!busInfo) {
          toast({
            title: "Bus Not Found",
            description: "Unable to find information for this bus",
            variant: "destructive",
            duration: 3000,
          });
          navigate('/');
          return;
        }
        
        setBus(busInfo);
      } catch (error) {
        console.error('Error loading bus info:', error);
        toast({
          title: "Error",
          description: "Failed to load bus information",
          variant: "destructive",
          duration: 3000,
        });
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    loadBusInfo();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
        <p className="text-muted-foreground">Loading bus information...</p>
      </div>
    );
  }

  if (!bus) return null;

  return <BusDetails bus={bus} />;
};

export default BusInfo;
