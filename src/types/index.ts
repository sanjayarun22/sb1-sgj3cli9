export interface Testimonial {
  id: string;
  companyName: string;
  personName: string;
  role: string;
  content: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface Address {
  id: string;
  title: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
}