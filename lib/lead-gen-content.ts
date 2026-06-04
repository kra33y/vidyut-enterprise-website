export type LinkItem = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceLandingPage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  hero: string;
  focus: string;
  primaryNeed: string;
  solution: string;
  materials: string[];
  siteSignals: string[];
  benefits: string[];
  process: string[];
  industries: string[];
  relatedProducts: LinkItem[];
  relatedProjects: LinkItem[];
  relatedArticles: LinkItem[];
  faqs: FaqItem[];
};

export type LocalSeoPage = {
  slug: string;
  title: string;
  metaDescription: string;
  service: string;
  location: string;
  hero: string;
  serviceArea: string;
  industrialFocus: string[];
  internalLinks: LinkItem[];
  faqs: FaqItem[];
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  metaDescription: string;
  industry: string;
  overview: string;
  scope: string[];
  challenges: string[];
  solution: string[];
  materials: string[];
  results: string[];
  benefits: string[];
  relatedServices: LinkItem[];
  relatedProducts: LinkItem[];
  relatedArticles: LinkItem[];
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  cluster: "Earthing" | "Lightning Protection" | "Electrical Infrastructure";
  metaDescription: string;
  excerpt: string;
  points: string[];
  relatedServices: LinkItem[];
  relatedProducts: LinkItem[];
  faqs: FaqItem[];
  date: string;
};

const commonIndustries = [
  "Manufacturing plants",
  "Electrical substations",
  "Commercial buildings",
  "Solar power projects",
  "Telecom infrastructure",
  "Warehouses and logistics sites",
  "Hospitals and institutional buildings",
  "Industrial panels and utility rooms"
];

const commonWhy = [
  "Local Visakhapatnam support with Andhra Pradesh project familiarity",
  "Manufacturer, supplier, stockist, distributor and contractor capability",
  "GST and MSME registered documentation-friendly business",
  "Product guidance across earthing, lightning protection, copper, GI and cable management",
  "Practical support for BOQ review, site conditions, installation planning and procurement"
];

const productLinks = {
  chemicalEarthing: { label: "Chemical Earthing Electrode", href: "/products/chemical-earthing-electrode" },
  copperBonded: { label: "Copper Bonded Earthing Electrode", href: "/products/copper-bonded-earthing-electrode" },
  lightning: { label: "ESE Lightning Arrestor", href: "/products/ese-lightning-arrestor" },
  cableTrays: { label: "Cable Trays", href: "/products/cable-trays" },
  copperFlats: { label: "Copper Flats and Plates", href: "/products/copper-flats" },
  chambers: { label: "Earth Pit Covers and Inspection Chambers", href: "/products/earth-pit-covers-inspection-chambers" }
};

const articleLinks = {
  resistance: { label: "What Is Earthing Resistance", href: "/blog/what-is-earthing-resistance" },
  pitGuide: { label: "Earthing Pit Installation Guide", href: "/blog/earthing-pit-installation-guide" },
  testing: { label: "Earthing Testing Procedure", href: "/blog/earthing-testing-procedure" },
  lightningFactory: { label: "Lightning Protection For Factories", href: "/blog/lightning-protection-for-factories" },
  eseGuide: { label: "ESE Lightning Arrester Guide", href: "/blog/ese-lightning-arrester-guide" },
  cableTray: { label: "Cable Tray Selection Guide", href: "/blog/cable-tray-selection-guide" }
};

const projectLinks = {
  factoryEarthing: { label: "Factory Earthing Installation Project", href: "/projects/factory-earthing-installation-project" },
  chemicalEarthing: { label: "Chemical Earthing Installation Project", href: "/projects/chemical-earthing-installation-project" },
  lightning: { label: "Lightning Protection Installation Project", href: "/projects/lightning-protection-installation-project" },
  electricalUpgrade: { label: "Industrial Electrical Upgrade Project", href: "/projects/industrial-electrical-upgrade-project" },
  substation: { label: "Substation Earthing Project", href: "/projects/substation-earthing-project" },
  copperBonded: { label: "Copper Bonded Earthing Project", href: "/projects/copper-bonded-earthing-project" }
};

