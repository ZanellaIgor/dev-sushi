'use client';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useCartStore } from '@/store/cart-store';
import { RocketIcon } from 'lucide-react';
import { useState } from 'react';
import { CheckoutDialog } from '../checkout/dialog';
import { CartItem } from './item';

export const CartSidebar = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { cart } = useCartStore((state) => state);

  let subTotal = 0;
  for (let item of cart) {
    subTotal += item.product.price * item.quantity;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <RocketIcon className="mr-2" />
          <p>Carrinho</p>
          {cart.length > 0 && (
            <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <SheetDescription>Carrinho de Compras</SheetDescription>

        <div className="flex flex-col gap-5 my-3">
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between items-center text-xs">
          <div>Subtotal:</div>
          <div>R${subTotal.toFixed(2)}</div>
        </div>
        <Separator className="my-4" />

        <div className="flex justify-center items-center">
          <Button
            disabled={cart.length === 0}
            type="submit"
            onClick={() => setCheckoutOpen(true)}
          >
            Finalizar Compra
          </Button>
        </div>
        <CheckoutDialog open={checkoutOpen} openChange={setCheckoutOpen} />
      </SheetContent>
    </Sheet>
  );
};
