import { MMSService, MMSProperty, MMSTestimonial, MMSStat, MMSOffice } from '../types';

export const COMPANY_INFO = {
  name: 'Marissa Management & Services Inc.',
  shortName: 'MMS',
  tagline: 'Complete Building Solutions. One Trusted Partner.',
  subTagline:
    'Professional property management, maintenance, restoration and building services designed to keep your property running smoothly.',
  registration: 'Registered Group of Companies in Ontario & Alberta, Canada',
  experience: 'Over a decade of proven facility operations',
  headlineStat: "Proudly serving Canada's tallest & largest residential vertical community tower",
  emergencyHotline: '(905) 302-2888',
  primaryEmail: 'admin@marissamsinc.com',
  albertaEmail: 'mms.ab@marissamsinc.com',
  albertaPhone: '(780) 281-2530',
};

export const VERIFIED_STATS: MMSStat[] = [
  {
    index: '01',
    number: '23,000+',
    label: 'Residents Served',
    subtext: 'Across high-density condominium and commercial properties in Canada',
  },
  {
    index: '02',
    number: '11,000+',
    label: 'Units Under Care',
    subtext: 'Residential suites, commercial spaces, and mixed-use vertical towers',
  },
  {
    index: '03',
    number: '110+',
    label: 'Buildings & Properties',
    subtext: 'High-rise residential towers, commercial plazas, and industrial facilities',
  },
  {
    index: '04',
    number: '24/7/365',
    label: 'Emergency Response',
    subtext: 'Dedicated on-call dispatch hotline answered around the clock',
  },
];

