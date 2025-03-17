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
          departureTime: '08:55',
          location: { lat: 10.8236, lng: 77.0092 }
        },
        {
          id: 'stop29',
          name: 'Pollachi Bus Stand',
          arrivalTime: '09:30',
          departureTime: '09:45',
          location: { lat: 10.6586, lng: 77.0087 }
        }
      ]
    },
    driver: {
      id: 'driver7',
      name: 'Raj Kumar',
      contactNumber: '87654-32109',
      experience: '7 years',
      image: driverImages[6]
    },
    busType: 'Standard',
    capacity: 48,
    amenities: ['Comfortable Seating', 'Fan', 'Emergency Exit'],
    images: busImages.tnstc007,
    schedule: {
      weekday: ['07:45', '09:45', '11:45', '13:45', '15:45', '17:45'],
      weekend: ['08:45', '10:45', '12:45', '14:45', '16:45', '18:45']
    },
    description: 'Regular service connecting Coimbatore city to the agricultural town of Pollachi. Frequent daily departures.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc007'
  },
  'tnstc008': {
    id: 'tnstc008',
    busNumber: 'TN 43 AE 5678',
    route: {
      id: 'route8',
      name: 'Coimbatore - Erode',
      stops: [
        {
          id: 'stop30',
          name: 'Coimbatore Gandhipuram',
          arrivalTime: '10:00',
          departureTime: '10:15',
          location: { lat: 11.0168, lng: 76.9558 }
        },
        {
          id: 'stop31',
          name: 'Avinashi',
          arrivalTime: '11:00',
          departureTime: '11:05',
          location: { lat: 11.1734, lng: 77.2681 }
        },
        {
          id: 'stop32',
          name: 'Perundurai',
          arrivalTime: '11:45',
          departureTime: '11:50',
          location: { lat: 11.2768, lng: 77.5830 }
        },
        {
          id: 'stop33',
          name: 'Erode Central Bus Stand',
          arrivalTime: '12:30',
          departureTime: '12:45',
          location: { lat: 11.3410, lng: 77.7172 }
        }
      ]
    },
    driver: {
      id: 'driver8',
      name: 'Saravanan M',
      contactNumber: '76543-21098',
      experience: '10 years',
      image: driverImages[7]
    },
    busType: 'Super Express',
    capacity: 50,
    amenities: ['Push-back Seats', 'Reading Light', 'Mobile Charging', 'Water Bottle'],
    images: busImages.tnstc008,
    schedule: {
      weekday: ['06:15', '08:15', '10:15', '12:15', '14:15', '16:15', '18:15'],
      weekend: ['07:15', '09:15', '11:15', '13:15', '15:15', '17:15', '19:15']
    },
    description: 'Super express service connecting Coimbatore to the textile city of Erode. Limited stops for faster journey.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc008'
  },
  'tnstc009': {
    id: 'tnstc009',
    busNumber: 'TN 43 BC 9012',
    route: {
      id: 'route9',
      name: 'Coimbatore - Palani',
      stops: [
        {
          id: 'stop34',
          name: 'Coimbatore Singanallur',
          arrivalTime: '09:30',
          departureTime: '09:45',
          location: { lat: 11.0089, lng: 77.0320 }
        },
        {
          id: 'stop35',
          name: 'Pollachi',
          arrivalTime: '11:00',
          departureTime: '11:10',
          location: { lat: 10.6586, lng: 77.0087 }
        },
        {
          id: 'stop36',
          name: 'Udumalpet',
          arrivalTime: '12:00',
          departureTime: '12:10',
          location: { lat: 10.5828, lng: 77.2510 }
        },
        {
          id: 'stop37',
          name: 'Palani Temple Bus Stop',
          arrivalTime: '13:30',
          departureTime: '13:45',
          location: { lat: 10.4509, lng: 77.5120 }
        }
      ]
    },
    driver: {
      id: 'driver9',
      name: 'Manikandan K',
      contactNumber: '65432-10987',
      experience: '9 years',
      image: driverImages[8]
    },
    busType: 'Pilgrimage Special',
    capacity: 54,
    amenities: ['Push-back Seats', 'Religious Music', 'Water Dispenser', 'Prayer Space'],
    images: busImages.tnstc009,
    schedule: {
      weekday: ['09:45', '13:45', '17:45'],
      weekend: ['07:45', '09:45', '11:45', '13:45', '15:45', '17:45', '19:45']
    },
    description: 'Special pilgrimage service connecting Coimbatore to the famous temple town of Palani. Extra frequency during weekends and festival seasons.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc009'
  },
  'tnstc010': {
    id: 'tnstc010',
    busNumber: 'TN 43 S 3456',
    route: {
      id: 'route10',
      name: 'Coimbatore - Salem',
      stops: [
        {
          id: 'stop38',
          name: 'Coimbatore Gandhipuram',
          arrivalTime: '14:00',
          departureTime: '14:15',
          location: { lat: 11.0168, lng: 76.9558 }
        },
        {
          id: 'stop39',
          name: 'Avinashi',
          arrivalTime: '15:00',
          departureTime: '15:05',
          location: { lat: 11.1734, lng: 77.2681 }
        },
        {
          id: 'stop40',
          name: 'Bhavani',
          arrivalTime: '16:15',
          departureTime: '16:20',
          location: { lat: 11.4500, lng: 77.6833 }
        },
        {
          id: 'stop41',
          name: 'Salem New Bus Stand',
          arrivalTime: '17:45',
          departureTime: '18:00',
          location: { lat: 11.6643, lng: 78.1460 }
        }
      ]
    },
    driver: {
      id: 'driver10',
      name: 'Prakash R',
      contactNumber: '54321-09876',
      experience: '11 years',
      image: driverImages[9]
    },
    busType: 'Ultra Deluxe',
    capacity: 48,
    amenities: ['Air Conditioning', 'Push-back Seats', 'TV', 'USB Charging', 'Wi-Fi'],
    images: busImages.tnstc010,
    schedule: {
      weekday: ['06:15', '10:15', '14:15', '18:15'],
      weekend: ['08:15', '12:15', '16:15', '20:15']
    },
    description: 'Ultra deluxe service connecting Coimbatore to Salem. Comfortable journey with all modern amenities.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc010'
  },
  'tnstc011': {
    id: 'tnstc011',
    busNumber: 'TN 43 M 7890',
    route: {
      id: 'route11',
      name: 'Coimbatore - Madurai',
      stops: [
        {
          id: 'stop42',
          name: 'Coimbatore Ukkadam',
          arrivalTime: '20:00',
          departureTime: '20:15',
          location: { lat: 10.9925, lng: 76.9608 }
        },
        {
          id: 'stop43',
          name: 'Pollachi',
          arrivalTime: '21:30',
          departureTime: '21:40',
          location: { lat: 10.6586, lng: 77.0087 }
        },
        {
          id: 'stop44',
          name: 'Dindigul',
          arrivalTime: '00:00',
          departureTime: '00:10',
          location: { lat: 10.3624, lng: 77.9695 }
        },
        {
          id: 'stop45',
          name: 'Madurai Periyar Bus Stand',
          arrivalTime: '02:00',
          departureTime: '02:15',
          location: { lat: 9.9252, lng: 78.1198 }
        }
      ]
    },
    driver: {
      id: 'driver11',
      name: 'Ramesh Kannan',
      contactNumber: '43210-98765',
      experience: '14 years',
      image: driverImages[10]
    },
    busType: 'AC Sleeper',
    capacity: 36,
    amenities: ['Air Conditioning', 'Sleeper Berths', 'Blankets', 'Reading Light', 'USB Charging'],
    images: busImages.tnstc011,
    schedule: {
      weekday: ['20:15', '21:30'],
      weekend: ['19:15', '20:45', '22:15']
    },
    description: 'Premium AC Sleeper overnight service connecting Coimbatore to Madurai. Comfortable sleeper berths for a restful journey.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc011'
  },
  'tnstc012': {
    id: 'tnstc012',
    busNumber: 'TN 43 TH 1234',
    route: {
      id: 'route12',
      name: 'Coimbatore - Thoothukudi',
      stops: [
        {
          id: 'stop46',
          name: 'Coimbatore Ukkadam',
          arrivalTime: '19:00',
          departureTime: '19:15',
          location: { lat: 10.9925, lng: 76.9608 }
        },
        {
          id: 'stop47',
          name: 'Madurai',
          arrivalTime: '23:30',
          departureTime: '23:45',
          location: { lat: 9.9252, lng: 78.1198 }
        },
        {
          id: 'stop48',
          name: 'Kovilpatti',
          arrivalTime: '02:15',
          departureTime: '02:20',
          location: { lat: 9.1735, lng: 77.8706 }
        },
        {
          id: 'stop49',
          name: 'Thoothukudi New Bus Stand',
          arrivalTime: '04:00',
          departureTime: '04:15',
          location: { lat: 8.7642, lng: 78.1348 }
        }
      ]
    },
    driver: {
      id: 'driver12',
      name: 'Subramani V',
      contactNumber: '98765-12345',
      experience: '15 years',
      image: driverImages[11]
    },
    busType: 'Super Deluxe',
    capacity: 50,
    amenities: ['Push-back Seats', 'Blankets', 'Mobile Charging', 'Water Bottle'],
    images: busImages.tnstc012,
    schedule: {
      weekday: ['19:15', '21:15'],
      weekend: ['18:15', '20:15', '22:15']
    },
    description: 'Long-distance super deluxe service connecting Coimbatore to the port city of Thoothukudi. Overnight journey with comfortable seating.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc012'
  },
  'tnstc013': {
    id: 'tnstc013',
    busNumber: 'TN 43 BG 5678',
    route: {
      id: 'route13',
      name: 'Coimbatore - Bangalore',
      stops: [
        {
          id: 'stop50',
          name: 'Coimbatore Gandhipuram',
          arrivalTime: '22:00',
          departureTime: '22:15',
          location: { lat: 11.0168, lng: 76.9558 }
        },
        {
          id: 'stop51',
          name: 'Mettupalayam',
          arrivalTime: '23:15',
          departureTime: '23:20',
          location: { lat: 11.2990, lng: 76.9366 }
        },
        {
          id: 'stop52',
          name: 'Hosur',
          arrivalTime: '03:30',
          departureTime: '03:40',
          location: { lat: 12.7409, lng: 77.8253 }
        },
        {
          id: 'stop53',
          name: 'Bangalore Kempegowda Bus Station',
          arrivalTime: '05:30',
          departureTime: '05:45',
          location: { lat: 12.9770, lng: 77.5773 }
        }
      ]
    },
    driver: {
      id: 'driver13',
      name: 'Vijay Kumar',
      contactNumber: '87654-56789',
      experience: '13 years',
      image: driverImages[12]
    },
    busType: 'AC Sleeper',
    capacity: 38,
    amenities: ['Air Conditioning', 'Sleeper Berths', 'Blankets', 'Mobile Charging', 'Water Bottle'],
    images: busImages.tnstc013,
    schedule: {
      weekday: ['22:15', '23:30'],
      weekend: ['21:15', '22:45', '00:15']
    },
    description: 'Premium AC Sleeper interstate service connecting Coimbatore to Bangalore. Overnight journey with comfortable sleeper berths.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc013'
  },
  'tnstc014': {
    id: 'tnstc014',
    busNumber: 'TN 43 V 9012',
    route: {
      id: 'route14',
      name: 'Coimbatore - Valparai',
      stops: [
        {
          id: 'stop54',
          name: 'Coimbatore Gandhipuram',
          arrivalTime: '07:00',
          departureTime: '07:15',
          location: { lat: 11.0168, lng: 76.9558 }
        },
        {
          id: 'stop55',
          name: 'Pollachi',
          arrivalTime: '08:30',
          departureTime: '08:45',
          location: { lat: 10.6586, lng: 77.0087 }
        },
        {
          id: 'stop56',
          name: 'Aliyar',
          arrivalTime: '09:30',
          departureTime: '09:35',
          location: { lat: 10.4848, lng: 76.9685 }
        },
        {
          id: 'stop57',
          name: 'Valparai Bus Stand',
          arrivalTime: '11:30',
          departureTime: '11:45',
          location: { lat: 10.3265, lng: 76.9510 }
        }
      ]
    },
    driver: {
      id: 'driver14',
      name: 'Ravi Shankar',
      contactNumber: '76543-67890',
      experience: '16 years',
      image: driverImages[13]
    },
    busType: 'Hill Service',
    capacity: 32,
    amenities: ['Hill Drive Expertise', 'First Aid Kit', 'Oxygen Supply', 'Emergency Contact'],
    images: busImages.tnstc014,
    schedule: {
      weekday: ['07:15', '11:15', '15:15'],
      weekend: ['06:15', '09:15', '12:15', '15:15']
    },
    description: 'Special hill service connecting Coimbatore to the hill station of Valparai. Drivers are specially trained for the mountainous 40-hairpin bend route.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc014'
  },
  'tnstc015': {
    id: 'tnstc015',
    busNumber: 'TN 43 CB 3456',
    route: {
      id: 'route15',
      name: 'Coimbatore City Circular',
      stops: [
        {
          id: 'stop58',
          name: 'Gandhipuram Central',
          arrivalTime: '08:00',
          departureTime: '08:10',
          location: { lat: 11.0168, lng: 76.9558 }
        },
        {
          id: 'stop59',
          name: 'RS Puram',
          arrivalTime: '08:25',
          departureTime: '08:30',
          location: { lat: 11.0082, lng: 76.9512 }
        },
        {
          id: 'stop60',
          name: 'Peelamedu',
          arrivalTime: '08:50',
          departureTime: '08:55',
          location: { lat: 11.0236, lng: 77.0006 }
        },
        {
          id: 'stop61',
          name: 'Singanallur',
          arrivalTime: '09:15',
          departureTime: '09:20',
          location: { lat: 11.0089, lng: 77.0320 }
        },
        {
          id: 'stop62',
          name: 'Ukkadam',
          arrivalTime: '09:45',
          departureTime: '09:50',
          location: { lat: 10.9925, lng: 76.9608 }
        },
        {
          id: 'stop63',
          name: 'Gandhipuram Central',
          arrivalTime: '10:10',
          departureTime: '10:20',
          location: { lat: 11.0168, lng: 76.9558 }
        }
      ]
    },
    driver: {
      id: 'driver15',
      name: 'Anand Kumar',
      contactNumber: '65432-78901',
      experience: '6 years',
      image: driverImages[14]
    },
    busType: 'City Service',
    capacity: 60,
    amenities: ['Standing Space', 'Frequent Stops', 'City Map', 'Digital Display'],
    images: busImages.tnstc015,
    schedule: {
      weekday: [
        '06:20', '07:20', '08:20', '09:20', '10:20', '11:20', '12:20', 
        '13:20', '14:20', '15:20', '16:20', '17:20', '18:20', '19:20', '20:20'
      ],
      weekend: [
        '07:20', '08:20', '09:20', '10:20', '11:20', '12:20', 
        '13:20', '14:20', '15:20', '16:20', '17:20', '18:20', '19:20'
      ]
    },
    description: 'City circular service connecting all major areas of Coimbatore city. Frequent departures throughout the day.',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    qrCodeValue: 'https://busqr-spotter.lovable.app/bus/tnstc015'
  }
};

