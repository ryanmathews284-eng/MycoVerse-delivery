import { atom } from 'nanostores';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant: string;
}

export interface ShippingZone {
  id: string;
  name: string;
  cost: number;
  deliveryTime: string;
}

export const SHIPPING_ZONES: ShippingZone[] = [
  { id: 'la-local', name: 'Los Angeles Local Courier', cost: 15.00, deliveryTime: 'Same-Day / Next-Day' },
  { id: 'us-standard', name: 'US Nationwide Express', cost: 25.00, deliveryTime: '2-3 Business Days' },
  { id: 'ca-standard', name: 'Canada Cross-Border Express', cost: 35.00, deliveryTime: '3-5 Business Days' }
];

// Persistent Cart Store using localStorage if available
const initialCart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('mycoverse_cart') || '[]') : [];
export const cartItems = atom<CartItem[]>(initialCart);

const initialZone = SHIPPING_ZONES[0];
export const currentShippingZone = atom<ShippingZone>(initialZone);

if (typeof window !== 'undefined') {
  cartItems.subscribe((items) => {
    localStorage.setItem('mycoverse_cart', JSON.stringify(items));
  });
}

export function addToCart(item: Omit<CartItem, 'quantity'>) {
  const current = cartItems.get();
  const existingIndex = current.findIndex(i => i.id === item.id && i.variant === item.variant);

  if (existingIndex > -1) {
    const updated = [...current];
    updated[existingIndex].quantity += 1;
    cartItems.set(updated);
  } else {
    cartItems.set([...current, { ...item, quantity: 1 }]);
  }
}

export function removeFromCart(id: string, variant: string) {
  const current = cartItems.get();
  cartItems.set(current.filter(i => !(i.id === id && i.variant === variant)));
}

export function updateQuantity(id: string, variant: string, quantity: number) {
  if (quantity <= 0) {
    removeFromCart(id, variant);
    return;
  }
  const current = cartItems.get();
  cartItems.set(current.map(i => (i.id === id && i.variant === variant ? { ...i, quantity } : i)));
}

export function setShippingZone(zoneId: string) {
  const zone = SHIPPING_ZONES.find(z => z.id === zoneId);
  if (zone) {
    currentShippingZone.set(zone);
  }
}