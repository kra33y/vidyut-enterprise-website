import {
  BadgeCheck,
  Building2,
  Cable,
  Factory,
  FileDown,
  Globe2,
  Hammer,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sun,
  Zap
} from "lucide-react";

export const site = {
  name: "Vidyut Enterprise",
  legalName: "VIDYUT ENTERPRISE",
  tagline: "Electrical & Earthing Solutions for Industries",
  description:
    "Manufacturer, supplier, stockist, distributor and contractor for industrial electrical products, earthing systems, lightning protection and electrical infrastructure solutions in India.",
  url: "https://vidyutenterprise.in",

  primaryPhone: "+91 76758 73689",
  secondaryPhone: "+91 99594 12942",
  phoneNumbers: ["+91 76758 73689", "+91 99594 12942"],
  phone: "+91 76758 73689 / +91 99594 12942",
  whatsapp: "917675873689",
  email: "vidyute@yahoo.com",

  address:
    "31-33-102/C, Sri Vishnu Plaza, Ground Floor, Opposite Leela Mahal Theater, Dabagardens, Visakhapatnam - 530020",
  mapUrl: "https://maps.app.goo.gl/WXnEXTdtmNbiDTzt6",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.651168248007!2d83.29655331078334!3d17.713931493245905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431bf9596e33%3A0x803401262df57a58!2sVidyut%20Enterprise%20-%20Excellence%20in%20Metals%20%26%20Earthing%20Supplies%2C%20Visakhapatnam!5e0!3m2!1sen!2sin!4v1780381142556!5m2!1sen!2sin",
  gst: "37ADDPM8016E1ZP",
  msme: "UDYAM-AP-10-0002790"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
  { label: "Services", href: "/earthing-installation" },
  { label: "Contact", href: "/contact" }
];

export const categories = [
  {
    slug: "earthing",
    title: "Earthing",
    image: "/images/products/chemical-earthing-electrode.png",
    summary: "Complete earthing material supply and installation support for plants, buildings and infrastructure.",
    products: [
      "Copper Bonded Earthing Electrodes",
      "Chemical Earthing Electrodes",
      "GI Earthing Electrodes",
      "Earthing Plates",
      "Earthing Chambers",
      "Earthing Pit Covers",
      "Backfill Compound",
      "Earthing Accessories"
    ]
  },
  {
    slug: "lightning-protection",
    title: "Lightning Protection",
    image: "/images/products/ese-lightning-arrestor.png",
    summary: "ESE and conventional lightning protection systems with accessories for rooftop and industrial sites.",
    products: [
      "ESE Lightning Arrestors",
      "Conventional Lightning Arrestors",
      "Air Terminals",
      "Down Conductors",
      "Lightning Accessories"
    ]
  },
  {
    slug: "copper-products",
    title: "Copper Products",
    image: "/images/products/copper-flat-bars.png",
    summary: "Copper flats, strips, plates, wires, lugs and flexible jumpers for high conductivity applications.",
    products: [
      "Copper Flats",
      "Copper Strips",
      "Copper Wires",
      "Copper Flexible Jumpers",
      "Copper Braided Strips",
      "Copper Connectors",
      "Copper Lugs"
    ]
  },
  {
    slug: "gi-products",
    title: "GI Products",
    image: "/images/products/gi-flat-bars.png",
    summary: "Galvanized iron flats, strips, wires, plates and accessories for durable electrical infrastructure.",
    products: ["GI Flats", "GI Strips", "GI Wires", "GI Earthing Accessories"]
  },
  {
    slug: "cable-management",
    title: "Cable Management",
    image: "/images/products/cable-trays-accessories.png",
    summary: "Cable trays, raceways and tray accessories for organized industrial cable routing.",
    products: [
      "Cable Trays",
      "Ladder Cable Trays",
      "Perforated Cable Trays",
      "Raceway Systems",
      "Cable Tray Accessories"
    ]
  },
  {
    slug: "electrical-switchgear",
    title: "Electrical Switchgear & Industrial Electrical Products",
    image: "/images/products/cable-trays-accessories.png",
    summary:
      "Supply of industrial electrical products, switchgear, protection devices, cables, cable accessories and electrical infrastructure components for commercial and industrial projects.",
    products: [
      "MCB",
      "MCCB",
      "ACB",
      "VCB",
      "Changeover Switches",
      "Isolators",
      "Contactors",
      "Relays",
      "Control Panels",
      "Distribution Boards",
      "LT Panels",
      "HT Panels",
      "Power Cables",
      "Control Cables",
      "Instrumentation Cables",
      "Cable Glands",
      "Cable Lugs",
      "Cable Jointing Kits",
      "Junction Boxes",
      "Push Buttons",
      "Selector Switches",
      "Indicator Lamps",
      "Industrial Electrical Accessories"
    ]
  }
];