export const VERIFIED_SERVICES: MMSService[] = [
  {
    id: 'general-contracting',
    title: 'General Contracting & Capital Works',
    category: 'capital',
    categoryLabel: 'Capital Projects',
    summary: 'Comprehensive construction, interior remediation, and capital improvement delivery.',
    description:
      'Turnkey project management for residential and commercial infrastructure. From suite turns, lobby upgrades, and concrete structural work to complete tenant build-outs, we manage every phase with dedicated supervisors and licensed trades.',
    features: [
      'Structural and cosmetic interior renovations',
      'Suite turnover and pre-delivery preparation',
      'Common element and corridor refurbishments',
      'Project management with strict deadline compliance',
    ],
    standards: 'OBC Compliance & Insured Trade Supervision',
    iconName: 'Hammer',
  },
  {
    id: 'building-superintendent',
    title: 'Building Superintendent Services',
    category: 'staffing',
    categoryLabel: 'Staffing & Facilities',
    summary: 'Dedicated on-site building superintendents and facility caretakers.',
    description:
      'Experienced, professional building superintendents who take ownership of your physical asset. Our personnel handle routine inspections, tenant work orders, mechanical plant monitoring, garbage room management, and contractor coordination.',
    features: [
      'On-site live-in or live-out superintendent staffing',
      'Daily plant room and common element safety logs',
      'Proactive tenant communication and incident logging',
      'Direct oversight from MMS field supervisors',
    ],
    standards: 'Rigorous Background Vetting & Daily Inspection Logs',
    iconName: 'Building2',
  },
  {
    id: 'disaster-restoration',
    title: 'Disaster Restoration & Flood Mitigation',
    category: 'mechanical',
    categoryLabel: 'Restoration & Urgent',
    summary: 'Emergency water extraction, structural drying, and certified mold remediation.',
    description:
      'Rapid emergency dispatch deploying thermal imaging cameras, moisture meters, and endoscope optics to locate water penetration at the source. We adhere strictly to international restoration standards to prevent secondary structural rot.',
    features: [
      '24/7 immediate dispatch for burst pipes and storm floods',
      'Thermal imaging moisture detection and endoscope inspections',
      'Industrial desiccant dehumidification and negative air containment',
      'Certified mold abatement with laboratory air quality clearance',
    ],
    standards: 'ANSI/IICRC S500 (Water) & S520 (Mold) Certified Standards',
    iconName: 'ShieldAlert',
  },
  {
    id: 'hvac-plumbing-mechanical',
    title: 'HVAC, Plumbing & Mechanical Systems',
    category: 'mechanical',
    categoryLabel: 'Mechanical & Systems',
    summary: 'Complete mechanical maintenance, booster pump service, and seasonal changeovers.',
    description:
      'Preventative and corrective mechanical services keeping critical building systems operational. We service boilers, chillers, makeup air units (MAU), circulation pumps, risers, and drainage lines with certified technicians.',
    features: [
      'Boiler, chiller, and cooling tower preventative maintenance',
      'Main water riser repairs, backflow prevention, and valve replacements',
      'Seasonal heating/cooling changeover calibration',
      'Drain scoping, snaking, and high-pressure water jetting',
    ],
    standards: 'TSSA & Licensed Plumbing Standards',
    iconName: 'Wrench',
  },
  {
    id: 'electrical-automation',
    title: 'Electrical & Building Automation',
    category: 'mechanical',
    categoryLabel: 'Mechanical & Systems',
    summary: 'Power distribution, emergency lighting, and intelligent automation systems.',
    description:
      'Certified electrical maintenance covering lighting distribution, generator testing, life safety system audits, and integration with modern building automation and sensor networks.',
    features: [
      'Main distribution panel inspections and thermal load scans',
      'Common area energy-efficient LED retrofits',
      'Emergency lighting monthly testing and battery certification',
      'Building automation integration for energy efficiency',
    ],
    standards: 'ESA (Electrical Safety Authority) Certified Compliance',
    iconName: 'Zap',
  },
  {
    id: 'property-maintenance-janitorial',
    title: 'Property Maintenance & Janitorial',
    category: 'staffing',
    categoryLabel: 'Staffing & Facilities',
    summary: 'Consistent, meticulous hygiene and custodial care for common elements.',
    description:
      'Comprehensive janitorial programs tailored to high-traffic lobbies, elevators, fitness centers, garbage chutes, and parking levels. We provide green cleaning agents, HEPA filtration, and strict quality control checks.',
    features: [
      'Daily lobby, vestibule, and elevator sanitization',
      'Carpet deep extraction and hard surface polishing',
      'Garbage chute compaction and odor control cycles',
      'Move-in and move-out common corridor protection',
    ],
    standards: 'HEPA Grade & Eco-Certified Sanitization Protocols',
    iconName: 'Sparkles',
  },
  {
    id: 'epoxy-flooring',
    title: 'Commercial Epoxy Flooring Systems',
    category: 'capital',
    categoryLabel: 'Capital Projects',
    summary: 'Heavy-duty seamless epoxy and polyurethane coatings for parkades and utility spaces.',
    description:
      'Specialized industrial-grade floor coatings designed to withstand salt, chemical abrasion, vehicle traffic, and moisture. Ideal for condominium parkades, mechanical penthouses, and waste disposal facilities.',
    features: [
      'Shot-blasting and diamond grind concrete preparation',
      'Moisture vapor barrier primers and multi-coat epoxy buildup',
      'Non-slip textured broadcast finishes for parkade ramps',
      'Chemical-resistant urethane topcoats for longevity',
    ],
    standards: 'Heavy Commercial Dynamic Traffic Rating',
    iconName: 'Layers',
  },
  {
    id: 'security-management',
    title: 'Security Management & Access Control',
    category: 'staffing',
    categoryLabel: 'Staffing & Facilities',
    summary: 'Perimeter protection, surveillance monitoring, and electronic fob integration.',
    description:
      'Holistic building protection coordinating physical security protocols, key fob system audits, visitor management, and high-definition CCTV coverage to safeguard residents and property assets.',
    features: [
      'Access control card and fob database administration',
      'CCTV camera maintenance, storage calibration, and incident retrieval',
      'Perimeter door hardware and automatic closer adjustments',
      'Concierge and front-desk security operational guidelines',
    ],
    standards: 'Secure Access & Redundant Cloud Event Logging',
    iconName: 'Lock',
  },
  {
    id: 'property-rentals-screening',
    title: 'Property Rentals & Tenant Screening',
    category: 'staffing',
    categoryLabel: 'Staffing & Facilities',
    summary: 'Comprehensive leasing oversight, tenant vetting, and compliance administration.',
    description:
      'Streamlined tenancy administration designed for property owners and condominium investors. We conduct thorough financial vetting, employment verification, and lease agreement execution.',
    features: [
      'Comprehensive credit and reference verification',
      'Standardized residential tenancy lease agreements',
      'Move-in condition reporting with digital photo documentation',
      'Ongoing tenant communication and rent collection support',
    ],
    standards: 'Compliant with Provincial Residential Tenancies Acts',
    iconName: 'FileCheck',
  },
  {
    id: 'drywall-repair',
    title: 'Drywall & Structural Interior Repair',
    category: 'capital',
    categoryLabel: 'Capital Projects',
    summary: 'Permanent engineered drywall restoration and acoustic partition repair.',
    description:
      'Precision drywall restoration addressing water damage, settlement cracks, acoustic separation, and structural partition repairs. We deliver level 5 smooth finishes that blend invisibly with existing walls.',
    features: [
      'Post-flood drywall cutback and mold-resistant drywall installation',
      'Acoustic soundproofing between residential demising walls',
      'Dustless sanding techniques and prime-paint matching',
      'Fire-rated wall assembly restorations (Type X)',
    ],
    standards: 'Fire-Code & Sound Transmission Class (STC) Compliance',
    iconName: 'Paintbrush',
  },
];

