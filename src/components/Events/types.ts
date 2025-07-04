export interface Event {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  start: string;
  end?: string;
  type: 'En ligne' | 'Présentiel';
  location?: string;
  image: string;
  img?: string;
  status?: 'Ouvert' | 'Complet' | 'Terminé';
  tags?: string[];
  process?: string[];
  objectives?: string[];
}

export interface MinimalEvent {
  id: number;
  title: string;
}

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  eventId: string;
  comments: string;
}

export interface FilterOption {
  id: string;
  label: string;
}

export interface JobListing {
  id: number;
  title: string;
  type: string;
  location: string;
  salary: string;
  sector: string;
  schedule: string;
  description: string;
  posted: string;
  urgent: boolean;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  applicationProcess?: string[];
  deadline?: string;
  contactEmail?: string;
}