// This file contains all your hawker centre and stall data
// Update this as you add more centres and stalls

window.centreDatabase = [
  {
    name: "Chinatown Complex Food Centre",
    mrt: "Chinatown MRT",
    address: "335 Smith Street, Singapore 050335",
    about: "The largest hawker centre in Singapore, home to Michelin Bib Gourmand stalls and local favorites. Open daily from 8am to 10pm.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Chinatown_Complex_Food_Centre.jpg"
  },
  {
    name: "Maxwell Food Centre",
    mrt: "Tanjong Pagar MRT",
    address: "1 Kadayanallur Street, Singapore 069184",
    about: "Famous for its Hainanese chicken rice and traditional breakfast options. A favorite among office workers and tourists alike.",
    image: "https://www.visitsingapore.com/content/dam/vs-cms-assets/attractions/maxwell-food-centre/maxwell-food-centre-16-9.jpg"
  },
  {
    name: "Old Airport Road Food Centre",
    mrt: "Dakota MRT",
    address: "51 Old Airport Road, Singapore 390051",
    about: "A local favorite with over 150 stalls serving everything from traditional kueh to zi char. Open for breakfast, lunch, and dinner.",
    image: "https://timeoutsingapore.files.wordpress.com/2020/07/old-airport-road-food-centre.jpg"
  },
  {
    name: "Tekka Centre",
    mrt: "Little India MRT",
    address: "665 Buffalo Road, Singapore 210665",
    about: "Located in the heart of Little India, this centre offers a vibrant mix of Indian, Malay, and Chinese cuisine. Don't miss the fresh produce market upstairs!",
    image: "https://www.visitsingapore.com/content/dam/vs-cms-assets/attractions/tekka-centre/tekka-centre-little-india-16-9.jpg"
  },
  {
    name: "Lau Pa Sat",
    mrt: "Raffles Place MRT",
    address: "18 Raffles Quay, Singapore 048582",
    about: "A historic Victorian-era market building offering satay street at night and international cuisine by day. Perfect for tourists and after-work gatherings.",
    image: "https://www.visitsingapore.com/content/dam/vs-cms-assets/attractions/lau-pa-sat/lau-pa-sat-16-9.jpg"
  }
];

window.stallDatabase = [
  {
    name: "Lian He Fishball Noodles",
    centre: "Chinatown Complex Food Centre",
    cuisine: ["Chinese", "Noodles"],
    about: "Famous for their springy fishballs made in-house daily. The broth is light yet flavorful, perfect for lunch or dinner.",
    photos: [
      "https://example.com/lian-he-1.jpg",
      "https://example.com/lian-he-2.jpg"
    ],
    menu: [
      { name: "Fishball Noodles (Dry)", price: 4.50 },
      { name: "Fishball Noodles (Soup)", price: 4.50 },
      { name: "Extra Fishballs (4 pcs)", price: 2.00 }
    ]
  },
  {
    name: "Tian Tian Hainanese Chicken Rice",
    centre: "Maxwell Food Centre",
    cuisine: ["Chinese", "Chicken Rice"],
    about: "Michelin Bib Gourmand winner! Their chicken is poached to perfection and served with fragrant rice and chili sauce.",
    photos: [
      "https://example.com/tian-tian-1.jpg",
      "https://example.com/tian-tian-2.jpg"
    ],
    menu: [
      { name: "Chicken Rice (Regular)", price: 6.00 },
      { name: "Chicken Rice (Large)", price: 8.00 },
      { name: "Soy Sauce Chicken", price: 7.00 }
    ]
  },
  {
    name: "Nam Sing Hokkien Fried Mee",
    centre: "Old Airport Road Food Centre",
    cuisine: ["Chinese", "Fried Noodles"],
    about: "Crispy fried noodles with prawns, squid, and pork belly. The wok hei is incredible!",
    photos: [
      "https://example.com/nam-sing-1.jpg"
    ],
    menu: [
      { name: "Hokkien Mee (Regular)", price: 6.00 },
      { name: "Hokkien Mee (Seafood)", price: 8.00 }
    ]
  },
  {
    name: "Tekka Centre Mutton Soup",
    centre: "Tekka Centre",
    cuisine: ["Indian", "Soup"],
    about: "Rich, aromatic mutton soup with tender meat and herbs. Perfect for rainy days or when you're feeling under the weather.",
    photos: [
      "https://example.com/mutton-soup-1.jpg"
    ],
    menu: [
      { name: "Mutton Soup (Regular)", price: 5.50 },
      { name: "Mutton Soup (Large)", price: 7.50 },
      { name: "Naan Bread", price: 1.50 }
    ]
  },
  {
    name: "Lau Pa Sat Satay Street",
    centre: "Lau Pa Sat",
    cuisine: ["Malay", "Satay"],
    about: "Evening satay street with 10+ stalls grilling skewers over charcoal. Order by the stick and enjoy with peanut sauce!",
    photos: [
      "https://example.com/satay-1.jpg",
      "https://example.com/satay-2.jpg"
    ],
    menu: [
      { name: "Chicken Satay (per stick)", price: 0.80 },
      { name: "Mutton Satay (per stick)", price: 1.00 },
      { name: "Peanut Sauce + Ketupat", price: 2.00 }
    ]
  }
];

// You can add more stalls and centres here as your platform grows!