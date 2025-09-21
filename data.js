// data.js - Master list of hawker centres and stalls
const hawkerData = [
  {
    id: "chinatown",
    name: "Chinatown Complex Food Centre",
    mrt: "Chinatown MRT",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Chinatown_Complex_Food_Centre.jpg",
    stalls: [
      "Lian He Fishball Noodles",
      "Xin Mei Xiang BBQ Chicken Rice",
      "Zhong Guo La Mian Xiao Long Bao",
      "Outram Park Fried Kway Teow Mee",
      "Yong Kee Chicken Rice"
    ]
  },
  {
    id: "maxwell",
    name: "Maxwell Food Centre",
    mrt: "Tanjong Pagar MRT",
    image: "https://www.visitsingapore.com/content/dam/vs-cms-assets/attractions/maxwell-food-centre/maxwell-food-centre-16-9.jpg",
    stalls: [
      "Tian Tian Hainanese Chicken Rice",
      "Zhen Zhen Sesame Noodles",
      "Popiah Original",
      "Hainan Traditional Curry Rice",
      "Maxwell Fuzhou Oyster Cake"
    ]
  },
  {
    id: "old-airport",
    name: "Old Airport Road Food Centre",
    mrt: "Dakota MRT",
    image: "https://timeoutsingapore.files.wordpress.com/2020/07/old-airport-road-food-centre.jpg",
    stalls: [
      "Nam Sing Hokkien Fried Mee",
      "Xin Mei Xiang Roast Meat",
      "Chuan Kee Boneless Duck",
      "Jin Jin Wanton Noodle",
      "Lao Fu Zi Fried Kway Teow"
    ]
  },
  {
    id: "tekka",
    name: "Tekka Centre",
    mrt: "Little India MRT",
    image: "https://www.visitsingapore.com/content/dam/vs-cms-assets/attractions/tekka-centre/tekka-centre-little-india-16-9.jpg",
    stalls: [
      "Tekka Centre Mutton Soup",
      "Annalakshmi Vegetarian",
      "Jalan Kayu Roti Prata",
      "Tekka Centre Fish Head Bee Hoon",
      "Bismillah Biryani"
    ]
  },
  {
    id: "lau-pa-sat",
    name: "Lau Pa Sat",
    mrt: "Telok Ayer MRT",
    image: "https://www.visitsingapore.com/content/dam/vs-cms-assets/attractions/lau-pa-sat/lau-pa-sat-16-9.jpg",
    stalls: [
      "Lau Pa Sat Satay Street",
      "Jumbo Seafood (Satay by the Bay)",
      "Wok Hey Hokkien Mee",
      "Lau Pa Sat Fried Kway Teow",
      "Singapore Porridge"
    ]
  },
  {
    id: "newton",
    name: "Newton Food Centre",
    mrt: "Newton MRT",
    image: "https://www.visitsingapore.com/content/dam/vs-cms-assets/attractions/newton-food-centre/newton-food-centre-16-9.jpg",
    stalls: [
      "Newton Food Centre BBQ Seafood",
      "Hup Kee Beef Noodle",
      "Xin Mei Xiang Roasted Meat",
      "Newton Circus Hokkien Mee",
      "Famous Old Airport Road Duck Rice"
    ]
  }
];

// Make it globally available
if (typeof window !== 'undefined') {
  window.hawkerData = hawkerData;
}