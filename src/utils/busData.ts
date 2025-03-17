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

// Different bus images for each bus
const busImages = {
  tnstc001: [
    'https://images.unsplash.com/photo-1591635566278-10dca0ca76ee?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1561361513-2d000a50f2ef?q=80&w=2676&auto=format&fit=crop',
  ],
  tnstc002: [
    'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=2864&auto=format&fit=crop',
  ],
  tnstc003: [
    'https://images.unsplash.com/photo-1569158226571-4a01aa1a97af?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562613137-3a4102eb95d2?q=80&w=2894&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1478222642985-a60e937ff593?q=80&w=2940&auto=format&fit=crop',
  ],
  tnstc004: [
    'https://images.unsplash.com/photo-1586336902201-ce3c472cec11?q=80&w=2787&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563115298-e9519ae1b366?q=80&w=2940&auto=format&fit=crop',
  ],
  tnstc005: [
    'https://images.unsplash.com/photo-1548345886-68c39fc74df4?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556122071-e404cb8e06b3?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582560486650-5329af87b090?q=80&w=2940&auto=format&fit=crop',
  ],
  // Additional buses
  tnstc006: [
    'https://images.unsplash.com/photo-1556221538-1823f11b44e5?q=80&w=2787&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581222427812-cf1e886d7ea6?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506632035710-acd576ae6ef3?q=80&w=2834&auto=format&fit=crop',
  ],
  tnstc007: [
    'https://images.unsplash.com/photo-1611873991627-324575da835c?q=80&w=2835&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1577777911184-2ef10188c098?q=80&w=2778&auto=format&fit=crop',
  ],
  tnstc008: [
    'https://images.unsplash.com/photo-1612551891579-4d7e5ce6e829?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590063304639-af6d4deb3a38?q=80&w=2840&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506750413886-63eb41221b09?q=80&w=2787&auto=format&fit=crop',
  ],
  tnstc009: [
    'https://images.unsplash.com/photo-1609763816663-a7742da1ce84?q=80&w=2787&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605196560547-b2f7281f2fc1?q=80&w=2787&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1533467915241-eac02e856653?q=80&w=2835&auto=format&fit=crop',
  ],
  tnstc010: [
    'https://images.unsplash.com/photo-1422360902398-0a91ff2c1a1f?q=80&w=2831&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1613836255000-931afb553540?q=80&w=2948&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1525876667071-b233860e9efa?q=80&w=2940&auto=format&fit=crop',
  ],
  tnstc011: [
    'https://images.unsplash.com/photo-1560465382-aaee3ec09f5f?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1578599133798-ce27301e5e34?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560735547-bb9481c58f66?q=80&w=2940&auto=format&fit=crop',
  ],
  tnstc012: [
    'https://images.unsplash.com/photo-1611773953563-de5419c3bc41?q=80&w=2787&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=2873&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2940&auto=format&fit=crop',
  ],
  tnstc013: [
    'https://images.unsplash.com/photo-1553434146-bb9e5ad8c2aa?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1455620611406-966ca6889d80?q=80&w=2930&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1554423942-b32ae51772b7?q=80&w=2835&auto=format&fit=crop',
  ],
  tnstc014: [
    'https://images.unsplash.com/photo-1578983033510-9a2c342d3b9c?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590166809304-f2a0f1b5e05f?q=80&w=2835&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1586152478875-682758802400?q=80&w=2836&auto=format&fit=crop',
  ],
  tnstc015: [
    'https://images.unsplash.com/photo-1613253831874-c586fd89ef72?q=80&w=2774&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517439270744-8c9e4c4235f9?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1620211582087-b11748d3a29d?q=80&w=2942&auto=format&fit=crop',
  ],
};

