import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: [], // [{ product, quantity, unitPrice, negotiated }]
  
  addItem: (product, quantity = 1, unitPrice = null) => {
    const items = get().items;
    const existingItem = items.find(item => item.product._id === product._id);
    
    if (existingItem) {
      set({
        items: items.map(item =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      });
    } else {
      set({
        items: [...items, { product, quantity, unitPrice: unitPrice || product.basePrice, negotiated: !!unitPrice }],
      });
    }
  },
  
  removeItem: (productId) => {
    set({
      items: get().items.filter(item => item.product._id !== productId),
    });
  },
  
  applyNegotiatedPrice: (productId, finalPrice) => {
    set({
      items: get().items.map(item =>
        item.product._id === productId
          ? { ...item, unitPrice: finalPrice, negotiated: true }
          : item
      ),
    });
  },
  
  clearCart: () => set({ items: [] }),
  
  getTotal: () => {
    return get().items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  },
}));

export default useCartStore;
