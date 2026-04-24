const MOCK_STORES = [
  {
    _id: 's1',
    name: 'OmniRetail Downtown',
    address: '123 Tech Park, MG Road',
    city: 'Bengaluru',
    location: { coordinates: [77.5946, 12.9716] },
    phone: '+91 98765 43210',
  },
  {
    _id: 's2',
    name: 'OmniRetail suburban',
    address: '45 Green Valley, Whitefield',
    city: 'Bengaluru',
    location: { coordinates: [77.7500, 12.9698] },
    phone: '+91 98765 43211',
  }
];

export const getNearbyStores = async (lat, lng, radius = 10) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_STORES), 600);
  });
};

export const getStoreStock = async (storeId, productId) => {
  return new Promise((resolve) => {
    // Random stock status for demo
    const statuses = ['In Stock', 'Low Stock', 'Out of Stock'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const quantity = randomStatus === 'Out of Stock' ? 0 : Math.floor(Math.random() * 20) + 1;
    
    setTimeout(() => resolve({ 
      status: randomStatus, 
      quantity,
      aisle: 'A-' + Math.floor(Math.random() * 20) + '-1'
    }), 400);
  });
};