export const VERIFIED_PROPERTIES: MMSProperty[] = [
  {
    id: 'aura-condo',
    name: 'Aura Condominium',
    location: '384 Yonge Street, Downtown Toronto, ON',
    type: 'High-Rise Luxury Residential Tower',
    scaleBadge: "Canada's Tallest Residential Tower (78 Storeys)",
    servicesProvided: [
      'Building Superintendent Services',
      'General Contracting & Suite Turnover',
      'Mechanical & Plumbing Assistance',
      'Facility Maintenance Support',
    ],
    description:
      "Aura is an iconic landmark on the Toronto skyline standing 78 storeys high. MMS proudly provides dedicated building services and facility solutions for Canada's tallest and largest residential vertical community tower.",
    highlight: '78 Storeys · Over 985 Residential Units · Iconic Urban Landmark',
    imageAlt: 'Aura Condominium high-rise tower exterior at Yonge and Gerrard in Toronto',
  },
  {
    id: 'imperial-plaza',
    name: 'Imperial Plaza',
    location: '111 St. Clair Ave West / Avenue Road, Midtown Toronto, ON',
    type: 'Luxury Historic Landmark Condominium',
    scaleBadge: 'Premier Midtown Residential Heritage Tower (23 Storeys)',
    servicesProvided: [
      'Comprehensive Building Maintenance',
      'Custodial & Common Element Care',
      'Preventative Mechanical Oversight',
      'Drywall & Interior Restoration',
    ],
    description:
      'A masterfully restored mid-century modern architectural treasure in Midtown Toronto. MMS supports the rigorous standards expected by residents of this prestigious high-end community.',
    highlight: '23 Storeys · Masterful Heritage Architecture · High-End Finishes',
    imageAlt: 'Imperial Plaza luxury midtown condominium building in Toronto',
  },
  {
    id: 'metroplace',
    name: 'Metroplace Condominiums',
    location: 'Allen Road & Sheppard Ave West, North York, ON',
    type: 'Multi-Tower Residential Master-Planned Complex',
    scaleBadge: 'High-Density Multi-Tower Community',
    servicesProvided: [
      'Emergency Water Extraction & Restoration',
      'Superintendent Staffing',
      'Common Area Janitorial Care',
      'Parkade & Mechanical Maintenance',
    ],
    description:
      'A bustling multi-building condominium complex serving hundreds of families. MMS provides dependable day-to-day facilities support, superintendent care, and rapid disaster restoration services.',
    highlight: 'Multi-Building Campus · Transit-Oriented Urban Community',
    imageAlt: 'Metroplace residential high-rise community towers in North York',
  },
  {
    id: 'oak-and-co',
    name: 'Oak & Co. Condominiums',
    location: 'Trafalgar Road, Oakville, ON',
    type: 'Modern Master-Planned Condominium Towers',
    scaleBadge: 'Master-Planned Suburban Community',
    servicesProvided: [
      'Facility Maintenance & Cleaning',
      'Superintendent Assistance',
      'Mechanical Systems Monitoring',
      'Tenant & Board Communication',
    ],
    description:
      'A contemporary suburban residential hub. MMS was commended by the community for clear communications, high levels of responsive service, and pristine upkeep of shared facilities.',
    highlight: 'Modern Architecture · Multi-Tower Layout · Clear Operational Transparency',
    imageAlt: 'Oak and Co modern condominium buildings in Oakville Ontario',
  },
  {
    id: 'village-terrace',
    name: 'Village Terrace Condominiums',
    location: 'Greater Toronto Area, ON',
    type: 'Established High-Rise Residential Community',
    scaleBadge: 'Established Residential Landmark',
    servicesProvided: [
      'Dedicated Building Superintendent',
      'General Contracting & Building Upgrades',
      'Property Development & Enhancements',
      'Proactive Common Element Care',
    ],
    description:
      'An established residential tower community where residents praised the dedicated MMS on-site team for polite, efficient, smart, and transformative property enhancements.',
    highlight: 'Long-Term Facility Upgrades · Resident Commendation · Proven Reliability',
    imageAlt: 'Village Terrace residential property entrance and facade',
  },
];