export const servicePages: ServiceLandingPage[] = [
  {
    slug: "chemical-earthing-installation",
    title: "Chemical Earthing Installation",
    shortTitle: "Chemical Earthing",
    metaDescription:
      "Chemical earthing installation for factories, commercial buildings, substations and industrial sites in Visakhapatnam and Andhra Pradesh.",
    hero:
      "Chemical earthing installation is used when a site needs stable earth resistance, practical maintenance access and a reliable path for fault current and lightning discharge.",
    focus: "low-resistance earthing pits with suitable electrodes, backfill compound, terminals and inspection access",
    primaryNeed:
      "soil conditions, moisture retention, corrosion exposure and the number of critical electrical loads must be considered before the pit location is finalized",
    solution:
      "site survey, electrode selection, backfill planning, pit preparation, terminal connection, inspection chamber placement and resistance testing",
    materials: ["chemical earthing electrode", "backfill compound", "earth pit chamber", "copper strip", "GI strip", "clamps"],
    siteSignals: ["soil resistivity", "panel location", "available pit depth", "water drainage", "maintenance access"],
    benefits: [
      "Helps maintain dependable earth resistance for electrical safety",
      "Supports panels, machinery, UPS systems, lightning arrestors and plant grounding",
      "Improves inspection access through proper chamber and terminal planning",
      "Reduces avoidable rework caused by poor pit location or undersized accessories",
      "Can be coordinated with chemical compound, copper or GI conductors and testing"
    ],
    process: [
      "Review electrical load, BOQ, drawings and target earth resistance values",
      "Inspect soil condition, pit location, drainage, depth feasibility and service access",
      "Select electrode type, conductor material, backfill compound and chamber arrangement",
      "Prepare pit, install electrode, connect terminal and compact compound in layers",
      "Test resistance, document observations and recommend maintenance intervals"
    ],
    industries: commonIndustries,
    relatedProducts: [productLinks.chemicalEarthing, productLinks.chambers, productLinks.copperFlats],
    relatedProjects: [projectLinks.chemicalEarthing, projectLinks.factoryEarthing, projectLinks.substation],
    relatedArticles: [articleLinks.pitGuide, articleLinks.resistance, articleLinks.testing],
    faqs: [
      {
        question: "When should I choose chemical earthing installation?",
        answer:
          "Chemical earthing is useful for factories, buildings and utility sites where stable resistance, moisture retention and practical maintenance access are important."
      },
      {
        question: "Can Vidyut Enterprise supply materials and handle installation?",
        answer:
          "Yes. Product supply, electrode selection, backfill compound, chambers, accessories and installation support can be coordinated as per site requirement."
      },
      {
        question: "Do you test the earth resistance after installation?",
        answer:
          "Testing support can be provided after installation, and readings can be reviewed for maintenance planning or additional pit recommendations."
      }
    ]
  },
  {
    slug: "lightning-protection-system-installation",
    title: "Lightning Protection System Installation",
    shortTitle: "Lightning Protection",
    metaDescription:
      "Lightning protection system installation with ESE lightning arrestors, masts, down conductors, clamps and earthing support.",
    hero:
      "Lightning protection system installation protects buildings, plants and exposed structures by giving lightning energy a controlled route to earth.",
    focus: "ESE or conventional air terminal placement, down conductor routing, bonding, test links and earthing coordination",
    primaryNeed:
      "roof height, exposed equipment, nearby structures, down conductor route, test access and earthing quality must be reviewed together",
    solution:
      "risk review, arrestor selection, mast mounting, down conductor planning, clamp placement, bonding and final earth connection",
    materials: ["ESE lightning arrestor", "GI mast", "base plate", "down conductor", "cable clamp", "test link", "earthing electrode"],
    siteSignals: ["roof geometry", "equipment exposure", "safe conductor route", "maintenance access", "earthing continuity"],
    benefits: [
      "Provides a planned discharge path for lightning energy",
      "Supports factories, warehouses, towers, solar plants and commercial rooftops",
      "Reduces unsafe improvisation around masts, clamps and down conductor routing",
      "Coordinates air terminal installation with the earthing system",
      "Improves long-term inspection, testing and maintenance visibility"
    ],
    process: [
      "Review building height, exposure, roof equipment and protection intent",
      "Select ESE or conventional air terminal and suitable mast arrangement",
      "Plan down conductor route with clamps, test link and bonding points",
      "Install mast, terminal, down conductor and earth connection safely",
      "Inspect continuity, route protection and test access before handover"
    ],
    industries: commonIndustries,
    relatedProducts: [productLinks.lightning, productLinks.copperBonded, productLinks.copperFlats],
    relatedProjects: [projectLinks.lightning, projectLinks.factoryEarthing, projectLinks.substation],
    relatedArticles: [articleLinks.lightningFactory, articleLinks.eseGuide, articleLinks.resistance],
    faqs: [
      {
        question: "Does a lightning arrestor need a separate earthing system?",
        answer:
          "A lightning protection system must be connected to a suitable earthing path. The design may use dedicated or coordinated earth points depending on site requirements."
      },
      {
        question: "Can you provide ESE lightning arrestor accessories?",
        answer:
          "Yes. Masts, base plates, clamps, down conductors, test links and earthing materials can be supplied with the system."
      },
      {
        question: "Which sites need lightning protection?",
        answer:
          "Factories, warehouses, hospitals, towers, high buildings, solar plants and exposed industrial facilities commonly review lightning protection needs."
      }
    ]
  },
  {
    slug: "earthing-testing-maintenance",
    title: "Earthing Testing and Maintenance",
    shortTitle: "Testing and Maintenance",
    metaDescription:
      "Earthing resistance testing, inspection and maintenance support for industrial electrical systems in Andhra Pradesh.",
    hero:
      "Earthing testing and maintenance keeps grounding systems visible, measurable and ready for safe operation after installation.",
    focus: "earth resistance testing, terminal inspection, continuity checks, chamber condition review and maintenance recommendations",
    primaryNeed:
      "ageing pits, loose terminals, dry soil, damaged chambers and added electrical loads can change the performance of an existing earthing system",
    solution:
      "site inspection, measurement, issue identification, accessory replacement guidance, compound top-up recommendation and documentation support",
    materials: ["test links", "earth pit chambers", "backfill compound", "clamps", "copper strip", "GI strip"],
    siteSignals: ["old readings", "seasonal variation", "pit accessibility", "terminal condition", "load additions"],
    benefits: [
      "Helps identify weak or deteriorated earth points before faults occur",
      "Supports maintenance records for audits and internal safety reviews",
      "Improves decision-making for additional pits or material replacement",
      "Reduces downtime caused by unclear grounding conditions",
      "Works with existing chemical, copper bonded, GI and plate earthing systems"
    ],
    process: [
      "List existing earth points, panels, lightning conductors and critical loads",
      "Inspect terminal condition, chamber condition and conductor continuity",
      "Measure resistance and compare values with site expectations",
      "Recommend maintenance, additional pits, tightening, cleaning or compound support",
      "Share readings and practical next steps for facility teams"
    ],
    industries: commonIndustries,
    relatedProducts: [productLinks.chambers, productLinks.chemicalEarthing, productLinks.copperBonded],
    relatedProjects: [projectLinks.factoryEarthing, projectLinks.substation, projectLinks.electricalUpgrade],
    relatedArticles: [articleLinks.testing, articleLinks.resistance, articleLinks.pitGuide],
    faqs: [
      {
        question: "How often should earthing be tested?",
        answer:
          "Testing frequency depends on site criticality, soil condition and internal safety practice. Industrial sites often review readings periodically and after major electrical changes."
      },
      {
        question: "What happens if resistance is high?",
        answer:
          "The pit condition, soil moisture, conductor continuity, terminal connection and number of earth points should be reviewed before selecting corrective action."
      },
      {
        question: "Can old earthing pits be improved?",
        answer:
          "Many existing systems can be improved with maintenance, better connections, compound support, additional pits or replacement of damaged accessories."
      }
    ]
  },
  {
    slug: "electrical-consultancy",
    title: "Electrical Consultancy",
    shortTitle: "Electrical Consultancy",
    metaDescription:
      "Electrical consultancy for earthing, lightning protection, electrical material selection, BOQ review and industrial project planning.",
    hero:
      "Electrical consultancy helps purchase teams, contractors and facility owners make practical decisions before material is ordered or site work begins.",
    focus: "BOQ review, earthing product selection, lightning protection planning, cable management guidance and procurement support",
    primaryNeed:
      "industrial buyers often need clarity on material grade, accessory compatibility, site execution risk and documentation before approving a purchase",
    solution:
      "requirement review, drawing discussion, product mapping, technical alternatives, BOQ refinement and phased procurement planning",
    materials: ["earthing electrodes", "copper flats", "GI flats", "lightning arrestors", "cable trays", "earth pit covers"],
    siteSignals: ["drawing stage", "BOQ clarity", "material grade", "budget range", "dispatch timeline"],
    benefits: [
      "Improves RFQ clarity before quotations are compared",
      "Helps avoid undersized accessories or incompatible material choices",
      "Supports contractors during planning, procurement and handover",
      "Connects product supply with practical installation constraints",
      "Creates a cleaner path from enquiry to quote to dispatch"
    ],
    process: [
      "Share drawings, BOQ, photos, site location or problem statement",
      "Review product family, material grade, finish, size and quantity assumptions",
      "Map related accessories, testing needs and installation support requirements",
      "Recommend practical options and procurement sequence",
      "Convert the final requirement into a quotation-ready list"
    ],
    industries: commonIndustries,
    relatedProducts: [productLinks.cableTrays, productLinks.copperFlats, productLinks.chemicalEarthing],
    relatedProjects: [projectLinks.electricalUpgrade, projectLinks.factoryEarthing, projectLinks.substation],
    relatedArticles: [articleLinks.cableTray, articleLinks.resistance, articleLinks.eseGuide],
    faqs: [
      {
        question: "Can you review an electrical BOQ before quotation?",
        answer:
          "Yes. Vidyut Enterprise can help map BOQ line items to suitable products, accessories and practical procurement notes."
      },
      {
        question: "Do you support contractors and purchase teams?",
        answer:
          "Yes. The consultancy approach is useful for contractors, consultants, facility teams and purchase departments that need practical product clarity."
      },
      {
        question: "Can consultancy be combined with supply?",
        answer:
          "Yes. Recommendations can be converted into product supply, installation support or a site visit request."
      }
    ]
  },
  {
    slug: "industrial-electrical-contracting",
    title: "Industrial Electrical Contracting",
    shortTitle: "Electrical Contracting",
    metaDescription:
      "Industrial electrical contracting support for earthing, cable management, lightning protection and electrical infrastructure projects.",
    hero:
      "Industrial electrical contracting support connects product supply, site execution and documentation for plants, warehouses and infrastructure projects.",
    focus: "site-ready coordination for earthing, lightning protection, cable trays, copper bonding, GI supports and electrical material packages",
    primaryNeed:
      "industrial execution requires dependable material availability, safe installation planning, accessory matching and clear communication with site teams",
    solution:
      "scope review, BOQ support, material coordination, installation planning, testing support and project handover coordination",
    materials: ["cable trays", "earthing electrodes", "copper flats", "GI flats", "lightning arrestors", "inspection chambers"],
    siteSignals: ["project schedule", "site access", "electrical drawings", "material storage", "safety requirements"],
    benefits: [
      "Supports contractors with supply and execution coordination",
      "Reduces delays caused by missing accessories or unclear material choices",
      "Improves consistency between BOQ, quotation and site work",
      "Useful for plant upgrades, new factory work and infrastructure packages",
      "Creates one practical point of contact for multiple electrical product families"
    ],
    process: [
      "Understand project scope, site schedule and contractor requirements",
      "Review BOQ, drawings, product specifications and installation constraints",
      "Coordinate material list, accessories, dispatch and site execution sequence",
      "Support installation work, inspection points and testing requirements",
      "Close with documentation, readings and future maintenance recommendations"
    ],
    industries: commonIndustries,
    relatedProducts: [productLinks.cableTrays, productLinks.copperFlats, productLinks.lightning],
    relatedProjects: [projectLinks.electricalUpgrade, projectLinks.factoryEarthing, projectLinks.lightning],
    relatedArticles: [articleLinks.cableTray, articleLinks.lightningFactory, articleLinks.testing],
    faqs: [
      {
        question: "What type of contracting work do you support?",
        answer:
          "The focus is industrial electrical infrastructure, including earthing, lightning protection, cable routing and related material packages."
      },
      {
        question: "Can you work from drawings or BOQ?",
        answer:
          "Yes. Drawings, BOQs, photos and product schedules help create accurate material and execution planning."
      },
      {
        question: "Do you supply materials for contracting projects?",
        answer:
          "Yes. Material supply can be combined with contracting support for smoother execution."
      }
    ]
  },
  {
    slug: "copper-bonded-earthing-solutions",
    title: "Copper Bonded Earthing Solutions",
    shortTitle: "Copper Bonded Earthing",
    metaDescription:
      "Copper bonded earthing solutions with rods, clamps, couplers and grounding accessories for industrial projects.",
    hero:
      "Copper bonded earthing solutions are used where conductivity, long service life and reliable grounding connections are important.",
    focus: "copper bonded rods, couplers, clamps, driving heads, conductors and earth pit accessories for grounding networks",
    primaryNeed:
      "the rod length, soil condition, coupling method, terminal connection and number of earth points must match the site requirement",
    solution:
      "rod selection, accessory mapping, pit planning, conductor connection, testing support and maintenance guidance",
    materials: ["copper bonded rods", "couplers", "driving heads", "rod clamps", "copper strip", "earth pit chamber"],
    siteSignals: ["soil condition", "target resistance", "rod depth", "terminal location", "lightning protection tie-in"],
    benefits: [
      "Combines a conductive copper surface with a robust rod body",
      "Useful for grounding grids, lightning systems and industrial panels",
      "Supports modular installation with couplers and accessories",
      "Improves procurement clarity for rod, clamp and conductor packages",
      "Can be coordinated with inspection chambers and testing"
    ],
    process: [
      "Review target resistance, site layout and available installation depth",
      "Select rod size, coupling method, clamps and conductor connection",
      "Plan pit location, driving approach and terminal protection",
      "Install rods and accessories with suitable bonding and inspection access",
      "Test readings and identify additional grounding needs if required"
    ],
    industries: commonIndustries,
    relatedProducts: [productLinks.copperBonded, productLinks.copperFlats, productLinks.chambers],
    relatedProjects: [projectLinks.copperBonded, projectLinks.substation, projectLinks.factoryEarthing],
    relatedArticles: [articleLinks.resistance, articleLinks.testing, articleLinks.pitGuide],
    faqs: [
      {
        question: "Where are copper bonded rods used?",
        answer:
          "They are used in industrial grounding, lightning protection, substations, solar projects and sites that need reliable earth connections."
      },
      {
        question: "Can copper bonded rods be coupled?",
        answer:
          "Yes. Rods can be supplied with couplers and driving accessories depending on the depth and installation method."
      },
      {
        question: "Do you provide complete copper bonded earthing packages?",
        answer:
          "Yes. Rods, clamps, conductors, chambers and supporting accessories can be supplied as a package."
      }
    ]
  },
  {
    slug: "factory-earthing-solutions",
    title: "Factory Earthing Solutions",
    shortTitle: "Factory Earthing",
    metaDescription:
      "Factory earthing solutions for machinery, panels, lightning protection, electrical rooms and industrial safety requirements.",
    hero:
      "Factory earthing solutions protect people, equipment and production continuity by creating reliable grounding paths across critical electrical points.",
    focus: "main panel earthing, machinery grounding, lightning protection earthing, earth pits, bonding conductors and testing",
    primaryNeed:
      "factories often have multiple loads, changing equipment, wet or dusty areas, metal structures and strict maintenance expectations",
    solution:
      "earthing layout review, pit planning, conductor selection, equipment bonding, test access and periodic maintenance support",
    materials: ["chemical electrodes", "copper bonded rods", "GI flats", "copper flats", "earth pit chambers", "test links"],
    siteSignals: ["panel locations", "machinery layout", "production zones", "soil condition", "future expansion"],
    benefits: [
      "Supports safe operation of machinery, panels and plant utilities",
      "Improves grounding visibility for maintenance and audits",
      "Coordinates earthing with lightning protection and electrical upgrades",
      "Helps plan additional pits for new equipment or expansion",
      "Reduces confusion between product supply, installation and testing"
    ],
    process: [
      "Review factory layout, panels, machinery, utility rooms and lightning exposure",
      "Identify earth pit locations, conductor routes and bonding points",
      "Select electrode type, strip material, chamber and accessory package",
      "Install and connect earth points with safe access for maintenance",
      "Test, document and recommend maintenance or expansion planning"
    ],
    industries: commonIndustries,
    relatedProducts: [productLinks.chemicalEarthing, productLinks.copperBonded, productLinks.cableTrays],
    relatedProjects: [projectLinks.factoryEarthing, projectLinks.electricalUpgrade, projectLinks.lightning],
    relatedArticles: [articleLinks.resistance, articleLinks.testing, articleLinks.lightningFactory],
    faqs: [
      {
        question: "What should factory earthing cover?",
        answer:
          "Factory earthing should cover panels, machinery, utility systems, lightning protection paths, metal bonding and accessible inspection points."
      },
      {
        question: "Can you work during factory upgrades?",
        answer:
          "Yes. Earthing support can be planned during upgrades, panel additions, machinery installation and maintenance work."
      },
      {
        question: "Do factories need periodic testing?",
        answer:
          "Periodic testing helps confirm that earth points remain effective as soil, equipment and site conditions change."
      }
    ]
  },
  {
    slug: "substation-earthing-solutions",
    title: "Substation Earthing Solutions",
    shortTitle: "Substation Earthing",
    metaDescription:
      "Substation earthing solutions for grounding grids, electrodes, copper/GI strips, earth pits and testing support.",
    hero:
      "Substation earthing solutions focus on dependable grounding, bonding and inspection access for critical electrical infrastructure.",
    focus: "earthing grids, electrodes, copper or GI strips, equipment bonding, earth pit chambers and resistance testing",
    primaryNeed:
      "substations require careful attention to grid continuity, equipment bonding, conductor sizing, pit placement and future maintenance access",
    solution:
      "layout review, material selection, grid and pit coordination, bonding details, testing support and documentation-friendly handover",
    materials: ["GI flats", "copper flats", "chemical electrodes", "copper bonded rods", "earth pit covers", "clamps"],
    siteSignals: ["equipment layout", "fault current expectation", "grid route", "soil resistivity", "inspection access"],
    benefits: [
      "Supports reliable grounding for transformer and switchgear areas",
      "Coordinates grid material with electrodes and inspection chambers",
      "Improves long-term testing and maintenance planning",
      "Helps procurement teams align BOQ materials with site execution",
      "Useful for industrial substations, utility rooms and power infrastructure"
    ],
    process: [
      "Review substation layout, equipment points, BOQ and grounding requirement",
      "Map grid route, earth pits, conductor sizes and equipment bonding",
      "Select copper or GI flats, electrodes, clamps and chamber arrangement",
      "Support installation sequencing and continuity checks",
      "Test, document and recommend maintenance intervals"
    ],
    industries: commonIndustries,
    relatedProducts: [productLinks.copperFlats, productLinks.copperBonded, productLinks.chambers],
    relatedProjects: [projectLinks.substation, projectLinks.copperBonded, projectLinks.factoryEarthing],
    relatedArticles: [articleLinks.resistance, articleLinks.testing, articleLinks.pitGuide],
    faqs: [
      {
        question: "What materials are used for substation earthing?",
        answer:
          "Common materials include copper flats, GI flats, earthing electrodes, clamps, chambers and related bonding accessories."
      },
      {
        question: "Can you support a substation earthing BOQ?",
        answer:
          "Yes. BOQ review, material mapping and product supply support can be provided for substation earthing requirements."
      },
      {
        question: "Is testing important for substation earthing?",
        answer:
          "Yes. Testing and continuity checks help confirm the grounding system is performing as expected."
      }
    ]
  }
].map((page) => ({ ...page, industries: page.industries.length ? page.industries : commonIndustries }));

