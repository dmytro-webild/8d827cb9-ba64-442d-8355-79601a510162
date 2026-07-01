import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroSplitVerticalMarqueeTall from '@/components/sections/hero/HeroSplitVerticalMarqueeTall';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarqueeTall
      tag="PREMIUM DENTAL AGENCY"
      title="Websites That Build Trust and Convert Patients"
      description="We specialize in high-end web solutions for modern dental practices, combining luxury aesthetics with conversion-focused performance."
      primaryButton={{
        text: "Book a Free Consultation",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Our Portfolio",
        href: "#portfolio",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/nobody-waiting-room-with-front-desk-reception-wall-screen-tv-with-promotional-offer-private-practice-hopital-waiting-area-patients-with-doctor-appointments-modern-healthcare-clinic_482257-46743.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/clinic-oral-hospital-adult-open_1303-340.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-female-dentist-showing-patient-dental-xray-dentistry-concept_169016-67233.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-studio_23-2151320712.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-beautiful-woman-smiling_58466-12186.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/equipment-dental-instruments-dentist-s-office-tools-close-up_8353-1674.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Redefining Dental Branding"
      descriptions={[
        "At DentaPro, we understand that a dental website is the digital face of your clinic. It is where trust is established before the first appointment is ever made.",
        "Our designs prioritize user experience, patient conversion, and medical authority, ensuring your practice stands out in a competitive market.",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesRevealCardsBento
      tag="SERVICES"
      title="Comprehensive Dental Web Solutions"
      description="From custom web design to appointment booking integration, we handle everything your practice needs to grow."
      items={[
        {
          title: "Dental Web Design",
          description: "Custom, luxurious website design tailored for dental practices.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-beautiful-spacious-dental-clinic_8353-9586.jpg",
        },
        {
          title: "Cosmetic Dentistry",
          description: "Websites that highlight your cosmetic transformation services.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/they-always-everything-same-time_329181-10706.jpg",
        },
        {
          title: "SEO Strategy",
          description: "Dominating local search and Google Maps results.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-dentist-wearing-surgical-gloves_107420-74190.jpg",
        },
        {
          title: "Booking Systems",
          description: "Seamless integration with your appointment software.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/orthodontist-using-horizontal-green-screen-tablet-oral-care-dentistry-woman-working-as-dentist-with-chroma-key-isolated-mockup-template-while-looking-teeth-scan_482257-28427.jpg",
        },
        {
          title: "Conversion Rate",
          description: "Turning website visitors into booked patients.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-working-as-dentist-with-green-screen-monitor_482257-21568.jpg",
        },
        {
          title: "Clinic Marketing",
          description: "Patient acquisition strategies that deliver results.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-sitting-dentist-s-office_1157-28571.jpg",
        },
        {
          title: "Full Maintenance",
          description: "Ongoing security, hosting, and performance optimization.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-pretty-female-smiling-pink-background_179666-26612.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="portfolio" data-section="portfolio">
    <SectionErrorBoundary name="portfolio">
          <FeaturesTaggedCards
      tag="LATEST WORK"
      title="Excellence in Dental Design"
      description="Explore our recent projects and witness the DentaPro standard of quality."
      items={[
        {
          tag: "Cosmetic",
          title: "SmileCraft Clinic",
          description: "High-end aesthetic clinic website.",
          imageSrc: "http://img.b2bpic.net/free-photo/homepage-seen-laptop-screen_23-2149416731.jpg",
          primaryButton: {
            text: "View Case Study",
            href: "#",
          },
        },
        {
          tag: "Surgery",
          title: "Maxilla Pro",
          description: "Surgical expertise landing page.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-patient-receiving-dental-treatment_107420-65420.jpg",
          primaryButton: {
            text: "View Case Study",
            href: "#",
          },
        },
        {
          tag: "General",
          title: "Gentle Care Dental",
          description: "Family-focused modern dental hub.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-hotel-lounge-with-cozy-furniture_482257-67425.jpg",
          primaryButton: {
            text: "View Case Study",
            href: "#",
          },
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="PERFORMANCE"
      title="Data-Driven Success"
      description="We don't just design websites; we drive tangible results for your practice."
      textAnimation="slide-up"
      metrics={[
        {
          value: "45%",
          title: "Average Increase in Bookings",
          features: [
            "Patient-focused UX",
            "Faster conversion path",
            "Optimized mobile flow",
          ],
        },
        {
          value: "98%",
          title: "Performance Score",
          features: [
            "Optimized images",
            "Efficient codebase",
            "Fast page loads",
          ],
        },
        {
          value: "120+",
          title: "Successful Launches",
          features: [
            "Dental clinics",
            "Orthodontists",
            "Oral Surgeons",
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeCards
      tag="CLIENT TRUST"
      title="Voices of Excellence"
      description="Hear what successful dental practices have to say about working with us."
      textAnimation="slide-up"
      testimonials={[
        {
          name: "Dr. Sarah Miller",
          role: "Clinic Owner",
          quote: "DentaPro completely transformed our online identity. Our bookings doubled within 3 months.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-woman-leaning-wall_1262-1743.jpg",
        },
        {
          name: "Dr. James Chen",
          role: "Orthodontist",
          quote: "Professional, efficient, and truly understood the luxury aesthetic I needed.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-dentist-standing-clinic_107420-65271.jpg",
        },
        {
          name: "Dr. Elena Rodriguez",
          role: "Cosmetic Specialist",
          quote: "The conversion rate optimization has been a game changer for our new patient influx.",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-woman-leaning-sofa_1262-3274.jpg",
        },
        {
          name: "Dr. Mark Stevens",
          role: "Oral Surgeon",
          quote: "Highest quality work I have seen in this industry. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149230932.jpg",
        },
        {
          name: "Dr. Lisa Wong",
          role: "Pediatric Dentist",
          quote: "Stunning design, seamless process. They made everything so easy for our team.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-adult-woman-leaning-wall_1262-1759.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      textAnimation="slide-up"
      tag="SUPPORT"
      title="Frequently Asked Questions"
      description="Common questions regarding our process and dental web services."
      items={[
        {
          question: "How long does a website build take?",
          answer: "Typically 4-6 weeks depending on project complexity.",
        },
        {
          question: "Do you provide hosting?",
          answer: "Yes, we offer premium, secure, and fast hosting solutions.",
        },
        {
          question: "Do you specialize in Dental SEO?",
          answer: "Absolutely. We dominate local SEO and Google Maps for clinics.",
        },
        {
          question: "Can I integrate my booking software?",
          answer: "We integrate with all major dental software providers.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-female-dentist-showing-patient-dental-xray-dentistry-concept_169016-67117.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="READY TO GROW?"
      textAnimation="slide-up"
      text="Start your journey toward a world-class dental website today. Book a free consultation."
      primaryButton={{
        text: "Book Free Consultation",
        href: "#",
      }}
      secondaryButton={{
        text: "WhatsApp Us",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
