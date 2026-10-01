export type ServiceCategory = 'all' | 'staffing' | 'mechanical' | 'capital';

export interface MMSService {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  summary: string;
  description: string;
  features: string[];
  standards?: string;
  iconName: string;
}

export interface MMSProperty {
  id: string;
  name: string;
  location: string;
  type: string;
  scaleBadge: string;
  servicesProvided: string[];
  description: string;
  highlight: string;
  imageAlt: string;
}

export interface MMSTestimonial {
  id: string;
  quote: string;
  author: string;
  affiliation: string;
  propertyContext: string;
  verified: boolean;
}

export interface MMSStat {
  number: string;
  label: string;
  subtext: string;
  index: string;
}

export interface MMSOffice {
  region: string;
  territory: string;
  phone: string;
  email: string;
  isDispatchHeadquarters?: boolean;
}

export interface ConsultationFormData {
  name: string;
  companyOrCondoName: string;
  email: string;
  phone: string;
  propertyType: string;
  serviceNeeded: string;
  urgency: 'routine' | 'urgent_247' | 'scheduled_quote';
  message: string;
}
