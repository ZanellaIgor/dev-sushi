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

  let progressValue = 0;
  switch (step) {
    case 'user':
      progressValue = 30;
      break;
    case 'address':
      progressValue = 66;
      break;
    case 'finish':
      progressValue = 100;
      break;
  }

  return (
    <Dialog open={open} onOpenChange={openChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step === 'user' && 'Dados Pessoais'}
            {step === 'address' && 'Entrega'}
            {step === 'finish' && 'Envio para Whatsapp'}
          </DialogTitle>
        </DialogHeader>
        <Progress value={progressValue} />
        <div className="flex flex-col gap-3">
          {step === 'user' && <StepUser setStep={setStep} />}
          {step === 'address' && <StepAddress setStep={setStep} />}
          {step === 'finish' && <StepFinish />}
        </div>
      </DialogContent>
    </Dialog>
  );
};
