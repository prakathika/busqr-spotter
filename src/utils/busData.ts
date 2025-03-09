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
  qrCodeValue: string; // Added field for QR code
}

// Mock image URLs
const mockImages = [
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1562613137-3a4102eb95d2?q=80&w=2894&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1563115298-e9519ae1b366?q=80&w=2940&auto=format&fit=crop',
];

// Mock driver image URL
const mockDriverImage = 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2940&auto=format&fit=crop';

// Create Tamilnadu bus data
export const mockBuses: Record<string, Bus> = {
  'tnstc001': {
    id: 'tnstc001',
    busNumber: 'TN 01 N 3456',
    route: {
      id: 'route1',
      name: 'Chennai - Coimbatore',
      stops: [
        {
          id: 'stop1',
          name: 'Chennai CMBT',
          arrivalTime: '21:00',
          departureTime: '21:30',
          location: { lat: 13.0702, lng: 80.1952 }
        },
        {
          id: 'stop2',
          name: 'Kanchipuram',
          arrivalTime: '22:45',
          departureTime: '22:50',
          location: { lat: 12.8342, lng: 79.7036 }
        },
        {
          id: 'stop3',
          name: 'Vellore',
          arrivalTime: '00:15',
          departureTime: '00:25',
          location: { lat: 12.9165, lng: 79.1325 }
        },
        {
          id: 'stop4',
          name: 'Salem',
          arrivalTime: '03:30',
          departureTime: '03:45',
          location: { lat: 11.6643, lng: 78.1460 }
        },
        {
          id: 'stop5',
          name: 'Coimbatore Gandhipuram',
          arrivalTime: '06:30',
          departureTime: '06:40',
          location: { lat: 11.0168, lng: 76.9558 }
        }
      ]
    },
    driver: {
      id: 'driver1',
      name: 'Murugan Senthil',
      contactNumber: '94421-56789',
      experience: '12 years',
      image: mockDriverImage
    },
    busType: 'AC Sleeper',
    capacity: 40,
    amenities: ['USB Charging', 'Air Conditioning', 'Blankets', 'Water Bottle'],
    images: mockImages,
    schedule: {
      weekday: ['21:30', '22:00', '22:30'],
      weekend: ['20:00', '21:30', '23:00']
    },
    description: 'Premium AC Sleeper service from Chennai to Coimbatore. Comfortable overnight journey with modern amenities and experienced drivers.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/tnstc001'
  },
  'tnstc002': {
    id: 'tnstc002',
    busNumber: 'TN 38 N 7892',
    route: {
      id: 'route2',
      name: 'Madurai - Rameswaram',
      stops: [
        {
          id: 'stop6',
          name: 'Madurai Mattuthavani',
          arrivalTime: '09:00',
          departureTime: '09:15',
          location: { lat: 9.9252, lng: 78.1198 }
        },
        {
          id: 'stop7',
          name: 'Ramanathapuram',
          arrivalTime: '11:30',
          departureTime: '11:40',
          location: { lat: 9.3639, lng: 78.8395 }
        },
        {
          id: 'stop8',
          name: 'Pamban Bridge',
          arrivalTime: '12:30',
          departureTime: '12:35',
          location: { lat: 9.2796, lng: 79.2162 }
        },
        {
          id: 'stop9',
          name: 'Rameswaram Temple',
          arrivalTime: '13:00',
          departureTime: '13:10',
          location: { lat: 9.2876, lng: 79.3129 }
        }
      ]
    },
    driver: {
      id: 'driver2',
      name: 'Selvam Raja',
      contactNumber: '96775-43210',
      experience: '8 years',
      image: mockDriverImage
    },
    busType: 'Super Deluxe',
    capacity: 54,
    amenities: ['Wi-Fi', 'Reading Light', 'Comfortable Seating', 'Emergency Exit'],
    images: mockImages,
    schedule: {
      weekday: ['09:15', '13:30', '17:45'],
      weekend: ['08:15', '12:30', '16:45']
    },
    description: 'Regular Super Deluxe service connecting the pilgrim city of Madurai to the holy island of Rameswaram. Route includes crossing the famous Pamban Bridge.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/tnstc002'
  },
  'tnstc003': {
    id: 'tnstc003',
    busNumber: 'TN 43 X 5123',
    route: {
      id: 'route3',
      name: 'Coimbatore - Ooty',
      stops: [
        {
          id: 'stop10',
          name: 'Coimbatore Gandhipuram',
          arrivalTime: '08:00',
          departureTime: '08:15',
          location: { lat: 11.0168, lng: 76.9558 }
        },
        {
          id: 'stop11',
          name: 'Mettupalayam',
          arrivalTime: '09:30',
          departureTime: '09:40',
          location: { lat: 11.2990, lng: 76.9366 }
        },
        {
          id: 'stop12',
          name: 'Coonoor',
          arrivalTime: '11:15',
          departureTime: '11:25',
          location: { lat: 11.3530, lng: 76.7959 }
        },
        {
          id: 'stop13',
          name: 'Ooty Bus Stand',
          arrivalTime: '12:30',
          departureTime: '12:45',
          location: { lat: 11.4102, lng: 76.6950 }
        }
      ]
    },
    driver: {
      id: 'driver3',
      name: 'Karthik Subramani',
      contactNumber: '98432-12345',
      experience: '15 years',
      image: mockDriverImage
    },
    busType: 'Hill Service',
    capacity: 32,
    amenities: ['Heating', 'First Aid Kit', 'Extra Luggage Space', 'Oxygen Supply'],
    images: mockImages,
    schedule: {
      weekday: ['08:15', '12:30', '16:45'],
      weekend: ['07:15', '11:30', '15:45']
    },
    description: 'Special hill service bus connecting Coimbatore to the popular hill station of Ooty. Drivers are specially trained for navigating the 36 hairpin bends on this scenic route.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/tnstc003'
  },
  'tnstc004': {
    id: 'tnstc004',
    busNumber: 'TN 19 G 3678',
    route: {
      id: 'route4',
      name: 'Trichy - Thanjavur',
      stops: [
        {
          id: 'stop14',
          name: 'Trichy Central',
          arrivalTime: '14:00',
          departureTime: '14:15',
          location: { lat: 10.7905, lng: 78.7047 }
        },
        {
          id: 'stop15',
          name: 'Srirangam',
          arrivalTime: '14:40',
          departureTime: '14:45',
          location: { lat: 10.8624, lng: 78.6974 }
        },
        {
          id: 'stop16',
          name: 'Thiruverumbur',
          arrivalTime: '15:10',
          departureTime: '15:15',
          location: { lat: 10.7905, lng: 78.7672 }
        },
        {
          id: 'stop17',
          name: 'Thanjavur Old Bus Stand',
          arrivalTime: '16:00',
          departureTime: '16:10',
          location: { lat: 10.7869, lng: 79.1378 }
        }
      ]
    },
    driver: {
      id: 'driver4',
      name: 'Gopal Krishnan',
      contactNumber: '94875-67890',
      experience: '9 years',
      image: mockDriverImage
    },
    busType: 'Ultra Deluxe',
    capacity: 48,
    amenities: ['Push-back Seats', 'LCD TV', 'Free Wi-Fi', 'Newspaper'],
    images: mockImages,
    schedule: {
      weekday: ['07:15', '10:15', '14:15', '18:15'],
      weekend: ['08:15', '12:15', '16:15', '20:15']
    },
    description: 'Ultra deluxe service connecting the historical cities of Trichy and Thanjavur. Stops at the famous Srirangam temple en route.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/tnstc004'
  },
  'tnstc005': {
    id: 'tnstc005',
    busNumber: 'TN 69 Z 2341',
    route: {
      id: 'route5',
      name: 'Chennai - Tirupati',
      stops: [
        {
          id: 'stop18',
          name: 'Chennai Koyambedu',
          arrivalTime: '06:00',
          departureTime: '06:15',
          location: { lat: 13.0702, lng: 80.1952 }
        },
        {
          id: 'stop19',
          name: 'Tiruvallur',
          arrivalTime: '07:15',
          departureTime: '07:20',
          location: { lat: 13.1429, lng: 79.9120 }
        },
        {
          id: 'stop20',
          name: 'Tiruttani',
          arrivalTime: '08:15',
          departureTime: '08:25',
          location: { lat: 13.1784, lng: 79.6369 }
        },
        {
          id: 'stop21',
          name: 'Tirupati Bus Stand',
          arrivalTime: '10:30',
          departureTime: '10:45',
          location: { lat: 13.6288, lng: 79.4192 }
        }
      ]
    },
    driver: {
      id: 'driver5',
      name: 'Venkatesh Kumar',
      contactNumber: '89256-34567',
      experience: '11 years',
      image: mockDriverImage
    },
    busType: 'Pilgrimage Special',
    capacity: 56,
    amenities: ['Religious Music', 'Prayer Space', 'Water Dispenser', 'Comfortable Seating'],
    images: mockImages,
    schedule: {
      weekday: ['06:15', '12:15', '18:15'],
      weekend: ['05:15', '08:15', '11:15', '14:15', '17:15']
    },
    description: 'Special pilgrimage bus service connecting Chennai to the famous temple town of Tirupati. Extra frequency during weekends and festival seasons.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/tnstc005'
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
      // Extract bus ID from URL - supporting both /bus/id and direct /id patterns
      const parts = qrValue.split('/');
      const busId = parts[parts.length - 1];
      
      const bus = getBusById(busId);
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

// Generate QR code URLs for each bus
export const generateQRCodeUrl = (busId: string): string => {
  // Use our actual app URL for QR code generation
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`https://busqr-spotter.lovable.app/${busId}`)}`;
};

// Get all available buses
export const getAllBuses = (): Bus[] => {
  return Object.values(mockBuses);
};
