export interface EventDate {
  day: string;
  month: string;
  year: string;
}

export interface Speaker {
  name: string;
  title: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface Event {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  type: string;
  status: string;
  image: string;
  img?: string;
  start: string;
  location?: string;
  category?: string;
  restrictions?: string;
  participants?: { employers: number; jobSeekers: number };
  schedule?: ScheduleItem[];
  speakers?: Speaker[];
  link?: string;
  tags?: string[];
  objectives?: string[];
  process?: string[];
  challenges?: string[];
}

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  position?: string;
  eventId: number;
  comments?: string;
}

export interface FilterOption {
  id: string;
  label: string;
}

export interface MinimalEvent {
  id: number;
  title: string;
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