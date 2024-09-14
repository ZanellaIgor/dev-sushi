import { Form } from '@/components/ui/form';
import { useCheckoutStore } from '@/store/checkout-store';
import { CheckoutSteps } from '@/types/checkout-step';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { InputField } from '../input/InputField';
import { InputSelect } from '../input/InputSelect';
import { Button } from '../ui/button';

const formSchema = z.object({
  street: z.string().min(3, 'Preencha a rua'),
  number: z.string().min(1, 'Preencha o número'),
  complement: z.string().optional(),
  district: z.string().min(3, 'Preencha o bairro'),
  city: z.string().min(2, 'Preencha a cidade'),
  state: z.string().min(2, 'Preencha o estado'),
});

export const StepAddress = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>;
}) => {
  const { address, setAddress } = useCheckoutStore((state) => state);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { ...address },
  });

  const submit = (values: z.infer<typeof formSchema>) => {
    setAddress(values);
    setStep('finish');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <div className="grid grid-cols-2 gap-4">
          <InputField control={form.control} label="Rua" name="street" />
          <InputField control={form.control} label="Número" name="number" />
          <InputField
            control={form.control}
            label="Complemento"
            name="complement"
          />
          <InputField control={form.control} label="Bairro" name="district" />
          <InputField control={form.control} label="Cidade" name="city" />
          <InputSelect control={form.control} label="Estado" name="state" />
        </div>
        <div className="flex justify-between mt-4">
          <Button variant={'link'} onClick={() => setStep('user')}>
            Voltar
          </Button>
          <Button type="submit" variant={'outline'}>
            Concluir
          </Button>
        </div>
      </form>
    </Form>
  );
};
