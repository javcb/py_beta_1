import * as React from "react";
import { PaymentElement as StripePaymentElement } from "../../adapters/stripe/stripe-react";

export interface PaymentElementProps {
  options?: Record<string, any>;
}

export const PaymentElement: React.FC<PaymentElementProps> = ({ options }) => {
  return (
    <div className="p-4 border-2 border-dashed border-gray-300 rounded-md text-center text-gray-500">
      <p className="text-sm">Stripe PaymentElement</p>
      <p className="text-xs mt-1">Requires Elements provider in real app</p>
      <p className="text-xs mt-1 text-gray-400">
        In production, wrap with &lt;Elements stripe=&#123;stripePromise&#125;&gt;
      </p>
    </div>
  );
};
