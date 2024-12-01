import { NextResponse } from "next/server";
import Stripe from "stripe";

import { createBooking, updateHotelRoom } from "@/libs/apis";

const checkout_session_completed = "checkout.session.completed";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-08-16",
});
console.log("Stripe Secret Key", stripe);

export async function POST(req: Request, res: Response) {
  const reqBody = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret);
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 500 });
  }

  console.log("Event Received", event);

  // load our event
  switch (event.type) {
    case checkout_session_completed:
      const session = event.data.object;
      console.log("Checkout Session Completed", session);

      const {
        // @ts-ignore
        metadata: {
          duration,
          checkinDate,
          hotelRoom,
          user,
          discount,
          totalPrice,
        },
      } = session;

      await createBooking({
        duration: Number(duration),
        checkinDate,
        hotelRoom,
        discount: Number(discount),
        totalPrice: Number(totalPrice),
        user,
      });

      //   Update hotel Room
      await updateHotelRoom(hotelRoom);

      return NextResponse.json("Booking successful", {
        status: 200,
        statusText: "Booking Successful",
      });

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json("Event Received", {
    status: 200,
    statusText: "Event Received",
  });
}
