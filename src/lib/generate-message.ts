import { useCartStore } from '@/store/cart-store';
import { useCheckoutStore } from '@/store/checkout-store';

export const generateMessage = () => {
  const { name, address } = useCheckoutStore.getState();
  const { cart } = useCartStore.getState();

  const orderProducts = cart.map(
    (item) => `${item.quantity}x ${item.product.name}`
  );
  return `**Dados do Cliente:**
  Nome:${name}
  Endereço:${address.street}, ${address.number} ${address.complement}, ${
    address.district
  }, ${address.city} - ${address.state} 
  -----
  **Pedido:**
  ${orderProducts.join('\n')}`;
};
