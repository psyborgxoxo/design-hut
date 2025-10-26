import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Interfaces for type safety
interface FAQ {
  question: string;
  answer: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// FAQ data
const faqs: FAQ[] = [
  {
    question: "How long does a typical interior design project take?",
    answer:
      "Timelines vary by scope. Small residential projects typically span 3-6 months, while larger commercial projects may take 6-12 months. A detailed timeline is provided during consultation.",
  },
  {
    question: "Do you offer sustainable design options?",
    answer:
      "Sustainability is central to our approach. We use eco-friendly materials and energy-efficient designs, tailored to your preferences during consultation.",
  },
  {
    question: "Can you work within my budget?",
    answer:
      "Yes, we customize solutions to align with your budget while upholding exceptional design standards, discussed in detail during our initial meeting.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Based in Bengaluru, we primarily serve Karnataka but are open to projects across India. Contact us to discuss your location.",
  },
];

const DetailedContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      if (heroRef.current) {
        gsap.from(heroRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.2,
        });
      }

      // Form animation
      if (formRef.current) {
        gsap.from(formRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // FAQ animation
      if (faqRef.current) {
        gsap.from(faqRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // FAQ toggle handler
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Form validation
  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?\d{10,12}$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 3000);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Form input change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop')",
        }}
        role="banner"
        aria-label="Contact hero section"
      >
        <div
          className="absolute inset-0 bg-neutral-900/50"
          aria-hidden="true"
        />
        <div ref={heroRef} className="relative text-center text-neutral-50 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-50">
              Connect with Us
            </h1>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-neutral-300">
              Begin your journey to exceptional interiors. Let’s craft spaces that reflect your vision with timeless elegance.
            </p>
            <div className="pt-6">
              <div className="inline-flex items-center space-x-4 text-xs uppercase tracking-widest text-neutral-300">
                <span>Schedule a Consultation</span>
                <div className="w-6 h-px bg-neutral-300" />
                <span>Bespoke Solutions</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-300">
          <div className="flex flex-col items-center space-y-2 animate-pulse">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-6 bg-neutral-300" />
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={formRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-neutral-100 p-6 rounded-lg">
                <h2 className="font-serif text-lg mb-4 text-neutral-900">
                  Our Team
                </h2>
                <div className="space-y-4 text-sm">
                  {[
                    { name: 'Jude Darwin Dsouza', phone: '+91-86188-53106' },
                    { name: 'Jnanendra Gowda', phone: '+91-86188-53106' },
                    { name: 'Sourav Shetty', phone: '+91-63606-42212' },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Phone
                        className="h-4 w-4 mt-1 text-neutral-500"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-medium text-neutral-900">{contact.name}</p>
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-neutral-600 hover:text-neutral-900 transition-colors"
                          aria-label={`Call ${contact.name} at ${contact.phone}`}
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-neutral-100 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Mail
                    className="h-4 w-4 mt-1 text-neutral-500"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-neutral-900">Email</p>
                    <a
                      href="mailto:ddsgroups.in@gmail.com"
                      className="text-neutral-600 hover:text-neutral-900 transition-colors"
                      aria-label="Email us at ddsgroups.in@gmail.com"
                    >
                      ddsgroups.in@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 mt-4">
                  <MapPin
                    className="h-4 w-4 mt-1 text-neutral-500"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-neutral-900">Location</p>
                    <p className="text-neutral-600">Bengaluru, Karnataka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-neutral-100 p-6 rounded-lg space-y-4"
              noValidate
            >
              {submitSuccess && (
                <div
                  className="bg-neutral-200 text-neutral-800 p-3 rounded-md text-sm"
                  role="alert"
                >
                  Message sent successfully.
                </div>
              )}
              {['name', 'email', 'phone', 'message'].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm text-neutral-700 mb-1 capitalize"
                  >
                    {field}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      name={field}
                      placeholder={`Your ${field}...`}
                      value={formData[field as keyof FormData]}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className={`w-full px-3 py-2 border ${formErrors[field as keyof FormErrors]
                          ? 'border-red-500'
                          : 'border-neutral-200'
                        } rounded-md focus:outline-none focus:border-neutral-900 transition-colors text-sm`}
                      aria-invalid={
                        !!formErrors[field as keyof FormErrors] || undefined
                      }
                      aria-describedby={`${field}-error`}
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      id={field}
                      name={field}
                      placeholder={
                        field === 'name'
                          ? 'Your Name'
                          : field === 'email'
                            ? 'your.email@example.com'
                            : '+91 123-456-7890'
                      }
                      value={formData[field as keyof FormData]}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 border ${formErrors[field as keyof FormErrors]
                          ? 'border-red-500'
                          : 'border-neutral-200'
                        } rounded-md focus:outline-none focus:border-neutral-900 transition-colors text-sm`}
                      aria-invalid={
                        !!formErrors[field as keyof FormErrors] || undefined
                      }
                      aria-describedby={`${field}-error`}
                    />
                  )}
                  {formErrors[field as keyof FormErrors] && (
                    <p
                      id={`${field}-error`}
                      className="text-red-500 text-xs mt-1"
                      role="alert"
                    >
                      {formErrors[field as keyof FormErrors]}
                    </p>
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-neutral-900 px-6 py-3 rounded-md flex items-center justify-center transition-colors text-sm uppercase tracking-widest ${isSubmitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:text-neutral-700'
                  }`}
                aria-label="Send message"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin h-4 w-4 mr-2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Sending
                  </span>
                ) : (
                  <>
                    Send Message
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-8 text-neutral-900">
            Frequently Asked Questions
          </h2>
          <div ref={faqRef} className="max-w-2xl mx-auto space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-neutral-50 p-4 rounded-md transition-shadow duration-300 hover:shadow-md"
                role="button"
                tabIndex={0}
                onClick={() => toggleFaq(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFaq(index);
                  }
                }}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-neutral-900">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp
                      className="h-4 w-4 text-neutral-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDown
                      className="h-4 w-4 text-neutral-500"
                      aria-hidden="true"
                    />
                  )}
                </div>
                {openFaq === index && (
                  <p id={`faq-answer-${index}`} className="mt-2 text-neutral-600 text-sm">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailedContactSection;