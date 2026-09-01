import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import { Resend } from 'resend';

export const prerender = false;

const resendApiKey = import.meta.env.RESEND_API_KEY;
const notificationEmail = import.meta.env.ORDER_NOTIFICATION_EMAIL || 'ryanmathews284@gmail.com';
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const {
      customerName,
      customerPhone,
      customerAddress,
      customerCity,
      customerState,
      customerPostalCode,
      customerNotes,
      paymentMethod,
      shippingZoneName,
      shippingCost,
      subtotal,
      tax,
      grandTotal,
      items
    } = data;

    // 1. Basic validation
    if (!customerName || !customerPhone || !customerAddress || !items || items.length === 0) {
      return new Response(JSON.stringify({ error: 'Missing required order fields or empty cart.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Insert order into Supabase
    if (supabase) {
      const { error: dbError } = await supabase.from('orders').insert([
        {
          customer_name: customerName,
          customer_phone: customerPhone,
          customer_address: customerAddress,
          customer_city: customerCity || '',
          customer_state: customerState || '',
          customer_postal_code: customerPostalCode || '',
          customer_notes: customerNotes || '',
          payment_method: paymentMethod,
          shipping_zone_name: shippingZoneName || 'Standard',
          shipping_cost: Number(shippingCost) || 0,
          subtotal: Number(subtotal) || 0,
          tax: Number(tax) || 0,
          grand_total: Number(grandTotal) || 0,
          items: items,
          status: 'pending'
        }
      ]);

      if (dbError) {
        console.error('Supabase DB Insert Error:', dbError.message);
      }
    }

    // 3. Send Email Notification via Resend (if configured)
    if (resend) {
      try {
        await resend.emails.send({
          from: 'MycoVerse Orders <onboarding@resend.dev>',
          to: [notificationEmail],
          subject: `New Secure Order: #${Math.floor(100000 + Math.random() * 900000)} - ${customerName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #e1e1e1;">
              <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; margin-top: 0;">New Order Notification</h2>
              
              <div style="background-color: #ffffff; padding: 15px; border-radius: 6px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h3 style="color: #34495e; margin-top: 0;">Customer Details</h3>
                <p style="margin: 5px 0;"><strong>Name:</strong> ${customerName}</p>
                <p style="margin: 5px 0;"><strong>Phone:</strong> ${customerPhone}</p>
                <p style="margin: 5px 0;"><strong>Delivery Address:</strong> ${customerAddress}, ${customerCity || ''}, ${customerState || ''} ${customerPostalCode || ''}</p>
                <p style="margin: 5px 0;"><strong>Payment Method:</strong> ${paymentMethod}</p>
                <p style="margin: 5px 0;"><strong>Customer Notes:</strong> ${customerNotes || 'None'}</p>
              </div>

              <div style="background-color: #ffffff; padding: 15px; border-radius: 6px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h3 style="color: #34495e; margin-top: 0;">Order Summary (${shippingZoneName || 'Standard'})</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                  <thead>
                    <tr style="background-color: #f1f2f6; text-align: left;">
                      <th style="padding: 8px; font-size: 14px;">Item</th>
                      <th style="padding: 8px; font-size: 14px;">Qty</th>
                      <th style="padding: 8px; font-size: 14px;">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${items.map((item: any) => `
                      <tr style="border-bottom: 1px solid #f1f2f6;">
                        <td style="padding: 8px; font-size: 14px;">${item.name}</td>
                        <td style="padding: 8px; font-size: 14px;">${item.quantity}</td>
                        <td style="padding: 8px; font-size: 14px;">$${Number(item.price).toFixed(2)}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
                <div style="margin-top: 15px; text-align: right; font-size: 14px;">
                  <p style="margin: 3px 0;">Subtotal: $${Number(subtotal).toFixed(2)}</p>
                  <p style="margin: 3px 0;">Tax: $${Number(tax).toFixed(2)}</p>
                  <p style="margin: 3px 0;">Shipping: $${Number(shippingCost).toFixed(2)}</p>
                  <p style="margin: 8px 0; font-size: 16px; color: #2c3e50;"><strong>Grand Total: $${Number(grandTotal).toFixed(2)}</strong></p>
                </div>
              </div>
              
              <p style="font-size: 12px; color: #7f8c8d; text-align: center; margin-top: 20px;">MycoVerse Automated Dispatch System</p>
            </div>
          `
        });
      } catch (emailErr) {
        console.error('Failed to send notification email:', emailErr);
      }
    }

    return new Response(JSON.stringify({ success: true, message: 'Order placed successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('Server error handling order:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};