export const featuredProducts = [
  {
    title: "Chemical Earthing Electrode",
    category: "Earthing",
    image: "/images/products/chemical-earthing-electrode.png",
    href: "/products/chemical-earthing-electrode",
    description:
      "Maintenance-friendly electrode system engineered for stable earth resistance and long operating life.",
    specs: {
      Material: "Copper / GI / Stainless options",
      Application: "Industrial, commercial and residential",
      Benefits: "Low resistance, corrosion resistant, easy installation"
    }
  },
  {
    title: "Copper Bonded Earthing Rods",
    category: "Earthing",
    image: "/images/products/copper-bonded-rods.png",
    href: "/products/copper-bonded-earthing-electrode",
    description:
      "High conductivity copper bonded rods with threaded ends and clamps for reliable grounding networks.",
    specs: {
      Finish: "Copper bonded",
      Use: "Grounding grids and lightning protection",
      Sizes: "Project specific lengths available"
    }
  },
  {
    title: "ESE Lightning Arrestor",
    category: "Lightning Protection",
    image: "/images/products/ese-lightning-arrestor.png",
    href: "/products/ese-lightning-arrestor",
    description:
      "Early streamer emission lightning arrestors with mounting accessories and down conductor support.",
    specs: {
      Standard: "IS/IEC aligned system design",
      Construction: "Stainless steel body with copper tip",
      Use: "Factories, towers, buildings and solar plants"
    }
  },
  {
    title: "Cable Trays with Accessories",
    category: "Cable Management",
    image: "/images/products/cable-trays-accessories.png",
    href: "/products/cable-trays",
    description:
      "Perforated, ladder, wire mesh and solid bottom trays with bends, tees, reducers and brackets.",
    specs: {
      Types: "Perforated, ladder, mesh and solid bottom",
      Accessories: "Bends, joints, clamps, rods and brackets",
      Finish: "GI / HDG / project specific"
    }
  },
  {
    title: "Copper Flats and Plates",
    category: "Copper Products",
    image: "/images/products/copper-earthing-plates.png",
    href: "/products/copper-flats",
    description:
      "Copper flats, plates and strips for earthing, busbar, bonding and electrical panel applications.",
    specs: {
      Material: "High conductivity copper",
      Surface: "Smooth bright finish",
      Supply: "Cut sizes and bulk quantities"
    }
  },
  {
    title: "Earth Pit Covers and Chambers",
    category: "Earthing",
    image: "/images/products/earth-pit-covers-chambers.png",
    href: "/products/earth-pit-covers-inspection-chambers",
    description:
      "FRP, CI and RCC earth pit covers with inspection chambers for safe and accessible earth points.",
    specs: {
      Options: "FRP, CI and RCC",
      Benefits: "Weather resistant and durable",
      Sizes: "Standard and project sizes"
    }
  }
];

