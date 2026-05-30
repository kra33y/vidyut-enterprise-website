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
  url: "https://www.vidyutenterprise.in",
  phone: "+91 89125 60000",
  whatsapp: "918912560000",
  email: "sales@vidyutenterprise.in",
  address:
    "31-33-102/C, Sri Vishnu Plaza, Ground Floor, Opposite Leela Mahal Theater, Dabagardens, Visakhapatnam - 530020",
  gst: "37ADDPM8016E1ZP",
  msme: "UDYAM-AP-10-0002790"
};

export const navItems = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
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
  }
];

export const featuredProducts = [
  {
    title: "Chemical Earthing Electrode",
    category: "Earthing",
    image: "/images/products/chemical-earthing-electrode.png",
    href: "/products/earthing",
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
    href: "/products/earthing",
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
    href: "/products/lightning-protection",
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
    href: "/products/cable-management",
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
    href: "/products/copper-products",
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
    href: "/products/earthing",
    description:
      "FRP, CI and RCC earth pit covers with inspection chambers for safe and accessible earth points.",
    specs: {
      Options: "FRP, CI and RCC",
      Benefits: "Weather resistant and durable",
      Sizes: "Standard and project sizes"
    }
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
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replaceAll(" ", "")}`, icon: Phone },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Address", value: site.address, href: "/contact", icon: MapPin }
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
