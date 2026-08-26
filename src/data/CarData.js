const CarData = [
  { id: 1, name: "Model S", brand: "Tesla", price: "$90,000", description: "Electric, 0-60mph in 3.1s", 
    image: "https://preview.thenewsmarket.com/Previews/lamb/StillAssets/400x300/701400.jpeg", link: "/cars", features: ["Autopilot", "Long Range Battery", "Premium Interior"], popular: true },


  { id: 2, name: "X5", brand: "BMW", price: "$68,000", description: "Luxury SUV, Advanced Features", 
    image: "https://editorial.pxcrush.net/carsales/general/editorial/ge5686766629931947467.jpg?width=1024&height=682", link: "/cars", features: ["All-Wheel Drive", "Advanced Safety", "Heated Seats"], popular: true },


  { id: 3, name: "A7", brand: "Audi", price: "$72,000", description: "Sporty, Premium Interior", 
    image: "https://imgk.timesnownews.com/story/Huracan_STO.jpg?tr=w-400,h-300,fo-auto", link: "/cars", features: ["Quattro AWD", "Bang & Olufsen Sound", "Leather Seats"], popular: false },


  { id: 4, name: "Huracan", brand: "Lamborghini", price: "$250,000", description: "Supercar, 0-60mph in 2.9s", 
    image: "https://i.pinimg.com/736x/a2/1e/57/a21e57ff2cc47a840a70cfa27218a846.jpg", link: "/cars", features: ["V10 Engine", "Carbon Fiber Body", "Track Mode"], popular: true },


  { id: 5, name: "Camry", brand: "Toyota", price: "$32,000", description: "Reliable midsize sedan with hybrid option", 
    image: "https://i.pinimg.com/1200x/0c/04/31/0c043157c0ec6fbd1d4f0fe85c896365.jpg", link: "/cars", features: ["Hybrid Engine", "Safety Sense", "Comfort Interior"], popular: true },


  { id: 6, name: "C-Class", brand: "Mercedes-Benz", price: "$60,000", description: "Elegant design, advanced tech and comfort", 
    image: "https://i.pinimg.com/736x/2e/69/d6/2e69d608e95f5f1d57b3da842adf7778.jpg", link: "/cars", features: ["MBUX System", "Adaptive Cruise", "Leather Interior"], popular: true },


  { id: 7, name: "Mustang GT", brand: "Ford", price: "$47,000", description: "Classic American muscle with modern performance", 
    image: "https://i.pinimg.com/1200x/10/00/b4/1000b4e50c92a9bd76a43e0cbff89957.jpg", link: "/cars", features: ["V8 Engine", "Sport Suspension", "Launch Control"], popular: true },



  { id: 8, name: "Civic Type R", brand: "Honda", price: "$44,000", description: "Performance hatchback with turbo engine", 
    image: "https://i.pinimg.com/736x/49/fd/f2/49fdf277003ef5ccea3b06622e20c1fa.jpg", link: "/cars", features: ["Turbo Engine", "Sport Seats", "Wireless CarPlay"], popular: true },


  { id: 9, name: "911 Carrera", brand: "Porsche", price: "$115,000", description: "Iconic sports car with precision handling", 
    image: "https://i.pinimg.com/1200x/43/81/d2/4381d2b54a44d3baaac5697db59fbf31.jpg", link: "/cars", features: ["Rear Engine", "Porsche Stability", "Sport Chrono"], popular: true },


  { id: 10, name: "F8 Tributo", brand: "Ferrari", price: "$280,000", description: "Supercar with V8 engine and Italian design", 
    image: "https://i.pinimg.com/736x/2a/ac/10/2aac1013f70f3df465e8c520d31c2702.jpg", link: "/cars", features: ["V8 Turbo", "Carbon Fiber Interior", "Launch Control"], popular: true },


  { id: 11, name: "Phantom", brand: "Rolls-Royce", price: "$500,000", description: "Ultimate luxury sedan with handcrafted excellence", 
    image: "https://i.pinimg.com/736x/48/56/1a/48561abf066ca19263982fb88b20099c.jpg", link: "/cars", features: ["V12 Engine", "Bespoke Interior", "Magic Carpet Ride"], popular: true },


  { id: 12, name: "GT-R", brand: "Nissan", price: "$120,000", description: "Legendary Japanese supercar with AWD performance", 
    image: "https://i.pinimg.com/736x/8b/c5/a6/8bc5a634e28f7d27db3538589f5e2f80.jpg", link: "/cars", features: ["Twin-Turbo V6", "All-Wheel Drive", "Launch Control"], popular: true },


  { id: 13, name: "Corolla", brand: "Toyota", price: "$24,000", description: "Compact sedan, efficient and reliable", 
    image: "https://i.pinimg.com/736x/a3/cd/01/a3cd01cae30447f7ceb74e855de52a5c.jpg", link: "/cars", features: ["Fuel Efficient", "Lane Assist", "Touchscreen Display"], popular: true },


  { id: 14, name: "X3", brand: "BMW", price: "$59,000", description: "Compact luxury SUV with sporty handling", image: "https://i.pinimg.com/736x/46/af/03/46af039bd91d6efb25ce694eaf6c5730.jpg", link: "/cars", features: ["All-Wheel Drive", "Panoramic Sunroof", "Heated Seats"], popular: true },



  { id: 15, name: "E-Class", brand: "Mercedes-Benz", price: "$67,000", description: "Executive sedan with advanced technology", image: "https://i.pinimg.com/1200x/8f/b4/7d/8fb47d2046542078318eeee1cf8f8ad6.jpg", link: "/cars", features: ["MBUX System", "Adaptive Cruise", "Premium Interior"], popular: true },



  { id: 16, name: "Explorer", brand: "Ford", price: "$49,000", description: "Family SUV with advanced features", image: "https://i.pinimg.com/1200x/e2/e9/f0/e2e9f028d41a48afcaf508e413f285b8.jpg", link: "/cars", features: ["All-Wheel Drive", "Third Row Seats", "Safety Tech"], popular: true },


  { id: 17, name: "Accord", brand: "Honda", price: "$33,000", description: "Reliable midsize sedan with great comfort", image: "https://i.pinimg.com/736x/03/5a/00/035a00ce3a40b9c9e8134012ee444527.jpg", link: "/cars", features: ["Hybrid Option", "Safety Suite", "Comfort Seats"], popular: true },



  { id: 18, name: "Macan", brand: "Porsche", price: "$78,000", description: "Compact SUV with Porsche performance", image: "https://i.pinimg.com/736x/4a/db/f1/4adbf1cb2da1b00df76099f83a45129a.jpg", link: "/cars", features: ["Turbo Engine", "All-Wheel Drive", "Sport Seats"], popular: true },



  { id: 19, name: "488 GTB", brand: "Ferrari", price: "$330,000", description: "V8 supercar with stunning design", image: "https://i.pinimg.com/1200x/00/d9/ec/00d9ec179a43677243013c9b4e44b65b.jpg", link: "/cars", features: ["V8 Engine", "Carbon Fiber", "Race Mode"], popular: true },


  { id: 20, name: "Ghost", brand: "Rolls-Royce", price: "$400,000", description: "Luxury sedan with timeless design", image: "https://i.pinimg.com/736x/19/e3/d5/19e3d5b68c502c3f2055275a96d12d3f.jpg", link: "/cars", features: ["V12 Engine", "Bespoke Interior", "Smooth Ride"], popular: true },


  { id: 21, name: "Altima", brand: "Nissan", price: "$29,000", description: "Comfortable sedan with efficient engine", image: "https://i.pinimg.com/1200x/48/f0/e6/48f0e6c3655cf72e694a4dbbafaf58f1.jpg", link: "/cars", features: ["Fuel Efficient", "Safety Tech", "Comfort Seats"], popular: true },


  { id: 22, name: "Santa Fe", brand: "Hyundai", price: "$37,000", description: "Midsize SUV with modern design", image: "https://i.pinimg.com/1200x/fc/d9/08/fcd908e431d7a4f6a8ede047777832d0.jpg", link: "/cars", features: ["All-Wheel Drive", "Safety Features", "Infotainment Screen"], popular: true },


  { id: 23, name: "Sorento", brand: "Kia", price: "$36,000", description: "Family SUV with advanced features", image: "https://i.pinimg.com/1200x/37/31/75/3731756d2ed5992296cc248531a933bb.jpg", link: "/cars", features: ["All-Wheel Drive", "Safety Tech", "Panoramic Roof"], popular: true },


  { id: 24, name: "RX 350", brand: "Lexus", price: "$51,000", description: "Luxury crossover with smooth ride", image: "https://i.pinimg.com/1200x/b8/d6/ec/b8d6ec05872f16fea82fe459e0aa848b.jpg", link: "/cars", features: ["Hybrid Option", "Luxury Interior", "Safety Suite"], popular: true },


  { id: 25, name: "Outback", brand: "Subaru", price: "$39,000", description: "All-wheel-drive crossover for adventure", image: "https://i.pinimg.com/1200x/7d/6a/f7/7d6af7f88c9571a5585f787b9451412c.jpg", link: "/cars", features: ["All-Wheel Drive", "Adventure Ready", "Safety Features"], popular: true }
];

export default CarData;
