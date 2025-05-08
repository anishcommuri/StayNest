import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private backendUrl = 'https://staynest-iejd.onrender.com'; // Your Render backend URL

  constructor(private http: HttpClient) {}

  async createOrder(amount: number): Promise<any> {
    return this.http.post(`${this.backendUrl}/create-order`, { amount }).toPromise();
  }

  async pay(amount: number, name: string, email: string, contact: string): Promise<void> {
    try {
      const order = await this.createOrder(amount);

      const options = {
        key: 'rzp_test_Yq4PPi0sH7WUKV', // Test key
        amount: order.amount,
        currency: 'INR',
        name: name,
        description: 'StayNest Booking Payment',
        order_id: '123',
        prefill: {
          name: name,
          email: email,
          contact: contact
        },
        theme: {
          color: '#3399cc'
        },
        handler: (response: any) => {
          console.log('Payment Success:', response);
          alert('Payment successful!');
        },
        modal: {
          ondismiss: function () {
            alert('Payment popup closed.');
          }
        }
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error during payment:', error);
      alert('Payment failed to initialize');
    }
  }
}