// Helper function to get a list of all buses
export const getAllBuses = (): Bus[] => {
  return Object.values(mockBuses);
};

// Helper function to get a bus by ID
export const getBusById = (id: string): Bus | undefined => {
  return mockBuses[id];
};

// Helper function to get all bus IDs
export const getAllBusIds = (): string[] => {
  return Object.keys(mockBuses);
};

// Helper function to generate QR code URL for a bus
export const generateQRCodeUrl = (busId: string): string => {
  // Generate a QR code URL using Google Chart API
  const qrCodeContent = `https://busqr-spotter.lovable.app/bus/${busId}`;
  // Using a more reliable QR code API with larger size and error correction
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeContent)}&size=300x300&margin=10&ecc=H&t=${Date.now()}`;
  console.log("Generated QR code URL:", qrCodeUrl);
  return qrCodeUrl;
};

// Helper function to scan QR code and get bus details
export const scanQRCode = async (qrCodeValue: string): Promise<Bus> => {
  console.log("Scanning QR code with value:", qrCodeValue);
  // Extract bus ID from QR code value (URL)
  const busIdMatch = qrCodeValue.match(/\/bus\/([^\/]+)$/);
  
  if (!busIdMatch || !busIdMatch[1]) {
    console.error("Invalid QR code format:", qrCodeValue);
    throw new Error('Invalid QR code');
  }
  
  const busId = busIdMatch[1];
  console.log("Extracted bus ID:", busId);
  const bus = getBusById(busId);
  
  if (!bus) {
    console.error("Bus not found with ID:", busId);
    throw new Error('Bus not found');
  }
  
  console.log("Successfully found bus:", bus.busNumber);
  return bus;
};

// Function to save recent scan to localStorage
export const saveRecentScan = (busId: string): void => {
  try {
    const bus = getBusById(busId);
    if (!bus) return;
    
    // Get existing recent scans from localStorage
    const recentScansJson = localStorage.getItem('recentScans') || '[]';
    const recentScans = JSON.parse(recentScansJson) as string[];
    
    // Add current bus ID to the beginning (if already exists, remove old instance first)
    const updatedScans = [
      busId,
      ...recentScans.filter(id => id !== busId)
    ].slice(0, 5); // Keep only the 5 most recent
    
    // Save back to localStorage
    localStorage.setItem('recentScans', JSON.stringify(updatedScans));
    
    // Dispatch storage event for cross-component communication
    window.dispatchEvent(new Event('storage'));
  } catch (error) {
    console.error('Error saving recent scan:', error);
  }
};

// Function to get recent scans from localStorage
export const getRecentScans = (): Bus[] => {
  try {
    const recentScansJson = localStorage.getItem('recentScans') || '[]';
    const recentScans = JSON.parse(recentScansJson) as string[];
    
    return recentScans
      .map(busId => getBusById(busId))
      .filter((bus): bus is Bus => bus !== undefined);
  } catch (error) {
    console.error('Error getting recent scans:', error);
    return [];
  }
};

// Calculate fare between two stops
export const calculateBusFare = (sourceStopId: string, destinationStopId: string, busId: string): number => {
  const bus = getBusById(busId);
  if (!bus) return 0;
  
  // Find the stops in the route
  const route = bus.route;
  const stops = route.stops;
  
  // Find indices of source and destination stops
  const sourceIndex = stops.findIndex(stop => stop.id === sourceStopId);
  const destIndex = stops.findIndex(stop => stop.id === destinationStopId);
  
  if (sourceIndex === -1 || destIndex === -1) return 0;
  
  // Simple fare calculation: ₹5 base + ₹10 per stop
  const numberOfStops = Math.abs(destIndex - sourceIndex);
  
  // Calculate fare based on bus type
  let fareMultiplier = 1;
  switch (bus.busType) {
    case 'AC Sleeper':
      fareMultiplier = 2.5;
      break;
    case 'Super Deluxe':
    case 'Ultra Deluxe':
      fareMultiplier = 1.75;
      break;
    case 'Hill Service':
      fareMultiplier = 2;
      break;
    case 'Express':
      fareMultiplier = 1.5;
      break;
    case 'Pilgrimage Special':
      fareMultiplier = 1.5;
      break;
    default:
      fareMultiplier = 1;
  }
  
  return Math.ceil((5 + (numberOfStops * 10)) * fareMultiplier);
};