const baseLocalSeoPages: LocalSeoPage[] = [
  {
    slug: "earthing-installation-visakhapatnam",
    title: "Earthing Installation in Visakhapatnam",
    metaDescription:
      "Earthing installation in Visakhapatnam for factories, commercial buildings, substations and industrial electrical projects.",
    service: "Earthing installation",
    location: "Visakhapatnam",
    hero:
      "Vidyut Enterprise supports earthing installation in Visakhapatnam for industrial, commercial and infrastructure projects that need dependable grounding and practical site support.",
    serviceArea:
      "From Dabagardens and central Visakhapatnam to industrial corridors, port-linked facilities, factories, warehouses and utility sites, the service is planned around local access, soil condition and project timelines.",
    industrialFocus: ["Chemical earthing pits", "Copper bonded rods", "GI and copper strip bonding", "Earth pit chambers", "Resistance testing"],
    internalLinks: [
      { label: "Chemical Earthing Installation", href: "/services/chemical-earthing-installation" },
      productLinks.chemicalEarthing,
      articleLinks.pitGuide
    ],
    faqs: [
      {
        question: "Do you provide earthing installation in Visakhapatnam?",
        answer:
          "Yes. Vidyut Enterprise is based in Visakhapatnam and supports local earthing installation, material supply and site visit requirements."
      },
      {
        question: "Can you support factory earthing near Visakhapatnam?",
        answer:
          "Yes. Factory earthing, panel earthing, machinery grounding and maintenance support can be planned for local industrial sites."
      }
    ]
  },
  {
    slug: "lightning-protection-visakhapatnam",
    title: "Lightning Protection System in Visakhapatnam",
    metaDescription:
      "Lightning protection installation in Visakhapatnam with ESE lightning arrestors, down conductors, masts and earthing support.",
    service: "Lightning protection",
    location: "Visakhapatnam",
    hero:
      "Lightning protection in Visakhapatnam is important for factories, towers, commercial buildings, hospitals, warehouses and exposed rooftop equipment.",
    serviceArea:
      "The service supports local buildings and industrial sites where coastal weather, exposed roofs, tall structures and sensitive electrical systems make lightning risk planning important.",
    industrialFocus: ["ESE lightning arrestors", "Masts and base plates", "Down conductor routing", "Test links", "Lightning earthing"],
    internalLinks: [
      { label: "Lightning Protection Installation", href: "/services/lightning-protection-system-installation" },
      productLinks.lightning,
      articleLinks.lightningFactory
    ],
    faqs: [
      {
        question: "Can you install ESE lightning arrestors in Visakhapatnam?",
        answer:
          "Yes. ESE arrestor selection, accessory supply, mast support, down conductor planning and earthing coordination are available."
      },
      {
        question: "Do you supply lightning protection accessories?",
        answer:
          "Yes. Masts, clamps, test links, down conductors, base plates and earthing materials can be supplied."
      }
    ]
  },
  {
    slug: "earthing-testing-visakhapatnam",
    title: "Earthing Testing in Visakhapatnam",
    metaDescription:
      "Earthing resistance testing and maintenance support in Visakhapatnam for factories, buildings and industrial facilities.",
    service: "Earthing testing",
    location: "Visakhapatnam",
    hero:
      "Earthing testing in Visakhapatnam helps facility teams confirm whether existing earth pits, panels and lightning protection grounding points remain reliable.",
    serviceArea:
      "Testing support is useful for factories, commercial buildings, warehouses, electrical rooms and sites preparing for maintenance, audits or equipment upgrades.",
    industrialFocus: ["Earth resistance checks", "Terminal inspection", "Chamber condition review", "Maintenance recommendations", "Upgrade planning"],
    internalLinks: [
      { label: "Earthing Testing and Maintenance", href: "/services/earthing-testing-maintenance" },
      articleLinks.testing,
      articleLinks.resistance
    ],
    faqs: [
      {
        question: "When should an earth pit be tested?",
        answer:
          "It should be tested during maintenance, after installation, after major electrical changes and when previous readings are old or unavailable."
      },
      {
        question: "Can you suggest improvements after testing?",
        answer:
          "Yes. Recommendations can include maintenance, additional pits, accessory replacement or new earthing work."
      }
    ]
  },
  {
    slug: "electrical-contractor-visakhapatnam",
    title: "Electrical Contractor in Visakhapatnam",
    metaDescription:
      "Industrial electrical contractor in Visakhapatnam for earthing, cable trays, lightning protection and electrical infrastructure support.",
    service: "Industrial electrical contracting",
    location: "Visakhapatnam",
    hero:
      "Vidyut Enterprise supports electrical contracting requirements in Visakhapatnam with an industrial focus on earthing, lightning protection and electrical infrastructure material packages.",
    serviceArea:
      "The service is suited for local factories, warehouses, plants, commercial buildings and infrastructure sites that need practical coordination between supply and execution.",
    industrialFocus: ["Earthing execution", "Cable tray support", "Lightning protection", "BOQ review", "Material coordination"],
    internalLinks: [
      { label: "Industrial Electrical Contracting", href: "/services/industrial-electrical-contracting" },
      productLinks.cableTrays,
      projectLinks.electricalUpgrade
    ],
    faqs: [
      {
        question: "Do you support industrial electrical contracting in Visakhapatnam?",
        answer:
          "Yes. The focus is practical support for earthing, cable routing, lightning protection and related industrial electrical material requirements."
      },
      {
        question: "Can you supply materials along with contracting support?",
        answer:
          "Yes. Material supply and site execution coordination can be combined for smoother project handling."
      }
    ]
  },
  {
    slug: "earthing-installation-andhra-pradesh",
    title: "Earthing Installation in Andhra Pradesh",
    metaDescription:
      "Earthing installation in Andhra Pradesh for industrial plants, commercial buildings, substations and infrastructure projects.",
    service: "Earthing installation",
    location: "Andhra Pradesh",
    hero:
      "Vidyut Enterprise supports earthing installation across Andhra Pradesh for industrial buyers, contractors, consultants and facility teams.",
    serviceArea:
      "From Visakhapatnam to wider Andhra Pradesh project locations, service planning considers site access, soil condition, material dispatch, industrial load and long-term maintenance requirements.",
    industrialFocus: ["Chemical earthing", "Copper bonded earthing", "Factory earthing", "Substation earthing", "Testing and maintenance"],
    internalLinks: [
      { label: "Factory Earthing Solutions", href: "/services/factory-earthing-solutions" },
      { label: "Substation Earthing Solutions", href: "/services/substation-earthing-solutions" },
      productLinks.copperBonded
    ],
    faqs: [
      {
        question: "Do you support earthing projects outside Visakhapatnam?",
        answer:
          "Yes. Vidyut Enterprise supports Andhra Pradesh project requirements based on site details, BOQ, material availability and installation scope."
      },
      {
        question: "Can you supply complete earthing material packages?",
        answer:
          "Yes. Electrodes, strips, chambers, compound, clamps and accessories can be supplied for project requirements."
      }
    ]
  },
  {
    slug: "lightning-protection-andhra-pradesh",
    title: "Lightning Protection in Andhra Pradesh",
    metaDescription:
      "Lightning protection system support in Andhra Pradesh with ESE lightning arrestors, down conductors, masts and earthing.",
    service: "Lightning protection",
    location: "Andhra Pradesh",
    hero:
      "Lightning protection in Andhra Pradesh helps industrial and commercial sites protect exposed structures, electrical systems and rooftop equipment.",
    serviceArea:
      "The service supports factories, warehouses, solar projects, commercial buildings and utility sites across Andhra Pradesh with product supply and installation coordination.",
    industrialFocus: ["ESE lightning arrestors", "Conventional air terminals", "Down conductors", "Earthing coordination", "Maintenance planning"],
    internalLinks: [
      { label: "Lightning Protection System Installation", href: "/services/lightning-protection-system-installation" },
      productLinks.lightning,
      articleLinks.eseGuide
    ],
    faqs: [
      {
        question: "Can lightning protection be planned with earthing?",
        answer:
          "Yes. Lightning protection should be coordinated with suitable earthing to provide a safe discharge path."
      },
      {
        question: "Do you serve industrial sites across Andhra Pradesh?",
        answer:
          "Yes. Project support can be planned based on location, material requirements, site access and installation scope."
      }
    ]
  }
];

