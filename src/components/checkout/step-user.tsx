import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useCheckoutStore } from '@/store/checkout-store';
import { CheckoutSteps } from '@/types/checkout-step';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { InputField } from '../input/InputField';
const formSchema = z.object({
  name: z.string().min(3, 'Preencha seu nome'),
});

export const StepUser = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>;
}) => {
  const { name, setName } = useCheckoutStore((state) => state);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name },
  });

  const submit = (values: z.infer<typeof formSchema>) => {
    setName(values.name);
    setStep('address');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col gap-4"
      >
        <InputField
          control={form.control}
          label="Seu Nome"
          name="name"
          placeholder="Qual seu Nome?"
        />

        <Button type="submit" variant={'outline'}>
          Próximo
        </Button>
      </form>
    </Form>
  );
};
