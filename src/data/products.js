// hardcoded list of products (no database)
const products = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    category: 'Electronics',
    price: 1299,
    stock: 15,
    image: '/images/earbuds.svg',
    shortDesc: 'Small earbuds with clear sound.',
    description:
      'Bluetooth 5.3 wireless earbuds with noise reduction, 20 hours battery life with the charging case, and a built-in mic for calls.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 2499,
    stock: 8,
    image: '/images/watch.svg',
    shortDesc: 'Track your steps and heart rate.',
    description:
      'Smart watch with 1.8 inch touch screen, heart rate monitor, step counter, sleep tracker and message notifications. Water resistant.',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 1599,
    stock: 10,
    image: '/images/speaker.svg',
    shortDesc: 'Portable speaker with loud bass.',
    description:
      'Portable bluetooth speaker with deep bass, 12 hours playtime and splash proof design. Great for outdoor trips and parties.',
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    category: 'Electronics',
    price: 799,
    stock: 20,
    image: '/images/mouse.svg',
    shortDesc: 'RGB mouse with adjustable DPI.',
    description:
      'Wired gaming mouse with RGB lights, 6 buttons and adjustable DPI up to 7200. Comfortable grip for long gaming sessions.',
  },
  {
    id: 5,
    name: 'Cotton T-Shirt',
    category: 'Clothing',
    price: 349,
    stock: 30,
    image: '/images/tshirt.svg',
    shortDesc: 'Soft and comfy everyday shirt.',
    description:
      '100% cotton round neck t-shirt. Soft, breathable and perfect for everyday wear. Available in one size (Medium).',
  },
  {
    id: 6,
    name: 'Denim Jeans',
    category: 'Clothing',
    price: 899,
    stock: 12,
    image: '/images/jeans.svg',
    shortDesc: 'Classic blue slim fit jeans.',
    description:
      'Slim fit denim jeans with stretch material for comfort. Classic blue wash that goes well with any top.',
  },
  {
    id: 7,
    name: 'Running Shoes',
    category: 'Clothing',
    price: 1899,
    stock: 6,
    image: '/images/shoes.svg',
    shortDesc: 'Lightweight shoes for running.',
    description:
      'Lightweight running shoes with breathable mesh and cushioned sole. Good for jogging, gym and daily use.',
  },
  {
    id: 8,
    name: 'Baseball Cap',
    category: 'Accessories',
    price: 299,
    stock: 25,
    image: '/images/cap.svg',
    shortDesc: 'Adjustable cap for sunny days.',
    description:
      'Cotton baseball cap with adjustable strap at the back. Protects you from the sun and completes your casual look.',
  },
  {
    id: 9,
    name: 'Coffee Mug',
    category: 'Home & Living',
    price: 199,
    stock: 40,
    image: '/images/mug.svg',
    shortDesc: 'Ceramic mug for your coffee.',
    description:
      '350ml ceramic coffee mug. Microwave and dishwasher safe. Perfect for coffee, tea or hot chocolate.',
  },
  {
    id: 10,
    name: 'Table Lamp',
    category: 'Home & Living',
    price: 649,
    stock: 9,
    image: '/images/lamp.svg',
    shortDesc: 'LED lamp for studying.',
    description:
      'LED desk lamp with 3 brightness levels and flexible neck. Eye friendly light, perfect for studying or working at night.',
  },
  {
    id: 11,
    name: 'School Backpack',
    category: 'Accessories',
    price: 999,
    stock: 14,
    image: '/images/backpack.svg',
    shortDesc: 'Roomy bag with laptop slot.',
    description:
      'Water resistant backpack with a padded laptop compartment (fits up to 15.6 inch), many pockets and comfortable straps.',
  },
  {
    id: 12,
    name: 'Sunglasses',
    category: 'Accessories',
    price: 499,
    stock: 0,
    image: '/images/sunglasses.svg',
    shortDesc: 'UV protected stylish shades.',
    description:
      'Stylish sunglasses with UV400 protection. Lightweight frame that is comfortable to wear the whole day.',
  },
]

export default products