export const cityServiceLocations = [
  { slug: "vijayawada", name: "Vijayawada", note: "commercial buildings, warehouses, transport corridors and industrial utility projects around Krishna district" },
  { slug: "kakinada", name: "Kakinada", note: "port-linked industries, process plants, commercial facilities and coastal electrical infrastructure" },
  { slug: "rajahmundry", name: "Rajahmundry", note: "commercial sites, manufacturing units, institutional buildings and Godavari-region utility projects" },
  { slug: "tirupati", name: "Tirupati", note: "commercial buildings, institutional facilities, hospitality sites and industrial electrical maintenance needs" },
  { slug: "guntur", name: "Guntur", note: "warehouses, commercial developments, agro-industrial facilities and electrical upgrade projects" },
  { slug: "nellore", name: "Nellore", note: "industrial estates, commercial buildings, port-influenced projects and utility infrastructure" },
  { slug: "vizianagaram", name: "Vizianagaram", note: "factories, warehouses, commercial sites and North Andhra electrical infrastructure projects" },
  { slug: "srikakulam", name: "Srikakulam", note: "industrial facilities, institutional buildings, coastal sites and maintenance-focused electrical projects" },
  { slug: "kurnool", name: "Kurnool", note: "commercial buildings, industrial utilities, solar-linked sites and regional infrastructure projects" },
  { slug: "anantapur", name: "Anantapur", note: "industrial facilities, solar projects, commercial sites and dry-soil earthing requirements" }
];

