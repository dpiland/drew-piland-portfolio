export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  year?: number;
  linkedInUrl?: string;
}

// Add new recommendations here — paste the quote, name, title, company, and relationship context from LinkedIn
export const testimonials: Testimonial[] = [];
