import { defineField } from "sanity";

const complaint = {
  name: "complaint",
  title: "Complaint",
  type: "document",
  fields: [
    defineField({
      name: "email",
      type: "string",
      title: "Email",
    }),
    defineField({
      name: "complaint",
      title: "Complaint",
      type: "string",
    }),
    defineField({
      name: "complaintDate",
      title: "Complaint Date",
      type: "date",
    }),
    defineField({
      name: "complaintTime",
      title: "Complaint Time",
      type: "string",
    }),
  ],
};

export default complaint;
