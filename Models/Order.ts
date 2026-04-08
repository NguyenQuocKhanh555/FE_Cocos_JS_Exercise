import { CartItem } from './CartItem.ts';

export interface Order {
    id: number;
    userId: number;
    items: CartItem[];
    totalAmount: number;
    status: 'pending' | 'completed' | 'cancelled';
    createdAt: Date;
}