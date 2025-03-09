// Mock bus data for demonstration
export interface BusStop {
  id: string;
  name: string;
  arrivalTime: string;
  departureTime: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface BusRoute {
  id: string;
  name: string;
  stops: BusStop[];
}

export interface BusDriver {
  id: string;
  name: string;
  contactNumber: string;
  experience: string;
  image: string;
}

export interface Bus {
  id: string;
  busNumber: string;
  route: BusRoute;
  driver: BusDriver;
  busType: string;
  capacity: number;
  amenities: string[];
  images: string[];
  schedule: {
    weekday: string[];
    weekend: string[];
  };
  description: string;
  status: 'active' | 'delayed' | 'outOfService';
  lastUpdated: string;
}

// Mock image URLs
const mockImages = [
  'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2940&auto=format&fit=crop',
];

// Mock driver image URL
const mockDriverImage = 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2940&auto=format&fit=crop';

// Create sample mock data
export const mockBuses: Record<string, Bus> = {
  'bus001': {
    id: 'bus001',
    busNumber: 'RT-1045',
    route: {
      id: 'route1',
      name: 'Downtown Express',
      stops: [
        {
          id: 'stop1',
          name: 'Central Terminal',
          arrivalTime: '08:00',
          departureTime: '08:10',
          location: { lat: 40.7128, lng: -74.006 }
        },
        {
          id: 'stop2',
          name: 'Business District',
          arrivalTime: '08:30',
          departureTime: '08:35',
          location: { lat: 40.7138, lng: -74.013 }
        },
        {
          id: 'stop3',
          name: 'Market Square',
          arrivalTime: '08:55',
          departureTime: '09:00',
          location: { lat: 40.7148, lng: -74.023 }
        },
        {
          id: 'stop4',
          name: 'Tech Park',
          arrivalTime: '09:20',
          departureTime: '09:25',
          location: { lat: 40.7158, lng: -74.033 }
        },
        {
          id: 'stop5',
          name: 'University Campus',
          arrivalTime: '09:45',
          departureTime: '09:50',
          location: { lat: 40.7168, lng: -74.043 }
        }
      ]
    },
    driver: {
      id: 'driver1',
      name: 'Michael Johnson',
      contactNumber: '(555) 123-4567',
      experience: '8 years',
      image: mockDriverImage
    },
    busType: 'Electric',
    capacity: 45,
    amenities: ['Wi-Fi', 'USB Charging', 'Air Conditioning', 'Accessibility Ramp'],
    images: mockImages,
    schedule: {
      weekday: ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
      weekend: ['8:00', '12:00', '16:00', '20:00']
    },
    description: 'The Downtown Express provides efficient service connecting residential areas to the business district. This modern electric bus offers comfort and amenities for your commute.',
    status: 'active',
    lastUpdated: new Date().toISOString()
  },
  'bus002': {
    id: 'bus002',
    busNumber: 'RT-2089',
    route: {
      id: 'route2',
      name: 'Coastal Route',
      stops: [
        {
          id: 'stop6',
          name: 'Harbor Terminal',
          arrivalTime: '07:30',
          departureTime: '07:40',
          location: { lat: 40.7228, lng: -74.106 }
        },
        {
          id: 'stop7',
          name: 'Bayside Park',
          arrivalTime: '08:00',
          departureTime: '08:05',
          location: { lat: 40.7238, lng: -74.113 }
        },
        {
          id: 'stop8',
          name: 'Marina View',
          arrivalTime: '08:25',
          departureTime: '08:30',
          location: { lat: 40.7248, lng: -74.123 }
        },
        {
          id: 'stop9',
          name: 'Ocean Boulevard',
          arrivalTime: '08:50',
          departureTime: '08:55',
          location: { lat: 40.7258, lng: -74.133 }
        },
        {
          id: 'stop10',
          name: 'Beach Resort',
          arrivalTime: '09:15',
          departureTime: '09:20',
          location: { lat: 40.7268, lng: -74.143 }
        }
      ]
    },
    driver: {
      id: 'driver2',
      name: 'Sarah Williams',
      contactNumber: '(555) 987-6543',
      experience: '5 years',
      image: mockDriverImage
    },
    busType: 'Hybrid',
    capacity: 38,
    amenities: ['Wi-Fi', 'Panoramic Windows', 'Air Conditioning', 'Bicycle Rack'],
    images: mockImages,
    schedule: {
      weekday: ['7:00', '9:00', '11:00', '13:00', '15:00', '17:00', '19:00'],
      weekend: ['9:00', '13:00', '17:00', '21:00']
    },
    description: 'The Coastal Route offers scenic travel along the waterfront districts. Enjoy beautiful views and comfortable amenities on this eco-friendly hybrid bus.',
    status: 'active',
    lastUpdated: new Date().toISOString()
  },
  'bus003': {
    id: 'bus003',
    busNumber: 'RT-3567',
    route: {
      id: 'route3',
      name: 'Mountain Explorer',
      stops: [
        {
          id: 'stop11',
          name: 'Valley Station',
          arrivalTime: '06:45',
          departureTime: '06:55',
          location: { lat: 40.7328, lng: -74.206 }
        },
        {
          id: 'stop12',
          name: 'Hillside Avenue',
          arrivalTime: '07:15',
          departureTime: '07:20',
          location: { lat: 40.7338, lng: -74.213 }
        },
        {
          id: 'stop13',
          name: 'Mountain View',
          arrivalTime: '07:45',
          departureTime: '07:50',
          location: { lat: 40.7348, lng: -74.223 }
        },
        {
          id: 'stop14',
          name: 'Summit Center',
          arrivalTime: '08:15',
          departureTime: '08:20',
          location: { lat: 40.7358, lng: -74.233 }
        },
        {
          id: 'stop15',
          name: 'Park Entrance',
          arrivalTime: '08:45',
          departureTime: '08:50',
          location: { lat: 40.7368, lng: -74.243 }
        }
      ]
    },
    driver: {
      id: 'driver3',
      name: 'David Chen',
      contactNumber: '(555) 456-7890',
      experience: '12 years',
      image: mockDriverImage
    },
    busType: 'Standard',
    capacity: 42,
    amenities: ['Luggage Space', 'Wi-Fi', 'Air Conditioning', 'Panoramic Roof'],
    images: mockImages,
    schedule: {
      weekday: ['6:30', '8:30', '10:30', '12:30', '14:30', '16:30', '18:30'],
      weekend: ['8:30', '10:30', '14:30', '16:30', '18:30']
    },
    description: 'The Mountain Explorer connects urban areas to the natural park region. Designed for comfort during longer journeys with extra luggage space for outdoor equipment.',
    status: 'active',
    lastUpdated: new Date().toISOString()
  }
};

// Function to get bus info by ID (simulates QR code scan)
export const getBusById = (id: string): Bus | undefined => {
  return mockBuses[id];
};

// Function to simulate scanning a QR code
export const scanQRCode = (qrValue: string): Promise<Bus | undefined> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bus = getBusById(qrValue);
      if (bus) {
        resolve(bus);
      } else {
        reject(new Error('Invalid QR code or bus not found'));
      }
    }, 1500); // Simulate network delay
  });
};

// Function to get recent scans from localStorage
export const getRecentScans = (): Bus[] => {
  try {
    const scans = localStorage.getItem('recentScans');
    if (scans) {
      const scanIds = JSON.parse(scans) as string[];
      return scanIds.map(id => mockBuses[id]).filter(bus => bus !== undefined) as Bus[];
    }
  } catch (error) {
    console.error('Error retrieving recent scans:', error);
  }
  return [];
};

// Function to save a scan to localStorage
export const saveRecentScan = (busId: string): void => {
  try {
    const scans = localStorage.getItem('recentScans');
    let scanIds: string[] = [];
    
    if (scans) {
      scanIds = JSON.parse(scans) as string[];
    }
    
    // Remove the busId if it exists already (to move it to the front)
    scanIds = scanIds.filter(id => id !== busId);
    
    // Add the new busId to the front
    scanIds.unshift(busId);
    
    // Keep only the most recent 5 scans
    scanIds = scanIds.slice(0, 5);
    
    localStorage.setItem('recentScans', JSON.stringify(scanIds));
  } catch (error) {
    console.error('Error saving recent scan:', error);
  }
};