export const productPages = [
  {
    slug: "chemical-earthing-electrode",
    title: "Chemical Earthing Electrode",
    category: "Earthing",
    image: "/images/products/chemical-earthing-electrode.png",
    summary:
      "Maintenance-friendly chemical earthing electrode for industrial, commercial and infrastructure grounding systems.",
    description:
      "Chemical earthing electrodes help maintain stable earth resistance in varied soil conditions and are commonly used for factories, substations, commercial buildings, telecom sites and solar projects.",
    features: [
      "Low earth resistance performance",
      "Corrosion resistant construction",
      "Maintenance-friendly earthing system",
      "Suitable for industrial and commercial sites",
      "Compatible with backfill compound and standard accessories"
    ],
    specs: {
      Material: "Copper / GI / stainless steel options",
      Application: "Industrial, commercial and residential earthing",
      Accessories: "Terminal, clamp, backfill compound and inspection chamber",
      Supply: "Project quantities and installation support available"
    },
    applications: ["Factories", "Commercial buildings", "Solar plants", "Telecom towers", "Electrical substations"],
    faqs: [
      {
        question: "Where is a chemical earthing electrode used?",
        answer:
          "It is used where stable grounding is required for electrical panels, machinery, lightning protection systems, substations and building electrical infrastructure."
      },
      {
        question: "Do you provide installation support?",
        answer:
          "Yes. Vidyut Enterprise supports product supply, site guidance and earthing installation services based on project requirements."
      }
    ]
  },
  {
    slug: "copper-bonded-earthing-electrode",
    title: "Copper Bonded Earthing Electrode",
    category: "Earthing",
    image: "/images/products/copper-bonded-rods.png",
    summary:
      "Copper bonded rods and electrodes for high-conductivity grounding, lightning protection and earth grid applications.",
    description:
      "Copper bonded earthing electrodes combine copper conductivity with robust rod construction for reliable grounding networks in industrial and infrastructure projects.",
    features: [
      "High conductivity copper bonded finish",
      "Threaded rod options for coupling",
      "Suitable for grounding grids and down conductors",
      "Strong corrosion resistance in many site conditions",
      "Available with clamps and accessories"
    ],
    specs: {
      Finish: "Copper bonded",
      Use: "Grounding grids, earthing pits and lightning protection",
      Accessories: "Couplers, clamps, driving heads and connectors",
      Supply: "Standard and project-specific lengths"
    },
    applications: ["Industrial plants", "Lightning protection systems", "Power projects", "Data centers", "Solar projects"],
    faqs: [
      {
        question: "What is the benefit of copper bonded earthing rods?",
        answer:
          "They provide a conductive copper surface with a strong rod body, making them useful for long-life grounding installations."
      },
      {
        question: "Can rods be supplied with clamps and couplers?",
        answer: "Yes. Rods can be supplied with matching clamps, couplers and installation accessories."
      }
    ]
  },
  {
    slug: "ese-lightning-arrestor",
    title: "ESE Lightning Arrestor",
    category: "Lightning Protection",
    image: "/images/products/ese-lightning-arrestor.png",
    summary:
      "ESE lightning arrestors with mounting accessories for industrial buildings, rooftops, towers and infrastructure sites.",
    description:
      "Early Streamer Emission lightning arrestors are used as part of a complete lightning protection system with air terminals, masts, down conductors, clamps and earthing.",
    features: [
      "Early streamer emission technology",
      "High conductivity terminal options",
      "Stainless steel and copper component options",
      "Mounting accessories available",
      "Useful for wide-area rooftop protection designs"
    ],
    specs: {
      Product: "ESE lightning arrestor",
      Components: "Air terminal, mast, clamps, down conductor and earthing",
      Use: "Factories, towers, commercial buildings and solar plants",
      Support: "Product selection and site installation guidance"
    },
    applications: ["Factories", "Commercial rooftops", "Telecom towers", "Solar plants", "Warehouses"],
    faqs: [
      {
        question: "Is earthing required with a lightning arrestor?",
        answer:
          "Yes. A lightning protection system must be connected to a suitable down conductor and earthing system for safe discharge."
      },
      {
        question: "Do you supply mounting accessories?",
        answer:
          "Yes. Base plates, clamps, masts, down conductors, test links and related accessories can be supplied."
      }
    ]
  },
  {
    slug: "cable-trays",
    title: "Cable Trays with Accessories",
    category: "Cable Management",
    image: "/images/products/cable-trays-accessories.png",
    summary:
      "Perforated, ladder, wire mesh and solid-bottom cable trays with bends, reducers, joints and support accessories.",
    description:
      "Cable tray systems help route and support power, control and instrumentation cables across industrial and commercial sites.",
    features: [
      "Perforated, ladder, mesh and solid-bottom tray options",
      "Bends, tees, reducers and joiner plates available",
      "Support brackets, clamps and threaded rods",
      "GI, HDG and project-specific finish options",
      "Suitable for plant cable routing and maintenance access"
    ],
    specs: {
      Types: "Perforated, ladder, wire mesh and solid bottom",
      Accessories: "Bends, tees, reducers, splice plates, clamps and brackets",
      Finish: "GI / HDG / project-specific",
      Use: "Industrial cable routing and cable management"
    },
    applications: ["Manufacturing plants", "Warehouses", "Commercial buildings", "Power projects", "Industrial panels"],
    faqs: [
      {
        question: "Can cable trays be supplied with accessories?",
        answer:
          "Yes. Straight sections, bends, reducers, joiner plates, brackets, clamps and fastener sets can be supplied together."
      },
      {
        question: "Which cable tray type should I choose?",
        answer:
          "It depends on cable load, ventilation, routing, site environment and support spacing. Share your BOQ or drawing for guidance."
      }
    ]
  },
  {
    slug: "copper-flats",
    title: "Copper Flats and Plates",
    category: "Copper Products",
    image: "/images/products/copper-flat-bars.png",
    summary:
      "Copper flats, plates and strips for earthing, bonding, busbar, panel and high-conductivity electrical applications.",
    description:
      "Copper flats and plates are used where dependable conductivity, bonding and current-carrying capacity are required in electrical infrastructure.",
    features: [
      "High conductivity copper",
      "Bright, smooth finish options",
      "Suitable for earthing and busbar use",
      "Cut-size and bulk supply support",
      "Useful for bonding and panel applications"
    ],
    specs: {
      Material: "Copper",
      Products: "Flats, strips, plates and cut pieces",
      Use: "Earthing, bonding, busbars and electrical panels",
      Supply: "Standard and project-specific sizes"
    },
    applications: ["Electrical panels", "Earthing grids", "Industrial bonding", "Substations", "Fabrication"],
    faqs: [
      {
        question: "Do you supply copper flats in cut sizes?",
        answer: "Yes. Copper flats, plates and strips can be supplied as per RFQ and project size requirements."
      },
      {
        question: "Are copper flats used for earthing?",
        answer:
          "Yes. Copper flats and strips are commonly used for earthing, bonding and electrical continuity applications."
      }
    ]
  },
  {
    slug: "earth-pit-covers-inspection-chambers",
    title: "Earth Pit Covers and Inspection Chambers",
    category: "Earthing",
    image: "/images/products/earth-pit-covers-chambers.png",
    summary:
      "FRP, CI and RCC earth pit covers and inspection chambers for protected, accessible earthing points.",
    description:
      "Earth pit covers and inspection chambers protect earthing terminals while keeping inspection and maintenance access convenient.",
    features: [
      "FRP, cast iron and RCC options",
      "Weather resistant installation",
      "Helps protect earthing terminals",
      "Easy inspection access",
      "Suitable for outdoor and industrial sites"
    ],
    specs: {
      Options: "FRP, CI and RCC",
      Use: "Earthing inspection and terminal protection",
      Sizes: "Standard and project-specific sizes",
      Benefits: "Weather resistant, durable and easy to inspect"
    },
    applications: ["Earthing pits", "Industrial yards", "Commercial buildings", "Substations", "Outdoor electrical sites"],
    faqs: [
      {
        question: "Why use an earth pit inspection chamber?",
        answer:
          "It protects the earthing point while allowing access for testing, inspection and maintenance."
      },
      {
        question: "Which material is available?",
        answer: "FRP, cast iron and RCC options are available depending on site duty and budget."
      }
    ]
  },
  {
    slug: "mcb",
    title: "MCB",
    category: "Electrical Switchgear & Industrial Electrical Products",
    image: "/images/products/cable-trays-accessories.png",
    summary:
      "Miniature circuit breakers for electrical distribution boards, commercial panels, industrial control rooms and final circuit protection.",
    description:
      "MCBs are essential protection devices used to isolate overloaded or short-circuit final circuits in distribution boards, control rooms, office electrical systems, factory utilities and maintenance panels. Vidyut Enterprise supports MCB enquiries where buyers need product selection, pole configuration, rating guidance, quantity planning and compatibility with boards, panels, cables and accessories. For industrial procurement, the MCB should not be treated as a standalone line item. The rating, breaking capacity, curve, phase arrangement, enclosure type, upstream protection and downstream load all influence selection. Contractors and purchase teams can share BOQs, panel schedules, photos or old device details so the correct MCB family, quantity and accessory support can be quoted. MCB supply can also be coordinated with distribution boards, cable lugs, glands, control cables, junction boxes and related industrial electrical products.",
    features: [
      "Final circuit overload and short-circuit protection",
      "Single-pole, double-pole, triple-pole and four-pole requirement support",
      "Useful for distribution boards and control panels",
      "Can be mapped from BOQ, old panel photos or load schedules",
      "Supply support with related cables, lugs, glands and accessories"
    ],
    specs: {
      Product: "Miniature Circuit Breaker",
      Ratings: "Project and BOQ specific ampere ratings",
      Poles: "SP, DP, TP and FP options as required",
      Applications: "DBs, control panels, lighting and small power circuits",
      Support: "BOQ review, quantity supply and accessory coordination"
    },
    applications: ["Distribution boards", "Control panels", "Commercial buildings", "Factory utilities", "Maintenance panels"],
    faqs: [
      {
        question: "Can you supply MCBs for distribution boards?",
        answer: "Yes. MCBs can be supplied for DBs, control panels and commercial or industrial electrical requirements."
      },
      {
        question: "What details are needed for an MCB quote?",
        answer: "Share ampere rating, pole type, quantity, brand preference if any, panel schedule and delivery location."
      }
    ]
  },
  {
    slug: "mccb",
    title: "MCCB",
    category: "Electrical Switchgear & Industrial Electrical Products",
    image: "/images/products/cable-trays-accessories.png",
    summary:
      "Moulded case circuit breakers for industrial feeder protection, LT panels, distribution systems and heavy electrical loads.",
    description:
      "MCCBs are used in industrial and commercial electrical systems where higher current protection, feeder isolation and dependable switching are required. They are commonly specified for LT panels, incomer and outgoing feeders, pump panels, motor feeders, plant utility panels, commercial distribution systems and electrical upgrade projects. Vidyut Enterprise supports MCCB supply by helping buyers align rating, breaking capacity, poles, accessories, enclosure needs and panel application with the actual site requirement. A correct MCCB enquiry should include load details, panel schedule, short-circuit expectation if available, quantity, accessories such as shunt trip or auxiliary contact if needed, and installation environment. MCCBs can be supplied along with cable lugs, power cables, cable glands, distribution boards, control panels and other electrical infrastructure materials.",
    features: [
      "Industrial feeder and panel protection support",
      "Useful for incomer, outgoing and motor feeder applications",
      "Rating and breaking-capacity selection based on BOQ",
      "Accessory support such as auxiliary contact or shunt trip when required",
      "Can be supplied with cables, lugs, glands and panel accessories"
    ],
    specs: {
      Product: "Moulded Case Circuit Breaker",
      Ratings: "As per feeder load and BOQ",
      Poles: "TP and FP commonly requested",
      Applications: "LT panels, feeders, pump panels and distribution systems",
      Support: "Technical selection and procurement coordination"
    },
    applications: ["LT panels", "Industrial feeders", "Pump panels", "Commercial distribution", "Factory electrical rooms"],
    faqs: [
      {
        question: "Can you help select MCCB rating?",
        answer: "Yes. Share load details, panel schedule, pole requirement and BOQ so the suitable rating can be reviewed."
      },
      {
        question: "Do you supply MCCB accessories?",
        answer: "Accessory requirements such as auxiliary contacts or shunt trips can be coordinated based on the project specification."
      }
    ]
  },
  {
    slug: "power-cables",
    title: "Power Cables",
    category: "Electrical Switchgear & Industrial Electrical Products",
    image: "/images/products/cable-trays-accessories.png",
    summary:
      "Power cables for industrial electrical distribution, panels, machinery, utility systems and commercial infrastructure projects.",
    description:
      "Power cables are a core procurement item for factories, substations, commercial buildings, warehouses, utility rooms, solar projects and industrial electrical upgrades. Cable selection depends on voltage grade, conductor material, insulation, armour, core count, current requirement, routing method, environmental exposure, gland and lug compatibility and installation distance. Vidyut Enterprise supports power cable enquiries by helping buyers convert BOQ or site requirements into a supply-ready list. Power cable supply can be coordinated with cable glands, cable lugs, cable trays, junction boxes, panels, earthing material and installation accessories so procurement teams avoid missing connected items. Contractors can share drawings, cable schedules, route length, cable tray requirements and panel details for faster quotation support.",
    features: [
      "Supply support for industrial and commercial power distribution",
      "Cable schedule and BOQ-based quantity planning",
      "Coordination with glands, lugs, trays and panels",
      "Suitable for factories, substations and commercial buildings",
      "Useful for new projects, upgrades and maintenance replacement"
    ],
    specs: {
      Product: "Power Cable",
      Voltage: "As per project and BOQ",
      Conductor: "Copper or aluminium as specified",
      Accessories: "Cable glands, lugs, trays and jointing kits",
      Support: "Cable schedule review and RFQ coordination"
    },
    applications: ["LT distribution", "Panels", "Machinery feeders", "Commercial buildings", "Industrial upgrades"],
    faqs: [
      {
        question: "What details are needed for power cable supply?",
        answer: "Share cable size, core count, conductor material, voltage grade, quantity or route length and delivery location."
      },
      {
        question: "Can cables be supplied with glands and lugs?",
        answer: "Yes. Matching cable glands, cable lugs and related accessories can be included in the quotation."
      }
    ]
  },
  {
    slug: "cable-glands",
    title: "Cable Glands",
    category: "Electrical Switchgear & Industrial Electrical Products",
    image: "/images/products/cable-trays-accessories.png",
    summary:
      "Cable glands for industrial cable termination, panel entry, junction boxes, distribution boards and electrical equipment protection.",
    description:
      "Cable glands are small but critical electrical accessories used to secure cable entry, protect terminations, maintain enclosure integrity and support safe installation in panels, junction boxes, machines and distribution systems. In industrial procurement, cable glands must match cable size, armour type, enclosure requirement, installation environment and gland plate arrangement. Vidyut Enterprise supports cable gland enquiries as part of power cable, control cable, panel and junction box supply packages. Buyers can share cable size, cable type, armour detail, quantity, panel or enclosure information and site environment. Cable glands can be supplied with cable lugs, cables, junction boxes, control panels and other termination accessories for cleaner project procurement.",
    features: [
      "Cable termination and panel entry support",
      "Useful for power, control and instrumentation cables",
      "Can be matched to cable size and armour requirement",
      "Supports junction boxes, DBs, LT panels and equipment enclosures",
      "Supply coordination with cable lugs and cable schedules"
    ],
    specs: {
      Product: "Cable Gland",
      Types: "Project-specific gland type and size",
      Use: "Cable entry, termination and enclosure support",
      Accessories: "Lugs, cables, junction boxes and panels",
      Support: "Cable-size based gland mapping"
    },
    applications: ["Control panels", "Distribution boards", "Junction boxes", "Industrial machines", "Cable terminations"],
    faqs: [
      {
        question: "How do I select cable gland size?",
        answer: "Cable gland size depends on cable size, cable type, armour detail and enclosure entry requirement."
      },
      {
        question: "Can you supply glands with lugs?",
        answer: "Yes. Cable glands and cable lugs can be quoted together for termination packages."
      }
    ]
  },
  {
    slug: "cable-lugs",
    title: "Cable Lugs",
    category: "Electrical Switchgear & Industrial Electrical Products",
    image: "/images/products/cable-trays-accessories.png",
    summary:
      "Cable lugs for copper and aluminium cable termination in panels, distribution boards, machinery and industrial electrical systems.",
    description:
      "Cable lugs are used to create dependable electrical terminations between cables and equipment terminals, busbars, panels, distribution boards and machinery. Proper lug selection depends on conductor material, cable size, termination hole size, current requirement, crimping method and installation environment. Vidyut Enterprise supports cable lug supply for industrial electrical projects, maintenance teams, panel builders and contractors. Cable lugs can be coordinated with power cables, control cables, cable glands, panels, switchgear and earthing conductors. A strong RFQ should include cable size, copper or aluminium conductor, lug type, hole size if known, quantity and delivery location. This prevents mismatched accessories and reduces termination delays at site.",
    features: [
      "Copper and aluminium cable termination support",
      "Useful for panels, DBs, busbars and equipment terminals",
      "Can be mapped to cable size and hole requirement",
      "Supports maintenance, panel building and project supply",
      "Can be quoted with cables, glands and control panels"
    ],
    specs: {
      Product: "Cable Lug",
      Material: "Copper or aluminium as specified",
      Sizes: "As per cable schedule and BOQ",
      Use: "Electrical cable termination",
      Support: "Cable-size and quantity mapping"
    },
    applications: ["Panel terminations", "Distribution boards", "Busbars", "Industrial equipment", "Maintenance replacement"],
    faqs: [
      {
        question: "What details are needed for cable lug supply?",
        answer: "Share cable size, conductor material, hole size if available, lug type and quantity."
      },
      {
        question: "Can lugs be supplied with power cables?",
        answer: "Yes. Cable lugs, glands and cables can be supplied together for project requirements."
      }
    ]
  },
  {
    slug: "control-panels",
    title: "Control Panels",
    category: "Electrical Switchgear & Industrial Electrical Products",
    image: "/images/products/cable-trays-accessories.png",
    summary:
      "Control panel supply and support for industrial automation, machinery control, pump systems, utilities and electrical infrastructure projects.",
    description:
      "Control panels bring together switchgear, contactors, relays, push buttons, selector switches, indicator lamps, control wiring, protection devices and enclosure planning for machinery and industrial utilities. Vidyut Enterprise supports control panel related enquiries where buyers need component supply, accessory coordination, BOQ support or project procurement for electrical infrastructure. Control panel requirements should be reviewed with load type, control function, number of feeders, protection device needs, cable entry, enclosure location, maintenance access and related field devices in mind. Supply support can include MCBs, MCCBs, contactors, relays, push buttons, selector switches, indicator lamps, cable glands, cable lugs, control cables and junction boxes. This helps contractors and purchase teams create a complete list instead of ordering partial components.",
    features: [
      "Industrial panel component supply support",
      "MCB, MCCB, contactor, relay and control accessory coordination",
      "Useful for machinery, pumps, utilities and factory controls",
      "BOQ and component-list review support",
      "Can be supplied with control cables, glands, lugs and junction boxes"
    ],
    specs: {
      Product: "Control Panel Components and Support",
      Components: "Switchgear, relays, contactors, push buttons and indicators",
      Cables: "Control cables and termination accessories",
      Use: "Industrial automation, machinery and utility controls",
      Support: "BOQ review and product coordination"
    },
    applications: ["Machinery control", "Pump panels", "Factory utilities", "Automation panels", "Electrical maintenance"],
    faqs: [
      {
        question: "Do you supply control panel components?",
        answer: "Yes. Switchgear, relays, contactors, indicators, push buttons, cables, glands and lugs can be coordinated."
      },
      {
        question: "Can you review a control panel BOQ?",
        answer: "Yes. Share the BOQ, component list, panel schedule or old panel photos for product mapping."
      }
    ]
  }
];

