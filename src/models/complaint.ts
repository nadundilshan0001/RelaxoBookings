export type CreateComplaint = {
  email: string;
  complaint: string;
  complaintDate: Date;
  complaintTime: string;
};

export type Complaint = {
  email: string;
  complaint: string;
  complaintDate: Date;
  complaintTime: string;
  _createdAt: Date;
  _id: string;
};
