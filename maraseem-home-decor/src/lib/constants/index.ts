// Company Information
export const COMPANY_INFO = {
  name: 'Maraseem Home Decor',
  nameArabic: 'مراسيم للديكور المنزلي',
  tagline: 'Luxury Interior Design & Custom Furniture',
  taglineArabic: 'تصميم داخلي فاخر وأثاث مخصص',
  description: 'Creating exceptional living spaces through innovative design and craftsmanship',
  descriptionArabic: 'إبداع مساحات معيشة استثنائية من خلال التصميم المبتكر والحرفية العالية',
  email: 'info@maraseem.com',
  phone: '+966 11 234 5678',
  whatsapp: '+966 50 123 4567',
  address: 'Riyadh, Saudi Arabia',
  addressArabic: 'الرياض، المملكة العربية السعودية',
  website: 'https://maraseem.com',
  
  // Social Media
  social: {
    instagram: 'https://instagram.com/maraseem_decor',
    facebook: 'https://facebook.com/maraseem.decor',
    twitter: 'https://twitter.com/maraseem_decor',
    linkedin: 'https://linkedin.com/company/maraseem-decor',
    youtube: 'https://youtube.com/@maraseem_decor',
    pinterest: 'https://pinterest.com/maraseem_decor',
  },
  
  // Business Hours
  businessHours: {
    sunday: '9:00 AM - 6:00 PM',
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: 'Closed',
    saturday: '10:00 AM - 4:00 PM',
  },
} as const;

// Site Configuration
export const SITE_CONFIG = {
  url: process.env.SITE_URL || 'http://localhost:3000',
  name: COMPANY_INFO.name,
  description: COMPANY_INFO.description,
  keywords: [
    'interior design',
    'custom furniture',
    'luxury home decor',
    'residential design',
    'commercial design',
    'Saudi Arabia',
    'Riyadh',
    'تصميم داخلي',
    'أثاث مخصص',
    'ديكور فاخر',
  ],
  author: 'Maraseem Home Decor',
  language: 'en',
  locale: 'en_US',
  type: 'website',
  robots: 'index, follow',
  googleSiteVerification: '',
  themeColor: '#2C3E50',
} as const;

// Navigation Menu Items
export const MAIN_NAV = [
  {
    titleEn: 'Home',
    titleAr: 'الرئيسية',
    href: '/',
    hasSubmenu: false,
  },
  {
    titleEn: 'About',
    titleAr: 'من نحن',
    href: '/about',
    hasSubmenu: true,
    submenu: [
      { titleEn: 'Our Story', titleAr: 'قصتنا', href: '/about/story' },
      { titleEn: 'Team', titleAr: 'الفريق', href: '/about/team' },
      { titleEn: 'Awards', titleAr: 'الجوائز', href: '/about/awards' },
      { titleEn: 'Careers', titleAr: 'الوظائف', href: '/about/careers' },
    ],
  },
  {
    titleEn: 'Services',
    titleAr: 'الخدمات',
    href: '/services',
    hasSubmenu: true,
    submenu: [
      { titleEn: 'Interior Design', titleAr: 'التصميم الداخلي', href: '/services/interior-design' },
      { titleEn: 'Finishing Works', titleAr: 'أعمال التشطيب', href: '/services/finishing-works' },
      { titleEn: 'Project Management', titleAr: 'إدارة المشاريع', href: '/services/project-management' },
    ],
  },
  {
    titleEn: 'Custom Furniture',
    titleAr: 'الأثاث المخصص',
    href: '/furniture',
    hasSubmenu: true,
    submenu: [
      { titleEn: 'Living Room', titleAr: 'غرفة المعيشة', href: '/furniture/living-room' },
      { titleEn: 'Bedroom', titleAr: 'غرفة النوم', href: '/furniture/bedroom' },
      { titleEn: 'Dining Room', titleAr: 'غرفة الطعام', href: '/furniture/dining-room' },
      { titleEn: 'Office', titleAr: 'المكتب', href: '/furniture/office' },
      { titleEn: 'Custom Pieces', titleAr: 'قطع مخصصة', href: '/furniture/custom' },
    ],
  },
  {
    titleEn: 'Projects',
    titleAr: 'المشاريع',
    href: '/projects',
    hasSubmenu: true,
    submenu: [
      { titleEn: 'Residential', titleAr: 'سكني', href: '/projects/residential' },
      { titleEn: 'Commercial', titleAr: 'تجاري', href: '/projects/commercial' },
      { titleEn: 'Hospitality', titleAr: 'ضيافة', href: '/projects/hospitality' },
    ],
  },
  {
    titleEn: 'Materials',
    titleAr: 'المواد',
    href: '/materials',
    hasSubmenu: false,
  },
  {
    titleEn: 'News',
    titleAr: 'الأخبار',
    href: '/news',
    hasSubmenu: false,
  },
  {
    titleEn: 'Contact',
    titleAr: 'اتصل بنا',
    href: '/contact',
    hasSubmenu: false,
  },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  services: [
    { titleEn: 'Residential Design', titleAr: 'التصميم السكني', href: '/services/interior-design/residential' },
    { titleEn: 'Commercial Design', titleAr: 'التصميم التجاري', href: '/services/interior-design/commercial' },
    { titleEn: 'Custom Furniture', titleAr: 'الأثاث المخصص', href: '/furniture' },
    { titleEn: 'Project Management', titleAr: 'إدارة المشاريع', href: '/services/project-management' },
  ],
  company: [
    { titleEn: 'About Us', titleAr: 'من نحن', href: '/about' },
    { titleEn: 'Our Team', titleAr: 'فريقنا', href: '/about/team' },
    { titleEn: 'Careers', titleAr: 'الوظائف', href: '/about/careers' },
    { titleEn: 'Awards', titleAr: 'الجوائز', href: '/about/awards' },
  ],
  resources: [
    { titleEn: 'News & Blog', titleAr: 'الأخبار والمدونة', href: '/news' },
    { titleEn: 'Events', titleAr: 'الفعاليات', href: '/events' },
    { titleEn: 'Materials Library', titleAr: 'مكتبة المواد', href: '/materials' },
    { titleEn: 'Business Directory', titleAr: 'دليل الأعمال', href: '/directory' },
  ],
  legal: [
    { titleEn: 'Privacy Policy', titleAr: 'سياسة الخصوصية', href: '/privacy' },
    { titleEn: 'Terms of Service', titleAr: 'شروط الخدمة', href: '/terms' },
    { titleEn: 'Cookie Policy', titleAr: 'سياسة ملفات تعريف الارتباط', href: '/cookies' },
  ],
} as const;