export const industries = [
  { title: "Manufacturing Plants", icon: Factory },
  { title: "Power Plants", icon: Zap },
  { title: "Solar Projects", icon: Sun },
  { title: "Telecom Infrastructure", icon: Globe2 },
  { title: "Data Centers", icon: ShieldCheck },
  { title: "Commercial Buildings", icon: Building2 },
  { title: "Warehouses", icon: Hammer },
  { title: "Airports and Railways", icon: Landmark }
];

export const whyChooseUs = [
  "Manufacturer, supplier, stockist, distributor and contractor capability under one roof.",
  "Industrial product range across earthing, lightning protection, copper, GI and cable management.",
  "Technical product guidance for project selection, sizing and site execution.",
  "Local support from Visakhapatnam with India-wide industrial supply readiness.",
  "GST and MSME registered business with documentation-friendly project handling."
];

export const downloads = [
  {
    title: "Earthing Product Catalogue",
    href: "/downloads/vidyut-earthing-catalog.pdf",
    icon: FileDown,
    description: "Earthing electrodes, chambers, pit covers, backfill compound and accessories."
  },
  {
    title: "Electrical Product Catalogue",
    href: "/downloads/vidyut-electrical-catalog.pdf",
    icon: FileDown,
    description: "Electrical infrastructure product range for industrial procurement teams."
  }
];