const cityServiceTemplates = [
  {
    prefix: "earthing-installation",
    service: "Earthing Installation",
    focus: ["Chemical earthing pits", "Copper bonded rods", "GI and copper strip bonding", "Earth pit chambers", "Resistance testing"],
    baseLink: { label: "Chemical Earthing Installation", href: "/services/chemical-earthing-installation" },
    product: productLinks.chemicalEarthing,
    article: articleLinks.pitGuide
  },
  {
    prefix: "lightning-protection",
    service: "Lightning Protection Installation",
    focus: ["ESE lightning arrestors", "Masts and base plates", "Down conductor routing", "Test links", "Lightning earthing"],
    baseLink: { label: "Lightning Protection System Installation", href: "/services/lightning-protection-system-installation" },
    product: productLinks.lightning,
    article: articleLinks.eseGuide
  },
  {
    prefix: "electrical-contractor",
    service: "Electrical Contractor Services",
    focus: ["Industrial electrical contracting", "Cable tray support", "Switchgear and panel products", "BOQ review", "Material coordination"],
    baseLink: { label: "Industrial Electrical Contracting", href: "/services/industrial-electrical-contracting" },
    product: { label: "Electrical Switchgear Products", href: "/products/electrical-switchgear" },
    article: articleLinks.cableTray
  }
];