// Different driver images
const driverImages = [
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2787&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=2787&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=2787&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=2866&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2880&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2880&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop',
];

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
      image: driverImages[0]
    },
    busType: 'AC Sleeper',
    capacity: 40,
    amenities: ['USB Charging', 'Air Conditioning', 'Blankets', 'Water Bottle'],
    images: busImages.tnstc001,
    schedule: {
      weekday: ['21:30', '22:00', '22:30'],
      weekend: ['20:00', '21:30', '23:00']
    },
    description: 'Premium AC Sleeper service from Chennai to Coimbatore. Comfortable overnight journey with modern amenities and experienced drivers.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc001'
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
      image: driverImages[1]
    },
    busType: 'Super Deluxe',
    capacity: 54,
    amenities: ['Wi-Fi', 'Reading Light', 'Comfortable Seating', 'Emergency Exit'],
    images: busImages.tnstc002,
    schedule: {
      weekday: ['09:15', '13:30', '17:45'],
      weekend: ['08:15', '12:30', '16:45']
    },
    description: 'Regular Super Deluxe service connecting the pilgrim city of Madurai to the holy island of Rameswaram. Route includes crossing the famous Pamban Bridge.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc002'
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
      image: driverImages[2]
    },
    busType: 'Hill Service',
    capacity: 32,
    amenities: ['Heating', 'First Aid Kit', 'Extra Luggage Space', 'Oxygen Supply'],
    images: busImages.tnstc003,
    schedule: {
      weekday: ['08:15', '12:30', '16:45'],
      weekend: ['07:15', '11:30', '15:45']
    },
    description: 'Special hill service bus connecting Coimbatore to the popular hill station of Ooty. Drivers are specially trained for navigating the 36 hairpin bends on this scenic route.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc003'
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
      image: driverImages[3]
    },
    busType: 'Ultra Deluxe',
    capacity: 48,
    amenities: ['Push-back Seats', 'LCD TV', 'Free Wi-Fi', 'Newspaper'],
    images: busImages.tnstc004,
    schedule: {
      weekday: ['07:15', '10:15', '14:15', '18:15'],
      weekend: ['08:15', '12:15', '16:15', '20:15']
    },
    description: 'Ultra deluxe service connecting the historical cities of Trichy and Thanjavur. Stops at the famous Srirangam temple en route.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc004'
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
      image: driverImages[4]
    },
    busType: 'Pilgrimage Special',
    capacity: 56,
    amenities: ['Religious Music', 'Prayer Space', 'Water Dispenser', 'Comfortable Seating'],
    images: busImages.tnstc005,
    schedule: {
      weekday: ['06:15', '12:15', '18:15'],
      weekend: ['05:15', '08:15', '11:15', '14:15', '17:15']
    },
    description: 'Special pilgrimage bus service connecting Chennai to the famous temple town of Tirupati. Extra frequency during weekends and festival seasons.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc005'
  },
  
  // Adding 10 more buses focusing on Coimbatore routes
  'tnstc006': {
    id: 'tnstc006',
    busNumber: 'TN 38 CB 1234',
    route: {
      id: 'route6',
      name: 'Coimbatore - Tiruppur',
      stops: [
        {
          id: 'stop22',
          name: 'Coimbatore Gandhipuram',
          arrivalTime: '08:30',
          departureTime: '08:45',
          location: { lat: 11.0168, lng: 76.9558 }
        },
        {
          id: 'stop23',
          name: 'Coimbatore Singanallur',
          arrivalTime: '09:15',
          departureTime: '09:20',
          location: { lat: 11.0089, lng: 77.0320 }
        },
        {
          id: 'stop24',
          name: 'Avinashi',
          arrivalTime: '10:00',
          departureTime: '10:05',
          location: { lat: 11.1734, lng: 77.2681 }
        },
        {
          id: 'stop25',
          name: 'Tiruppur Bus Stand',
          arrivalTime: '10:40',
          departureTime: '10:50',
          location: { lat: 11.1075, lng: 77.3398 }
        }
      ]
    },
    driver: {
      id: 'driver6',
      name: 'Arumugam Selvan',
      contactNumber: '98765-43210',
      experience: '8 years',
      image: driverImages[5]
    },
    busType: 'Express',
    capacity: 52,
    amenities: ['Comfortable Seating', 'Reading Light', 'Luggage Space'],
    images: busImages.tnstc006,
    schedule: {
      weekday: ['06:45', '08:45', '10:45', '12:45', '14:45', '16:45', '18:45'],
      weekend: ['07:45', '09:45', '11:45', '13:45', '15:45', '17:45', '19:45']
    },
    description: 'Regular express service connecting Coimbatore to the textile hub of Tiruppur. Frequent daily departures for commuters and business travelers.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc006'
  },
  'tnstc007': {
    id: 'tnstc007',
    busNumber: 'TN 43 CB 7890',
    route: {
      id: 'route7',
      name: 'Coimbatore - Pollachi',
      stops: [
        {
          id: 'stop26',
          name: 'Coimbatore Central',
          arrivalTime: '07:30',
          departureTime: '07:45',
          location: { lat: 11.0017, lng: 76.9643 }
        },
        {
          id: 'stop27',
          name: 'Sundarapuram',
          arrivalTime: '08:15',
          departureTime: '08:20',
          location: { lat: 10.9793, lng: 76.9424 }
        },
        {
          id: 'stop28',
          name: 'Kinathukadavu',
          arrivalTime: '08:50',
