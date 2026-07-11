export interface Product {
  id: string;
  name: string;
  casNo?: string;
  category: 'Catalysts' | 'Precious Metal Salts & Chemicals' | 'Pharmaceutical Intermediates' | 'Agrochemical Intermediates' | 'Cosmetic Intermediates' | 'Speciality Chemicals';
  subcategory: string;
  grade?: string;
  activity?: 'HAC' | 'HRC' | 'LAC' | string;
  applications?: string[];
  uses?: string;
  molecularFormula?: string;
  molecularWeight?: string;
  otherNames?: string;
  purity?: string;
}

export interface EnquiryItem {
  product: Product;
  quantity?: string;
  notes?: string;
}

export interface EnquiryForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  items: EnquiryItem[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  timestamp: string;
}