export const phaseTwoLocalSeoPages: LocalSeoPage[] = cityServiceLocations.flatMap((city) =>
  cityServiceTemplates.map((template) => ({
    slug: `${template.prefix}-${city.slug}`,
    title: `${template.service} in ${city.name}`,
    metaDescription: `${template.service} in ${city.name} for industrial, commercial and infrastructure projects with Vidyut Enterprise product supply, site support and RFQ guidance.`,
    service: template.service,
    location: city.name,
    hero: `${template.service} in ${city.name} is planned for serious industrial and commercial buyers who need practical support, dependable material supply and clear coordination from enquiry to quotation.`,
    serviceArea: `Vidyut Enterprise supports ${city.name} requirements connected to ${city.note}. The service can be coordinated from Visakhapatnam with BOQ review, product mapping, site visit planning, accessory selection and dispatch support across Andhra Pradesh.`,
    industrialFocus: template.focus,
    internalLinks: [
      template.baseLink,
      template.product,
      template.article,
      { label: `${city.name} Location Hub`, href: `/locations/${city.slug}` },
      { label: "Request Quote", href: "/request-quote" },
      { label: "Contact Vidyut Enterprise", href: "/contact" }
    ],
    faqs: [
      {
        question: `Do you support ${template.service.toLowerCase()} in ${city.name}?`,
        answer: `Yes. Vidyut Enterprise can support ${template.service.toLowerCase()} requirements in ${city.name} based on site details, BOQ, material list, delivery location and project scope.`
      },
      {
        question: `Can you supply products for ${city.name} projects?`,
        answer: "Yes. Relevant earthing, lightning protection, switchgear, cable accessories, copper, GI and cable management products can be supplied as per RFQ."
      },
      {
        question: "What details should I share for a faster quotation?",
        answer: "Share product names, quantities, drawings, old test readings if any, site photos, required delivery location and project timeline."
      }
    ]
  }))
);