export const VERIFIED_TESTIMONIALS: MMSTestimonial[] = [
  {
    id: 'test-village-terrace',
    quote:
      'Lalith and the MMS team have been professional, efficient, smart, decent, polite, and very helpful. We have witnessed significant property development and genuine care for our building since they took over.',
    author: 'Resident Representative',
    affiliation: 'Village Terrace Condominiums',
    propertyContext: 'Established High-Rise Community · GTA',
    verified: true,
  },
  {
    id: 'test-oak-and-co',
    quote:
      'MMS has consistently impressed our community with clear communications, prompt follow-ups, and a remarkably high level of facility service. Having a reliable team on-site gives our residents complete peace of mind.',
    author: 'Condominium Community Member',
    affiliation: 'Oak & Co. Condominiums',
    propertyContext: 'Master-Planned Community · Oakville, ON',
    verified: true,
  },
  {
    id: 'test-property-operations',
    quote:
      'When managing vertical towers, having one vendor handle superintendent staffing, mechanical preventative checks, and 24/7 disaster restoration eliminates endless finger-pointing. MMS provides permanent engineered solutions rather than temporary fixes.',
    author: 'Commercial & High-Rise Operations',
    affiliation: 'Toronto Condominium Sector',
    propertyContext: 'High-Density Residential Portfolio',
    verified: true,
  },
];

export const VERIFIED_OFFICES: MMSOffice[] = [
  {
    region: 'Ontario Headquarters & GTA Operations',
    territory: 'Serving the Greater Toronto Area (GTA), Hamilton, Oakville & Southern Ontario',
    phone: '(905) 302-2888',
    email: 'admin@marissamsinc.com',
    isDispatchHeadquarters: true,
  },
  {
    region: 'Alberta Regional Operations',
    territory: 'Serving Edmonton, Calgary & surrounding metropolitan areas',
    phone: '(780) 281-2530',
    email: 'mms.ab@marissamsinc.com',
    isDispatchHeadquarters: false,
  },
];

export const WHY_MMS_POINTS = [
  {
    number: '01',
    title: 'Experienced Leadership & Proven Track Record',
    body: 'Over a decade of hands-on expertise managing complex building envelopes, central plants, and high-density towers across Ontario and Alberta.',
  },
  {
    number: '02',
    title: '24/7/365 Direct Emergency Hotline',
    body: 'A live emergency dispatch line (905) 302-2888 answered 24 hours a day, 365 days a year for rapid water extraction, power disruption, and mechanical failure.',
  },
  {
    number: '03',
    title: 'One Integrated Partner (Single-Vendor Accountability)',
    body: 'General contracting, superintendents, mechanical HVAC, electrical, and janitorial under one roof. No subcontractor blame-shifting or communication gaps.',
  },
  {
    number: '04',
    title: 'Advanced Diagnostic Technology & AI Systems',
    body: 'Utilizing building automation telemetry, calibrated thermal imaging, and endoscope optics to identify the root cause of water penetration and mechanical stress.',
  },
  {
    number: '05',
    title: 'Permanent Engineered Solutions',
    body: 'We reject quick cosmetic band-aids. Every restoration and structural repair adheres to strict ANSI/IICRC S500/S520 standards and provincial building codes.',
  },
  {
    number: '06',
    title: 'Proven Scale & Landmark Trust',
    body: "Trusted by Canada's tallest residential vertical community tower (Aura, 78 storeys), managing over 110 buildings and serving 23,000+ residents daily.",
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Thermal & Physical Inspection',
    description:
      'We conduct on-site physical diagnostics using calibrated thermal cameras, moisture sensors, and mechanical checks to assess true building conditions.',
  },
  {
    step: '02',
    title: 'Engineered Scope & Transparent Proposal',
    description:
      'A detailed, line-item scope of work is prepared adhering to OBC and ANSI/IICRC standards, providing board members and property managers complete cost clarity.',
  },
  {
    step: '03',
    title: 'Supervised Execution by Vetted Trades',
    description:
      'Dedicated MMS supervisors coordinate certified technicians and on-site staff with strict milestone oversight and clean containment.',
  },
  {
    step: '04',
    title: '24/7 Continual Care & Asset Protection',
    description:
      'Long-term preventative maintenance logs, automated system telemetry, and round-the-clock emergency support keep the facility operating smoothly.',
  },
];
