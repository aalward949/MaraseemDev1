// Base Types
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// User Types
export interface User extends BaseEntity {
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  isActive: boolean;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  DESIGNER = 'DESIGNER',
  USER = 'USER',
}

// Project Types
export interface Project extends BaseEntity {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  slug: string;
  category: ProjectCategory;
  type: ProjectType;
  location?: string;
  area?: number;
  duration?: string;
  budget?: string;
  status: ProjectStatus;
  featured: boolean;
  published: boolean;
  authorId: string;
  author: User;
  images: ProjectImage[];
  services: Service[];
  materials: Material[];
  tags: Tag[];
}

export enum ProjectCategory {
  RESIDENTIAL = 'RESIDENTIAL',
  COMMERCIAL = 'COMMERCIAL',
  HOSPITALITY = 'HOSPITALITY',
  RETAIL = 'RETAIL',
  OFFICE = 'OFFICE',
  HOTEL = 'HOTEL',
  RESTAURANT = 'RESTAURANT',
}

export enum ProjectType {
  INTERIOR_DESIGN = 'INTERIOR_DESIGN',
  FURNITURE_DESIGN = 'FURNITURE_DESIGN',
  FINISHING_WORKS = 'FINISHING_WORKS',
  PROJECT_MANAGEMENT = 'PROJECT_MANAGEMENT',
}

export enum ProjectStatus {
  PLANNING = 'PLANNING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ON_HOLD = 'ON_HOLD',
}

export interface ProjectImage extends BaseEntity {
  url: string;
  alt: string;
  altAr: string;
  order: number;
  isMain: boolean;
  projectId: string;
}

// Service Types
export interface Service extends BaseEntity {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  slug: string;
  category: ServiceCategory;
  icon?: string;
  featured: boolean;
  published: boolean;
  projects: Project[];
  furniture: Furniture[];
  inquiries: Inquiry[];
}

export enum ServiceCategory {
  INTERIOR_DESIGN = 'INTERIOR_DESIGN',
  FINISHING_WORKS = 'FINISHING_WORKS',
  PROJECT_MANAGEMENT = 'PROJECT_MANAGEMENT',
  CUSTOM_FURNITURE = 'CUSTOM_FURNITURE',
}

// Furniture Types
export interface Furniture extends BaseEntity {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  slug: string;
  category: FurnitureCategory;
  subcategory?: string;
  dimensions?: string;
  materials?: string;
  price?: number;
  featured: boolean;
  published: boolean;
  images: FurnitureImage[];
  services: Service[];
  materials: Material[];
  inquiries: Inquiry[];
}

export enum FurnitureCategory {
  LIVING_ROOM = 'LIVING_ROOM',
  BEDROOM = 'BEDROOM',
  DINING_ROOM = 'DINING_ROOM',
  OFFICE = 'OFFICE',
  CUSTOM = 'CUSTOM',
}

export interface FurnitureImage extends BaseEntity {
  url: string;
  alt: string;
  altAr: string;
  order: number;
  isMain: boolean;
  furnitureId: string;
}

// Material Types
export interface Material extends BaseEntity {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  category: MaterialCategory;
  image?: string;
  featured: boolean;
  published: boolean;
  projects: Project[];
  furniture: Furniture[];
}

export enum MaterialCategory {
  WOODS = 'WOODS',
  METALS = 'METALS',
  FABRICS = 'FABRICS',
  STONES = 'STONES',
  FINISHES = 'FINISHES',
}

// Tag Types
export interface Tag extends BaseEntity {
  name: string;
  nameAr: string;
  slug: string;
  projects: Project[];
}

// Inquiry Types
export interface Inquiry extends BaseEntity {
  type: InquiryType;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: InquiryStatus;
  userId?: string;
  user?: User;
  serviceId?: string;
  service?: Service;
  furnitureId?: string;
  furniture?: Furniture;
}

export enum InquiryType {
  GENERAL = 'GENERAL',
  SERVICE = 'SERVICE',
  FURNITURE = 'FURNITURE',
  CONSULTATION = 'CONSULTATION',
  QUOTE = 'QUOTE',
}

export enum InquiryStatus {
  NEW = 'NEW',
  CONTACTED = 'CONTACTED',
  QUOTED = 'QUOTED',
  CONVERTED = 'CONVERTED',
  CLOSED = 'CLOSED',
}

// Consultation Types
export interface Consultation extends BaseEntity {
  name: string;
  email: string;
  phone: string;
  projectType: ProjectCategory;
  budget?: string;
  description: string;
  preferredDate: Date;
  status: ConsultationStatus;
  userId?: string;
  user?: User;
}

export enum ConsultationStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

// News Types
export interface News extends BaseEntity {
  title: string;
  titleAr: string;
  content: string;
  contentAr: string;
  slug: string;
  excerpt: string;
  excerptAr: string;
  image?: string;
  featured: boolean;
  published: boolean;
  publishedAt?: Date;
  authorId: string;
  author: User;
}

// Event Types
export interface Event extends BaseEntity {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  slug: string;
  image?: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  locationAr?: string;
  capacity?: number;
  registered: number;
  featured: boolean;
  published: boolean;
  organizerId: string;
  organizer: User;
}

// Business Partner Types
export interface BusinessPartner extends BaseEntity {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  category: BusinessCategory;
  logo?: string;
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
  addressAr?: string;
  featured: boolean;
  published: boolean;
}

export enum BusinessCategory {
  PARTNERS = 'PARTNERS',
  SUPPLIERS = 'SUPPLIERS',
  CONTRACTORS = 'CONTRACTORS',
}

// Setting Types
export interface Setting extends BaseEntity {
  key: string;
  value: string;
  type: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: InquiryType;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  projectType: ProjectCategory;
  budget?: string;
  description: string;
  preferredDate: Date;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  furnitureId?: string;
  serviceId?: string;
  specifications: string;
  quantity?: number;
  timeline?: string;
  requirements?: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Language Types
export type Locale = 'en' | 'ar';

export interface Translation {
  [key: string]: string | Translation;
}

// SEO Types
export interface SEOData {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  keywords?: string;
  keywordsAr?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

// Navigation Types
export interface NavigationItem {
  label: string;
  labelAr: string;
  href: string;
  children?: NavigationItem[];
  featured?: boolean;
}

// Filter Types
export interface ProjectFilters {
  category?: ProjectCategory;
  type?: ProjectType;
  status?: ProjectStatus;
  featured?: boolean;
  search?: string;
}

export interface FurnitureFilters {
  category?: FurnitureCategory;
  subcategory?: string;
  featured?: boolean;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface MaterialFilters {
  category?: MaterialCategory;
  featured?: boolean;
  search?: string;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ImageProps {
  src: string;
  alt: string;
  altAr?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

// Theme Types
export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  darkAccent: string;
  warmAccent: string;
}

// Animation Types
export interface AnimationProps {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  delay?: number;
}

// Form Validation Types
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
}

export interface FormField {
  name: string;
  label: string;
  labelAr: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date' | 'number';
  placeholder?: string;
  placeholderAr?: string;
  required?: boolean;
  validation?: ValidationRule;
  options?: { value: string; label: string; labelAr: string }[];
}