'use client';
import { StepAddress } from '@/components/checkout/step-address';
import { StepFinish } from '@/components/checkout/step-finish';
import { StepUser } from '@/components/checkout/step-user';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { CheckoutSteps } from '@/types/checkout-step';
import { useState } from 'react';

type CheckoutDialogProps = {
  open: boolean;
  openChange: (open: boolean) => void;
};

export const CheckoutDialog = ({ open, openChange }: CheckoutDialogProps) => {
  const [step, setStep] = useState<CheckoutSteps>('user');

  const getStep = () => {
    switch (step) {
      case 'user':
        return {
          progressValue: 30,
          title: 'Dados Pessoais',
          component: <StepUser setStep={setStep} />,
        };
      case 'address':
        return {
          progressValue: 66,
          title: 'Entrega',
          component: <StepAddress setStep={setStep} />,
        };

      case 'finish':
        return {
          progressValue: 100,
          title: 'Envio para Whatsapp',
          component: <StepFinish setStep={setStep} />,
        };
    }
  };
  const { progressValue, title, component } = getStep();

  return (
    <Dialog open={open} onOpenChange={openChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Progress value={progressValue} />
        <div className="flex flex-col gap-3">{component}</div>
      </DialogContent>
    </Dialog>
  );
};