export const localSeoPages: LocalSeoPage[] = [...baseLocalSeoPages, ...phaseTwoLocalSeoPages];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "factory-earthing-installation-project",
    title: "Factory Earthing Installation Project",
    metaDescription:
      "Factory earthing installation case study covering panels, machinery grounding, earth pits, copper/GI conductors and testing support.",
    industry: "Manufacturing plant",
    overview:
      "A manufacturing facility needed practical earthing support for panels, machinery and future equipment expansion. The priority was to create accessible earth points, coordinate conductor routing and reduce uncertainty for the maintenance team.",
    scope: ["Site review", "Chemical earthing pits", "Panel earthing", "Machinery bonding", "Testing support"],
    challenges: ["Multiple equipment zones", "Limited pit locations", "Maintenance access needs", "Future machinery additions"],
    solution: ["Mapped panel and machinery points", "Selected suitable electrodes and conductors", "Planned chambers for access", "Coordinated testing and documentation"],
    materials: ["Chemical earthing electrodes", "Copper/GI strips", "Earth pit chambers", "Backfill compound", "Clamps"],
    results: ["Clearer grounding layout", "Better inspection access", "Improved maintenance visibility", "RFQ-ready material records"],
    benefits: ["Safer electrical infrastructure", "Reduced maintenance confusion", "Expandable earthing layout"],
    relatedServices: [
      { label: "Factory Earthing Solutions", href: "/services/factory-earthing-solutions" },
      { label: "Earthing Testing and Maintenance", href: "/services/earthing-testing-maintenance" }
    ],
    relatedProducts: [productLinks.chemicalEarthing, productLinks.chambers],
    relatedArticles: [articleLinks.testing, articleLinks.resistance]
  },
  {
    slug: "chemical-earthing-installation-project",
    title: "Chemical Earthing Installation Project",
    metaDescription:
      "Chemical earthing project case study with electrode installation, backfill compound, chamber placement and testing support.",
    industry: "Commercial and industrial facility",
    overview:
      "A site required chemical earthing pits for dependable grounding around electrical panels and service equipment. The work focused on selecting accessible pit locations and pairing electrodes with suitable backfill and chambers.",
    scope: ["Pit location review", "Chemical electrode installation", "Backfill compound planning", "Terminal connection", "Testing support"],
    challenges: ["Variable soil condition", "Need for neat chamber placement", "Panel proximity", "Long-term maintenance access"],
    solution: ["Reviewed site layout", "Selected practical pit positions", "Installed electrode package", "Protected terminals with chambers"],
    materials: ["Chemical earthing electrode", "Backfill compound", "Copper strip", "Inspection chamber", "Clamps"],
    results: ["Accessible earth points", "Clear product package", "Better testing visibility", "Improved maintenance planning"],
    benefits: ["Reliable grounding", "Cleaner inspection access", "Better RFQ documentation"],
    relatedServices: [
      { label: "Chemical Earthing Installation", href: "/services/chemical-earthing-installation" },
      { label: "Earthing Testing and Maintenance", href: "/services/earthing-testing-maintenance" }
    ],
    relatedProducts: [productLinks.chemicalEarthing, productLinks.chambers],
    relatedArticles: [articleLinks.pitGuide, articleLinks.resistance]
  },
  {
    slug: "lightning-protection-installation-project",
    title: "Lightning Protection Installation Project",
    metaDescription:
      "Lightning protection installation case study with ESE arrestor, mast, down conductor, clamps, test link and earthing.",
    industry: "Commercial rooftop and industrial building",
    overview:
      "A building with exposed rooftop equipment required a planned lightning protection path. The scope included air terminal placement, down conductor routing and coordination with the earthing system.",
    scope: ["Rooftop review", "ESE arrestor selection", "Mast and base plate planning", "Down conductor route", "Earthing tie-in"],
    challenges: ["Roof access", "Exposed equipment", "Conductor route safety", "Test link placement"],
    solution: ["Selected ESE terminal", "Mapped conductor route", "Coordinated clamps and test access", "Connected to suitable earthing"],
    materials: ["ESE lightning arrestor", "GI mast", "Down conductor", "Cable clamps", "Test link", "Earthing electrode"],
    results: ["Defined lightning path", "Improved inspection access", "Clear accessory package", "Better maintenance visibility"],
    benefits: ["Lightning safety planning", "Cleaner installation", "Integrated grounding"],
    relatedServices: [
      { label: "Lightning Protection System Installation", href: "/services/lightning-protection-system-installation" },
      { label: "Substation Earthing Solutions", href: "/services/substation-earthing-solutions" }
    ],
    relatedProducts: [productLinks.lightning, productLinks.copperBonded],
    relatedArticles: [articleLinks.lightningFactory, articleLinks.eseGuide]
  },
  {
    slug: "industrial-electrical-upgrade-project",
    title: "Industrial Electrical Upgrade Project",
    metaDescription:
      "Industrial electrical upgrade case study covering earthing, cable trays, copper/GI materials and site-ready procurement support.",
    industry: "Industrial facility upgrade",
    overview:
      "An industrial facility planned electrical infrastructure upgrades across cable routing and grounding. The main requirement was to align product supply with execution sequencing and documentation needs.",
    scope: ["BOQ review", "Cable tray package", "Earthing material", "Copper/GI conductor supply", "Contractor coordination"],
    challenges: ["Mixed product categories", "Accessory matching", "Dispatch sequence", "Site execution timeline"],
    solution: ["Mapped BOQ to product families", "Grouped accessories with trays and earthing", "Supported quotation-ready procurement", "Coordinated dispatch planning"],
    materials: ["Cable trays", "Bends and reducers", "Copper flats", "GI flats", "Earthing electrodes", "Clamps"],
    results: ["Cleaner procurement", "Reduced accessory gaps", "Improved execution flow", "Better documentation"],
    benefits: ["Faster RFQ processing", "Lower mismatch risk", "Single coordination point"],
    relatedServices: [
      { label: "Industrial Electrical Contracting", href: "/services/industrial-electrical-contracting" },
      { label: "Electrical Consultancy", href: "/services/electrical-consultancy" }
    ],
    relatedProducts: [productLinks.cableTrays, productLinks.copperFlats],
    relatedArticles: [articleLinks.cableTray, articleLinks.testing]
  },
  {
    slug: "substation-earthing-project",
    title: "Substation Earthing Project",
    metaDescription:
      "Substation earthing case study covering grounding grid support, copper/GI strips, electrodes, chambers and testing.",
    industry: "Industrial substation",
    overview:
      "A substation area required grounding support for equipment bonding, conductor routing and accessible earth points. The focus was continuity, material suitability and inspection-ready installation.",
    scope: ["Grid material review", "Equipment bonding", "Earth pit planning", "Copper/GI strip supply", "Testing support"],
    challenges: ["Equipment density", "Grid routing", "Fault current expectations", "Inspection access"],
    solution: ["Reviewed layout", "Mapped conductor route", "Selected strip and electrode package", "Planned chambers and test points"],
    materials: ["Copper flats", "GI flats", "Copper bonded rods", "Chemical electrodes", "Earth pit covers", "Clamps"],
    results: ["Better grid clarity", "Improved maintenance access", "Clear material schedule", "Testing-ready earth points"],
    benefits: ["Substation reliability", "Documentation support", "Long-term maintainability"],
    relatedServices: [
      { label: "Substation Earthing Solutions", href: "/services/substation-earthing-solutions" },
      { label: "Copper Bonded Earthing Solutions", href: "/services/copper-bonded-earthing-solutions" }
    ],
    relatedProducts: [productLinks.copperFlats, productLinks.copperBonded],
    relatedArticles: [articleLinks.resistance, articleLinks.testing]
  },
  {
    slug: "copper-bonded-earthing-project",
    title: "Copper Bonded Earthing Project",
    metaDescription:
      "Copper bonded earthing project case study with rods, couplers, clamps, chambers and testing support.",
    industry: "Industrial grounding network",
    overview:
      "A project required copper bonded rods and accessories for a grounding network connected to electrical equipment and lightning protection points. The goal was a complete rod-and-accessory package.",
    scope: ["Rod selection", "Coupler and clamp mapping", "Pit planning", "Conductor connection", "Testing support"],
    challenges: ["Depth planning", "Accessory compatibility", "Terminal protection", "Future testing access"],
    solution: ["Selected rod package", "Mapped couplers and clamps", "Coordinated chamber protection", "Reviewed connection and testing needs"],
    materials: ["Copper bonded rods", "Couplers", "Rod clamps", "Copper strips", "Earth pit chambers", "Driving accessories"],
    results: ["Complete material package", "Cleaner installation planning", "Improved test access", "Reduced procurement gaps"],
    benefits: ["High conductivity grounding", "Accessory-ready package", "Reliable maintenance path"],
    relatedServices: [
      { label: "Copper Bonded Earthing Solutions", href: "/services/copper-bonded-earthing-solutions" },
      { label: "Chemical Earthing Installation", href: "/services/chemical-earthing-installation" }
    ],
    relatedProducts: [productLinks.copperBonded, productLinks.copperFlats],
    relatedArticles: [articleLinks.resistance, articleLinks.pitGuide]
  }
];

