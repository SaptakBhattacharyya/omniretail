/**
 * productsApi.js — Category-aware mock product data
 *
 * Each product has:
 *  - Core fields: _id, sku, name, description, basePrice, category, images
 *  - negotiationEnabled / minAcceptablePrice
 *  - specifications: category-specific technical/detail fields
 *  - variants: available sizes / colors (where applicable)
 *  - stockStatus: 'in_stock' | 'low_stock' | 'out_of_stock'
 *  - isSurplus: boolean (triggers the surplus alert in inventory UI)
 */

const MOCK_PRODUCTS = [

  // ─── ELECTRONICS ────────────────────────────────────────────────────────────
  {
    _id: 'elec-001',
    sku: 'PHN-OMNI-PRO-001',
    name: 'OmniPhone Pro 15',
    description: 'Flagship smartphone with AMOLED display, AI camera system, and 5G connectivity.',
    basePrice: 85000,
    minAcceptablePrice: 74000,
    category: 'Electronics',
    storeCategory: 'Electronics',
    negotiationEnabled: true,
    stockStatus: 'in_stock',
    stockQuantity: 32,
    isSurplus: false,
    images: [{ url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500', isPrimary: true }],
    specifications: {
      brand: 'OmniTech',
      processor: 'OmniChip X3 (3nm)',
      ram: '12 GB',
      storage: '256 GB',
      display: '6.7" AMOLED, 120Hz',
      battery: '4800 mAh',
      camera: '200MP + 12MP + 10MP Triple',
      os: 'Android 15',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.4',
      warranty: '1 Year',
    },
  },
  {
    _id: 'elec-002',
    sku: 'LAP-RETBOOK-AIR-002',
    name: 'RetailBook Air X1',
    description: 'Ultrathin laptop with OLED display and all-day battery life for professionals.',
    basePrice: 125000,
    minAcceptablePrice: 110000,
    category: 'Electronics',
    storeCategory: 'Electronics',
    negotiationEnabled: true,
    stockStatus: 'low_stock',
    stockQuantity: 5,
    isSurplus: false,
    images: [{ url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500', isPrimary: true }],
    specifications: {
      brand: 'RetailBook',
      processor: 'Intel Core Ultra 7 (12-core)',
      ram: '16 GB LPDDR5',
      storage: '512 GB NVMe SSD',
      display: '14" OLED, 2880×1800, 120Hz',
      battery: '72 Wh (~18 hrs)',
      graphics: 'Intel Arc Xe2',
      os: 'Windows 11 Pro',
      ports: '2× USB-C, 1× USB-A, HDMI 2.1',
      weight: '1.2 kg',
      warranty: '2 Years',
    },
  },
  {
    _id: 'elec-003',
    sku: 'TAB-OMNISLATE-003',
    name: 'OmniSlate Pro 12',
    description: '12-inch professional tablet with stylus support and a detachable keyboard.',
    basePrice: 65000,
    minAcceptablePrice: 55000,
    category: 'Electronics',
    storeCategory: 'Electronics',
    negotiationEnabled: true,
    stockStatus: 'in_stock',
    stockQuantity: 18,
    isSurplus: true,
    images: [{ url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500', isPrimary: true }],
    specifications: {
      brand: 'OmniTech',
      processor: 'Snapdragon 8 Gen 3',
      ram: '12 GB',
      storage: '256 GB UFS 4.0',
      display: '12.4" LCD, 120Hz',
      battery: '10090 mAh',
      camera: '13MP rear, 12MP front',
      os: 'Android 15',
      accessories: 'Stylus + Keyboard included',
      warranty: '1 Year',
    },
  },

  // ─── CLOTHING ───────────────────────────────────────────────────────────────
  {
    _id: 'clth-001',
    sku: 'TSH-URBAN-BLK-M-001',
    name: 'Urban Fit Premium Tee',
    description: 'Breathable, cotton-blend everyday tee with a relaxed silhouette.',
    basePrice: 1299,
    minAcceptablePrice: 999,
    category: 'Clothing',
    storeCategory: 'Clothing',
    negotiationEnabled: true,
    stockStatus: 'in_stock',
    stockQuantity: 120,
    isSurplus: false,
    images: [{ url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500', isPrimary: true }],
    specifications: {
      brand: 'UrbanThread',
      fabric: '80% Cotton, 20% Polyester',
      fit: 'Regular / Relaxed',
      gender: 'Unisex',
      care: 'Machine Wash Cold',
      origin: 'Made in India',
    },
    variants: {
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'White', 'Slate Grey', 'Navy', 'Olive'],
    },
  },
  {
    _id: 'clth-002',
    sku: 'JKT-WIND-NAVY-002',
    name: 'AeroShield Windbreaker',
    description: 'Lightweight water-resistant windbreaker for outdoor and urban wear.',
    basePrice: 3499,
    minAcceptablePrice: 2799,
    category: 'Clothing',
    storeCategory: 'Clothing',
    negotiationEnabled: true,
    stockStatus: 'low_stock',
    stockQuantity: 8,
    isSurplus: false,
    images: [{ url: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500', isPrimary: true }],
    specifications: {
      brand: 'AeroWear',
      fabric: '100% Nylon Shell, Mesh Lining',
      fit: 'Slim Fit',
      gender: 'Men',
      waterResistance: 'DWR Coated',
      pockets: '2 Side Zip + 1 Chest',
      care: 'Hand Wash Only',
      origin: 'Made in Bangladesh',
    },
    variants: {
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Navy Blue', 'Jet Black', 'Olive Green'],
    },
  },
  {
    _id: 'clth-003',
    sku: 'DRS-FLORA-RED-003',
    name: 'Floral Midi Dress',
    description: 'Elegant floral-print midi dress, perfect for casual and semi-formal occasions.',
    basePrice: 2199,
    minAcceptablePrice: 1699,
    category: 'Clothing',
    storeCategory: 'Clothing',
    negotiationEnabled: true,
    stockStatus: 'in_stock',
    stockQuantity: 45,
    isSurplus: true,
    images: [{ url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500', isPrimary: true }],
    specifications: {
      brand: 'BloomWear',
      fabric: '95% Viscose, 5% Elastane',
      fit: 'Relaxed A-Line',
      gender: 'Women',
      length: 'Midi (Below Knee)',
      care: 'Dry Clean Recommended',
      origin: 'Made in India',
    },
    variants: {
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Red Floral', 'Blue Floral', 'Yellow Floral'],
    },
  },

  // ─── FOOTWEAR ───────────────────────────────────────────────────────────────
  {
    _id: 'foot-001',
    sku: 'SNK-RUNNER-WHT-001',
    name: 'SwiftStep Runner Pro',
    description: 'Engineered mesh running shoe with energy-return foam midsole.',
    basePrice: 7999,
    minAcceptablePrice: 6499,
    category: 'Footwear',
    storeCategory: 'Footwear',
    negotiationEnabled: true,
    stockStatus: 'in_stock',
    stockQuantity: 60,
    isSurplus: false,
    images: [{ url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', isPrimary: true }],
    specifications: {
      brand: 'SwiftStep',
      upper: 'Engineered Mesh + TPU Overlays',
      midsole: 'CloudFoam Energy Return',
      outsole: 'Rubber Grip',
      closure: 'Lace-Up',
      weight: '280g (UK 8)',
      gender: 'Unisex',
      activity: 'Running / Training',
    },
    variants: {
      sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
      colors: ['White/Black', 'Black/Red', 'Grey/Blue'],
    },
  },
  {
    _id: 'foot-002',
    sku: 'LEA-LOAFER-BRN-002',
    name: 'ClassicLeather Slip-On Loafer',
    description: 'Full-grain leather loafers with cushioned insole for all-day comfort.',
    basePrice: 4999,
    minAcceptablePrice: 3999,
    category: 'Footwear',
    storeCategory: 'Footwear',
    negotiationEnabled: true,
    stockStatus: 'out_of_stock',
    stockQuantity: 0,
    isSurplus: false,
    images: [{ url: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500', isPrimary: true }],
    specifications: {
      brand: 'LeatherCraft',
      upper: 'Full-Grain Genuine Leather',
      lining: 'Soft Leather Lining',
      sole: 'Rubber + Leather Stack',
      closure: 'Slip-On with Elastic Gusset',
      gender: 'Men',
      occasion: 'Formal / Smart Casual',
    },
    variants: {
      sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
      colors: ['Tan Brown', 'Dark Chocolate', 'Black'],
    },
  },

  // ─── AUDIO ──────────────────────────────────────────────────────────────────
  {
    _id: 'audi-001',
    sku: 'HP-STUDIO-BLK-001',
    name: 'SoundPro Studio Headphones',
    description: 'Over-ear studio headphones with active noise cancellation and 40-hour battery.',
    basePrice: 18999,
    minAcceptablePrice: 15499,
    category: 'Audio',
    storeCategory: 'Audio & Headphones',
    negotiationEnabled: true,
    stockStatus: 'in_stock',
    stockQuantity: 22,
    isSurplus: false,
    images: [{ url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', isPrimary: true }],
    specifications: {
      brand: 'SoundPro',
      type: 'Over-Ear (Closed Back)',
      driver: '40mm Dynamic',
      frequencyResponse: '20Hz – 20kHz',
      impedance: '32Ω',
      anc: 'Hybrid Active Noise Cancellation',
      battery: '40 hrs (ANC on), 60 hrs (ANC off)',
      connectivity: 'Bluetooth 5.3, 3.5mm Jack',
      microphone: 'Dual-Mic with CVC 8.0',
      foldable: 'Yes',
      warranty: '1 Year',
    },
  },
  {
    _id: 'audi-002',
    sku: 'TWS-BUDS-WHT-002',
    name: 'OmniAir True Wireless Earbuds',
    description: 'Compact TWS earbuds with transparency mode and IPX5 water resistance.',
    basePrice: 5999,
    minAcceptablePrice: 4499,
    category: 'Audio',
    storeCategory: 'Audio & Headphones',
    negotiationEnabled: true,
    stockStatus: 'low_stock',
    stockQuantity: 6,
    isSurplus: true,
    images: [{ url: 'https://images.unsplash.com/photo-1590658165737-15a047b7c863?w=500', isPrimary: true }],
    specifications: {
      brand: 'OmniTech',
      type: 'In-Ear (True Wireless)',
      driver: '10mm Dynamic',
      frequencyResponse: '20Hz – 22kHz',
      anc: 'Adaptive ANC + Transparency Mode',
      battery: '7 hrs (buds) + 28 hrs (case)',
      connectivity: 'Bluetooth 5.3, Multipoint',
      waterResistance: 'IPX5',
      microphone: 'Quad-Mic Array',
      warranty: '1 Year',
    },
  },

  // ─── WEARABLES ──────────────────────────────────────────────────────────────
  {
    _id: 'wear-001',
    sku: 'WTCH-SMART-BLK-001',
    name: 'SmartRetail Watch Series 5',
    description: 'AMOLED smartwatch with advanced health tracking, GPS, and 18-day battery.',
    basePrice: 25000,
    minAcceptablePrice: 20000,
    category: 'Wearables',
    storeCategory: 'Wearables',
    negotiationEnabled: true,
    stockStatus: 'in_stock',
    stockQuantity: 14,
    isSurplus: true,
    images: [{ url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', isPrimary: true }],
    specifications: {
      brand: 'OmniTech',
      display: '1.43" AMOLED, Always-On',
      battery: '18 Days (typical), 3 Days (heavy)',
      gps: 'Built-in GPS + GLONASS',
      sensors: 'SpO2, ECG, Stress, Skin Temp, HRV',
      waterResistance: '5ATM + IP68',
      compatibility: 'Android 8+ / iOS 14+',
      straps: 'Interchangeable 22mm',
      connectivity: 'Bluetooth 5.3, NFC Pay',
      warranty: '1 Year',
    },
  },
];

// ─── Category-specific API simulation ───────────────────────────────────────

/**
 * Get all products (across all categories)
 */
export const getProducts = async () => {
  return new Promise((resolve) => setTimeout(() => resolve([...MOCK_PRODUCTS]), 800));
};

/**
 * Get products filtered by store category
 * @param {string} storeCategory - e.g. 'Electronics', 'Clothing', 'Footwear', 'Audio & Headphones', 'Wearables'
 */
export const getProductsByCategory = async (storeCategory) => {
  return new Promise((resolve) => {
    const filtered = MOCK_PRODUCTS.filter((p) => p.storeCategory === storeCategory);
    setTimeout(() => resolve(filtered), 600);
  });
};

/**
 * Get a single product by ID
 */
export const getProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PRODUCTS.find((p) => p._id === id) || null), 500);
  });
};

/**
 * Search products by name/description (cross-category, for consumers)
 */
export const searchProducts = async (query) => {
  return new Promise((resolve) => {
    const q = query.toLowerCase();
    const results = MOCK_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
    setTimeout(() => resolve(results), 400);
  });
};

/**
 * Get all available store categories (for Register dropdown)
 */
export const getStoreCategories = () => [
  { value: 'Electronics', label: 'Electronics & Gadgets' },
  { value: 'Clothing', label: 'Clothing & Apparel' },
  { value: 'Footwear', label: 'Footwear' },
  { value: 'Audio & Headphones', label: 'Audio & Headphones' },
  { value: 'Wearables', label: 'Wearables & Smartwatches' },
  { value: 'Furniture', label: 'Furniture & Home Decor' },
  { value: 'Groceries', label: 'Groceries & Fresh Produce' },
  { value: 'Sports', label: 'Sports & Fitness' },
  { value: 'Beauty', label: 'Beauty & Personal Care' },
  { value: 'General', label: 'General / Multi-Category' },
];
