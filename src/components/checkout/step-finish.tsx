import { Button } from '@/components/ui/button';
import { generateMessage } from '@/lib/generate-message';
import { useCheckoutStore } from '@/store/checkout-store';
import Link from 'next/link';

export const StepFinish = () => {
  const { name } = useCheckoutStore((state) => state);

  const message = generateMessage();
  const linkZap = `https://wa.me/${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}`;

  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido ao nosso WhatsApp para concluir. Nosso
        atendente.te guiar sobre o andamento do pedido.
      </p>
      <Button>
        <Link target="_blank" href={linkZap} className="w-full">
          Enviar para o WhatsApp
        </Link>
      </Button>
    </div>
  );
};
