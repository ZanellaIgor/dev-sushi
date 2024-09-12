import { CartSidebar } from '@/components/cart/sidebar';
import { Logo } from '@/components/logo';
import { ThemeToogle } from '@/components/theme-toogle';

export const Header = () => {
  return (
    <header className="flex justify-between items-center my-5 mx-3">
      <div className="flex items-center gap-3">
        <Logo />
        <ThemeToogle />
      </div>
      <div className="flex items-center gap-3">
        <CartSidebar />
      </div>
    </header>
  );
};