export const contactMethods = [
  { label: "Phone", value: site.phone, href: `tel:${site.primaryPhone.replaceAll(" ", "")}`, icon: Phone },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Address", value: site.address, href: site.mapUrl, icon: MapPin }
];

export const galleryImages = [
  "/images/products/aluminium-wire-coil.png",
  "/images/products/gi-flat-bars.png",
  "/images/products/copper-flat-bars.png",
  "/images/products/copper-wire-coil.png",
  "/images/products/cable-trays-accessories.png",
  "/images/products/cast-iron-earthing-pipes.png",
  "/images/products/chemical-earthing-electrode.png",
  "/images/products/copper-braided-jumpers.png",
  "/images/products/copper-lightning-arrestor.png",
  "/images/products/ese-lightning-arrestor.png",
  "/images/products/copper-earthing-plates.png",
  "/images/products/gi-earthing-plates.png",
  "/images/products/earth-pit-covers-chambers.png",
  "/images/products/backfill-compound.png",
  "/images/products/copper-plate-earthing-assembly.png",
  "/images/products/gi-pipe-electrode.png",
  "/images/products/copper-bonded-rods.png"
];

export const blogPosts = [
  {
    title: "How to choose the right earthing electrode for industrial projects",
    excerpt:
      "A practical guide to soil conditions, corrosion risk, resistance targets and maintenance expectations.",
    date: "2026-05-30"
  },
  {
    title: "ESE vs conventional lightning protection systems",
    excerpt:
      "Understand where ESE arrestors, air terminals, down conductors and accessories fit in site protection.",
    date: "2026-05-30"
  },
  {
    title: "Why cable tray accessories matter in plant electrical safety",
    excerpt:
      "Bends, reducers, supports and continuity plates can decide the long-term reliability of cable routes.",
    date: "2026-05-30"
  }
];

export const trustItems = [
  { title: "GST Registered", value: site.gst, icon: BadgeCheck },
  { title: "MSME Registered", value: site.msme, icon: ShieldCheck },
  { title: "Industrial Focus", value: "Earthing, lightning protection and electrical infrastructure", icon: Zap }
];
