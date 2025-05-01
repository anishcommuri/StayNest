import { Injectable } from '@angular/core';

declare var Razorpay: any; // important because Razorpay is loaded globally

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  payWithRazorpay(orderId: string, amount: number, name: string, email: string, contact: string) {
    const options: any = {
      key: 'rzp_live_HHXT6nADA10Liz', // Replace with your Razorpay Key ID
      amount: amount * 100, // Amount is in paise (e.g., 500 for ₹5.00)
      currency: 'INR',
      name: name,
      description: 'Payment',
      order_id: orderId, // This should come from your backend
      prefill: {
        name: name,
        email: email,
        contact: contact
      },
      theme: {
        color: '#3399cc'
      },
      handler: (response: any) => {
        // Handle successful payment here
        console.log(response);
        alert('Payment Successful');
      },
      modal: {
        ondismiss: function () {
          alert('Payment popup closed');
        }
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}
