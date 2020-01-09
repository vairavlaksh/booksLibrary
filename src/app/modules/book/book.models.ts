export interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  categories: string[];
  imageLink: string;
  language: string;
  isEbook: boolean;
  price: number;
  discountedPrice: number;
  buyLink: string;
  isPdfAvailable: boolean;
  pdfLink: string;
  sampleLink: string;
}
