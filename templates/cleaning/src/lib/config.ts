import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Heavenly Scent Pros",
    tagline: "Sparkling Clean. Every Single Time.",
    phone: "(480) 807-4306",
    phoneHref: "tel:+14808074306",
    email: "info@heavenlyscentpros.com",
    address: "123 Main St",
    city: "Mesa",
    serviceAreas: ["Mesa", "Chandler", "Gilbert", "Tempe", "Scottsdale", "Phoenix"],
    license: "Licensed & Insured",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "House Cleaning", desc: "Experience a spotless home with our comprehensive house cleaning services.", urgent: false },
    { icon: "sparkles", title: "Window Cleaning", desc: "Enjoy crystal-clear views with our streak-free interior and exterior window cleaning.", urgent: false },
    { icon: "scissors", title: "Carpet Cleaning", desc: "Revitalize your carpets, removing deep-seated dirt and allergens for a fresh look.", urgent: false },
    { icon: "hammer", title: "Tile & Grout Cleaning", desc: "Restore the shine to your tile and grout, eliminating grime and discoloration.", urgent: false },
    { icon: "heart", title: "Rug Cleaning", desc: "Delicate or durable, we expertly clean all types of rugs, preserving their beauty.", urgent: false },
    { icon: "briefcase", title: "Upholstery Cleaning", desc: "Refresh your furniture with our professional upholstery cleaning, extending its life and look.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Mesa, AZ", stars: 5, text: "Heavenly Scent Pros did an incredible job with our house cleaning last week. They were punctual, thorough, and left our home smelling amazing. The team paid attention to every detail, especially in the kitchen and bathrooms. Worth every penny for the peace of mind!" },
    { name: "Mark T.", location: "Chandler, AZ", stars: 5, text: "I hired them for carpet and window cleaning, and I'm genuinely impressed. My carpets look brand new, and the windows are sparkling. The two technicians were professional and efficient, completing the job in under 3 hours. Highly recommend their services!" },
    { name: "Jessica R.", location: "Gilbert, AZ", stars: 5, text: "After a big family gathering, our tile and grout needed serious help. Heavenly Scent Pros transformed our floors! They removed years of built-up grime, and the difference is astounding. The price was fair, and the service was exceptional from start to finish." }
  ],

  trustBadges: [
    "Licensed & Insured", "New Customer Special", "Arizona's Best Cleaning", "5-Star Rated", "Eco-Friendly Products", "Satisfaction Guaranteed"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Homes Cleaned", suffix: "+", decimals: 0 },
    { value: 14, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Flexible Scheduling", desc: "We work around your busy schedule to provide convenient cleaning times." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "No hidden fees, just clear, upfront costs for all our services." },
    { icon: "award", title: "Expert Cleaners", desc: "Our team is highly trained, certified, and passionate about pristine results." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We're not happy until you're absolutely delighted with our cleaning." },
    { icon: "shield-check", title: "Safe & Secure", desc: "Fully insured and bonded for your peace of mind and protection." },
    { icon: "sparkles", title: "Eco-Friendly Products", desc: "We use effective, non-toxic cleaning solutions safe for your family and pets." }
  ],

  formServiceOptions: ["House Cleaning", "Window Cleaning", "Carpet Cleaning", "Tile & Grout Cleaning", "Rug Cleaning", "Upholstery Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!