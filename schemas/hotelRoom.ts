import { defineField } from "sanity";

const roomTypes = [
  { title: "Standard", value: "Standard" },
  { title: "VIP", value: "VIP" },
];

const hotelRoom = {
  name: "hotelRoom",
  title: "Sleeping Pods",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(50).error("Maximum 50 Characters"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required().min(100).error("Minimum 100 Characters"),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(100).error("Minimum 100 Characters"),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url", title: "URL" },
            { name: "file", type: "file", title: "File" },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(3).error("Minimum of 3 images required"),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "object",
      fields: [
        { name: "url", type: "url", title: "URL" },
        { name: "file", type: "file", title: "File" },
      ],
      validation: (Rule) => Rule.required().error("Cover Image is required"),
    }),
    defineField({
      name: "type",
      title: "Pod Type",
      type: "string",
      options: {
        list: roomTypes,
      },
      validation: (Rule) => Rule.required(),
      initialValue: "standard",
    }),
    defineField({
      name: "specialNote",
      title: "Special Note",
      type: "text",
      validation: (Rule) => Rule.required(),
      initialValue:
        "Reserve Your Relaxo Pod Now - Comfort and Convenience Await.",
    }),
    defineField({
      name: "dimension",
      title: "Dimension",
      type: "string",
    }),
    defineField({
      name: "numberOfBeds",
      title: "Number Of Beds",
      type: "number",
      validation: (Rule) => Rule.min(1),
      initialValue: 1,
    }),
    defineField({
      name: "offeredAmenities",
      title: "Offered Amenities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon", type: "string" },
            { name: "amenity", title: "Amenity", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "isBooked",
      title: "Is Booked",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Is Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
    }),
  ],
};

export default hotelRoom;
