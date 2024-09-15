'use client';
import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import { useCartOpen } from '@/store/cart-open';
import { useCartStore } from '@/store/cart-store';
import { Product } from '@/types/products';

export const ProductItem = ({ product }: { product: Product }) => {
  const { toast } = useToast();
  const { upsertCartItem } = useCartStore((state) => state);
  const { toggleCartOpen } = useCartOpen((state) => state);
  const handleAddToCart = () => {
    upsertCartItem(product, 1);
    toast({
      title: 'Adicionado ao carrinho',
      description: 'O item foi adicionado ao carrinho.',
      action: (
        <ToastAction
          altText="Ir para carrinho"
          onClick={() => toggleCartOpen(true)}
        >
          Ir para carrinho
        </ToastAction>
      ),
    });
  };

  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover"
        />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <p className="text-xl">{product.name}</p>
        <p className="text-sm opacity-50">R${product.price.toFixed(2)}</p>
        <Button variant="outline" onClick={handleAddToCart}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};