const articleTitles = [
  ["chemical-earthing-vs-gi-earthing", "Chemical Earthing vs GI Earthing", "Earthing", "Compare chemical earthing and GI earthing for industrial sites, maintenance, cost, corrosion and application fit."],
  ["what-is-earthing-resistance", "What Is Earthing Resistance", "Earthing", "Understand earthing resistance, why it matters and what industrial sites should consider during testing."],
  ["how-to-reduce-earthing-resistance", "How To Reduce Earthing Resistance", "Earthing", "Practical ways to reduce earth resistance through pit planning, soil treatment, maintenance and additional earth points."],
  ["earthing-pit-installation-guide", "Earthing Pit Installation Guide", "Earthing", "A practical guide to earthing pit installation for chemical electrodes, copper bonded rods and inspection chambers."],
  ["earthing-maintenance-checklist", "Earthing Maintenance Checklist", "Earthing", "Maintenance checklist for industrial earthing systems, earth pits, terminals, readings and inspection records."],
  ["copper-bonded-earthing-guide", "Copper Bonded Earthing Guide", "Earthing", "Guide to copper bonded earthing rods, couplers, clamps, installation planning and industrial applications."],
  ["earthing-testing-procedure", "Earthing Testing Procedure", "Earthing", "Understand practical earthing testing procedure, resistance readings, inspection points and maintenance decisions."],
  ["industrial-earthing-standards", "Industrial Earthing Standards", "Earthing", "Overview of industrial earthing standards, safety expectations and documentation points for project teams."],
  ["earthing-materials-selection-guide", "Earthing Materials Selection Guide", "Earthing", "How to select earthing electrodes, copper strips, GI strips, chambers, compound and accessories for projects."],
  ["earthing-system-design-basics", "Earthing System Design Basics", "Earthing", "Basic earthing system design considerations for factories, substations, buildings and infrastructure projects."],
  ["types-of-lightning-arresters", "Types of Lightning Arresters", "Lightning Protection", "Explore ESE, conventional and related lightning arrester options for industrial and commercial buildings."],
  ["ese-lightning-arrester-guide", "ESE Lightning Arrester Guide", "Lightning Protection", "Guide to ESE lightning arrestors, mounting accessories, down conductors and earthing coordination."],
  ["lightning-protection-for-factories", "Lightning Protection For Factories", "Lightning Protection", "Lightning protection guidance for factories, exposed roofs, electrical equipment and industrial structures."],
  ["lightning-protection-installation-process", "Lightning Protection Installation Process", "Lightning Protection", "Step-by-step lightning protection installation process from risk review to down conductor and earthing."],
  ["common-lightning-protection-mistakes", "Common Lightning Protection Mistakes", "Lightning Protection", "Common lightning protection mistakes involving poor routing, weak earthing, missing test links and accessory mismatch."],
  ["lightning-protection-maintenance-guide", "Lightning Protection Maintenance Guide", "Lightning Protection", "Maintenance guide for lightning arrestors, masts, clamps, down conductors, test links and earthing points."],
  ["industrial-lightning-safety-guide", "Industrial Lightning Safety Guide", "Lightning Protection", "Industrial lightning safety guide for factories, warehouses, towers, solar plants and commercial sites."],
  ["industrial-electrical-safety-guide", "Industrial Electrical Safety Guide", "Electrical Infrastructure", "Industrial electrical safety guide covering grounding, cable routing, inspection and maintenance practices."],
  ["cable-tray-selection-guide", "Cable Tray Selection Guide", "Electrical Infrastructure", "How to choose cable trays, ladder trays, perforated trays, accessories, supports and finishes for projects."],
  ["electrical-grounding-best-practices", "Electrical Grounding Best Practices", "Electrical Infrastructure", "Grounding best practices for industrial electrical systems, panels, machinery and lightning protection."],
  ["electrical-maintenance-checklist", "Electrical Maintenance Checklist", "Electrical Infrastructure", "Electrical maintenance checklist for grounding, cable trays, panels, terminals and inspection records."],
  ["industrial-electrical-procurement-guide", "Industrial Electrical Procurement Guide", "Electrical Infrastructure", "Procurement guide for industrial electrical material, BOQ review, accessories and supplier coordination."]
] as const;

export const knowledgeArticles: KnowledgeArticle[] = articleTitles.map(([slug, title, cluster, metaDescription]) => {
  const isLightning = cluster === "Lightning Protection";
  const isElectrical = cluster === "Electrical Infrastructure";
  const relatedServices = isLightning
    ? [{ label: "Lightning Protection System Installation", href: "/services/lightning-protection-system-installation" }]
    : isElectrical
      ? [
          { label: "Electrical Consultancy", href: "/services/electrical-consultancy" },
          { label: "Industrial Electrical Contracting", href: "/services/industrial-electrical-contracting" }
        ]
      : [
          { label: "Chemical Earthing Installation", href: "/services/chemical-earthing-installation" },
          { label: "Earthing Testing and Maintenance", href: "/services/earthing-testing-maintenance" }
        ];
  const relatedProducts = isLightning
    ? [productLinks.lightning, productLinks.copperBonded]
    : isElectrical
      ? [productLinks.cableTrays, productLinks.copperFlats]
      : [productLinks.chemicalEarthing, productLinks.copperBonded, productLinks.chambers];

  return {
    slug,
    title,
    cluster,
    metaDescription,
    excerpt: metaDescription,
    date: "2026-06-04",
    points: [
      `${title} should be reviewed with site condition, electrical load, safety expectations and long-term maintenance in mind.`,
      `Industrial buyers should connect the technical decision with product availability, installation access, accessory compatibility and documentation.`,
      `A practical BOQ should include the main material, supporting accessories, inspection needs and any testing or maintenance requirement.`,
      `When the requirement is unclear, a short technical consultation helps avoid undersized material, missing accessories and avoidable site delays.`
    ],
    relatedServices,
    relatedProducts,
    faqs: [
      {
        question: `Who should read this ${cluster.toLowerCase()} guide?`,
        answer:
          "It is useful for contractors, consultants, purchase teams, facility managers and industrial owners planning electrical infrastructure work."
      },
      {
        question: "Can Vidyut Enterprise help with product selection?",
        answer:
          "Yes. Share your BOQ, drawings, site photos or requirement list for practical product and service guidance."
      }
    ]
  };
});

export const allLeadGenRoutes = {
  serviceRoutes: servicePages.map((page) => `/services/${page.slug}`),
  localRoutes: localSeoPages.map((page) => `/${page.slug}`),
  locationHubRoutes: ["/locations", ...cityServiceLocations.map((city) => `/locations/${city.slug}`)],
  projectRoutes: projectCaseStudies.map((page) => `/projects/${page.slug}`),
  articleRoutes: knowledgeArticles.map((page) => `/blog/${page.slug}`)
};

export const commonWhyChooseVidyut = commonWhy;