// Color Palette (matching Tailwind config)
export const COLORS = {
  primary: '#2C3E50',
  secondary: '#BFA27F',
  accent: '#C2B8B2',
  darkAccent: '#1F2D35',
  warmAccent: '#8C6B45',
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Animation Durations
export const ANIMATION = {
  fast: 200,
  normal: 300,
  slow: 500,
  slower: 800,
} as const;

// Project Categories
export const PROJECT_CATEGORIES = {
  residential: {
    titleEn: 'Residential',
    titleAr: 'سكني',
    subcategories: [
      { titleEn: 'Villas', titleAr: 'الفلل', slug: 'villas' },
      { titleEn: 'Apartments', titleAr: 'الشقق', slug: 'apartments' },
      { titleEn: 'Penthouses', titleAr: 'البنتهاوس', slug: 'penthouses' },
    ],
  },
  commercial: {
    titleEn: 'Commercial',
    titleAr: 'تجاري',
    subcategories: [
      { titleEn: 'Offices', titleAr: 'المكاتب', slug: 'offices' },
      { titleEn: 'Retail Spaces', titleAr: 'المساحات التجارية', slug: 'retail' },
      { titleEn: 'Showrooms', titleAr: 'صالات العرض', slug: 'showrooms' },
    ],
  },
  hospitality: {
    titleEn: 'Hospitality',
    titleAr: 'الضيافة',
    subcategories: [
      { titleEn: 'Hotels', titleAr: 'الفنادق', slug: 'hotels' },
      { titleEn: 'Restaurants', titleAr: 'المطاعم', slug: 'restaurants' },
      { titleEn: 'Cafes', titleAr: 'المقاهي', slug: 'cafes' },
    ],
  },
} as const;

// Furniture Categories
export const FURNITURE_CATEGORIES = {
  'living-room': {
    titleEn: 'Living Room',
    titleAr: 'غرفة المعيشة',
    items: [
      { titleEn: 'Sofa Sets', titleAr: 'طقم الكنب', slug: 'sofa-sets' },
      { titleEn: 'Coffee Tables', titleAr: 'طاولات القهوة', slug: 'coffee-tables' },
      { titleEn: 'TV Units', titleAr: 'وحدات التلفزيون', slug: 'tv-units' },
      { titleEn: 'Storage Solutions', titleAr: 'حلول التخزين', slug: 'storage' },
    ],
  },
  bedroom: {
    titleEn: 'Bedroom',
    titleAr: 'غرفة النوم',
    items: [
      { titleEn: 'Bed Frames', titleAr: 'إطارات السرير', slug: 'bed-frames' },
      { titleEn: 'Wardrobes', titleAr: 'الخزائن', slug: 'wardrobes' },
      { titleEn: 'Nightstands', titleAr: 'طاولات السرير', slug: 'nightstands' },
      { titleEn: 'Dressers', titleAr: 'التسريحات', slug: 'dressers' },
    ],
  },
  'dining-room': {
    titleEn: 'Dining Room',
    titleAr: 'غرفة الطعام',
    items: [
      { titleEn: 'Dining Tables', titleAr: 'طاولات الطعام', slug: 'tables' },
      { titleEn: 'Dining Chairs', titleAr: 'كراسي الطعام', slug: 'chairs' },
      { titleEn: 'Buffets', titleAr: 'البوفيهات', slug: 'buffets' },
    ],
  },
  office: {
    titleEn: 'Office',
    titleAr: 'المكتب',
    items: [
      { titleEn: 'Desks', titleAr: 'المكاتب', slug: 'desks' },
      { titleEn: 'Office Chairs', titleAr: 'كراسي المكتب', slug: 'chairs' },
      { titleEn: 'Storage', titleAr: 'التخزين', slug: 'storage' },
    ],
  },
} as const;

// Material Categories
export const MATERIAL_CATEGORIES = {
  woods: {
    titleEn: 'Woods',
    titleAr: 'الأخشاب',
    items: [
      { titleEn: 'Oak', titleAr: 'البلوط', slug: 'oak' },
      { titleEn: 'Walnut', titleAr: 'الجوز', slug: 'walnut' },
      { titleEn: 'Mahogany', titleAr: 'الماهوجني', slug: 'mahogany' },
      { titleEn: 'Pine', titleAr: 'الصنوبر', slug: 'pine' },
    ],
  },
  metals: {
    titleEn: 'Metals',
    titleAr: 'المعادن',
    items: [
      { titleEn: 'Steel', titleAr: 'الفولاذ', slug: 'steel' },
      { titleEn: 'Brass', titleAr: 'النحاس الأصفر', slug: 'brass' },
      { titleEn: 'Aluminum', titleAr: 'الألومنيوم', slug: 'aluminum' },
      { titleEn: 'Iron', titleAr: 'الحديد', slug: 'iron' },
    ],
  },
  fabrics: {
    titleEn: 'Fabrics',
    titleAr: 'الأقمشة',
    items: [
      { titleEn: 'Leather', titleAr: 'الجلد', slug: 'leather' },
      { titleEn: 'Velvet', titleAr: 'المخمل', slug: 'velvet' },
      { titleEn: 'Linen', titleAr: 'الكتان', slug: 'linen' },
      { titleEn: 'Cotton', titleAr: 'القطن', slug: 'cotton' },
    ],
  },
  stones: {
    titleEn: 'Stones',
    titleAr: 'الأحجار',
    items: [
      { titleEn: 'Marble', titleAr: 'الرخام', slug: 'marble' },
      { titleEn: 'Granite', titleAr: 'الجرانيت', slug: 'granite' },
      { titleEn: 'Travertine', titleAr: 'الترافرتين', slug: 'travertine' },
      { titleEn: 'Limestone', titleAr: 'الحجر الجيري', slug: 'limestone' },
    ],
  },
} as const;

// Contact Form Fields
export const CONTACT_FORM_FIELDS = {
  inquiry: ['name', 'email', 'phone', 'subject', 'message'],
  consultation: ['name', 'email', 'phone', 'projectType', 'budgetRange', 'preferredDate', 'description'],
  quote: ['name', 'email', 'phone', 'projectType', 'specifications', 'quantity', 'timeline', 'requirements'],
} as const;

// SEO Keywords
export const SEO_KEYWORDS = {
  en: [
    'interior design saudi arabia',
    'custom furniture riyadh',
    'luxury home decor',
    'residential design',
    'commercial interior design',
    'furniture manufacturing',
    'interior decoration',
    'home renovation',
    'office design',
    'hotel interior design',
  ],
  ar: [
    'تصميم داخلي السعودية',
    'أثاث مخصص الرياض',
    'ديكور منزلي فاخر',
    'تصميم سكني',
    'تصميم داخلي تجاري',
    'تصنيع أثاث',
    'تزيين داخلي',
    'تجديد منزل',
    'تصميم مكاتب',
    'تصميم داخلي فنادق',
  ],
} as const;