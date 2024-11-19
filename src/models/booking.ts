export type Booking = {
  _id: string;
  hotelRoom: {
    _id: string;
    name: string;
    slug: { current: string };
    price: number;
  };
  checkinDate: string;
  duration: number;
  adults: number;
  children: number;
  totalPrice: number;
  discount: number;
};
