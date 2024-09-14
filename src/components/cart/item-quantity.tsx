import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart-store';
import { Cart } from '@/types/cart';
import { MinusIcon, PlusIcon } from 'lucide-react';

export const CartItemQuantity = ({ cartItem }: { cartItem: Cart }) => {
  const { upsertCartItem } = useCartStore((state) => state);

  return (
    <div className="flex items-center gap-2">
      <Button
        className="size-5"
        variant="outline"
        size="icon"
        onClick={() => upsertCartItem(cartItem.product, +1)}
      >
        <PlusIcon />
      </Button>
      <div className="text-xs">{cartItem.quantity}</div>
      <Button
        className="size-5"
        variant="outline"
        size="icon"
        onClick={() => upsertCartItem(cartItem.product, -1)}
      >
        <MinusIcon className="size-3" />
      </Button>
    </div>
  );
};
