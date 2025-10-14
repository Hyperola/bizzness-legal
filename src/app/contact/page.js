'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SEO from '../components/common/SEO';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Contact form submitted:', data);
      
      // Show success message
      setSubmitSuccess(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const offices = [
    {
      city: 'Lagos Headquarters',
      address: '123 Business Road, Ikeja, Lagos',
      icon: (
        <svg className={styles.officeIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      city: 'Abuja Office',
      address: '456 Capital Street, Garki, Abuja',
      icon: (
        <svg className={styles.officeIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      city: 'Ibadan Office',
      address: '789 Heritage Avenue, Ibadan',
      icon: (
        <svg className={styles.officeIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      city: 'Dubai Office',
      address: '321 Global Tower, Dubai UAE',
      icon: (
        <svg className={styles.officeIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const contactMethods = [
    {
      type: 'email',
      value: 'info@bizznesslegal.com',
      href: 'mailto:info@bizznesslegal.com',
      icon: (
        <svg className={styles.methodIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      type: 'whatsapp',
      value: '+234 123 456 7890',
      href: 'https://wa.me/2341234567890',
      icon: (
        <svg className={styles.methodIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Bizzness Legal - Get Expert Business Compliance Help"
        description="Get in touch with Nigeria's leading business compliance experts. Contact us for CAC registration, NAFDAC certification, trademark registration, and more."
        keywords="contact business legal, CAC registration help, NAFDAC certification contact, business compliance Nigeria"
      />
      
      <section className={styles.contact}>
        <div className={styles.sectionContainer}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Get In Touch With Our Experts
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            Ready to start your business journey? Contact us today for professional guidance and seamless compliance solutions.
          </motion.p>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: submitSuccess ? 1 : 0, y: submitSuccess ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className={styles.successMessage}
            style={{ display: submitSuccess ? 'block' : 'none' }}
          >
            <div className={styles.successContent}>
              <span className={styles.successIcon}>✅</span>
              Thank you! Your message has been sent successfully. We will get back to you within 24 hours.
            </div>
          </motion.div>
          
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.contactForm}
            >
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <input 
                      {...register('name', { 
                        required: 'Full name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })} 
                      placeholder="Full Name" 
                      className={styles.input}
                      aria-invalid={errors.name ? "true" : "false"}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <span className={styles.errorMessage}>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <input 
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Please enter a valid email address'
                        }
                      })} 
                      placeholder="Email Address" 
                      className={styles.input}
                      type="email"
                      aria-invalid={errors.email ? "true" : "false"}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <span className={styles.errorMessage}>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className={styles.inputGroup}>
                  <select 
                    {...register('service', { required: 'Please select a service' })} 
                    className={styles.select}
                    aria-invalid={errors.service ? "true" : "false"}
                    disabled={isSubmitting}
                  >
                    <option value="">Select Service Interested In</option>
                    <option value="cac">CAC Business Registration</option>
                    <option value="nafdac">NAFDAC Product Certification</option>
                    <option value="trademark">Trademark Registration</option>
                    <option value="compliance">EFCC & Regulatory Compliance</option>
                    <option value="tax">Tax Registration & Filing</option>
                    <option value="consultation">Business Consultation</option>
                    <option value="other">Other Services</option>
                  </select>
                  {errors.service && (
                    <span className={styles.errorMessage}>
                      {errors.service.message}
                    </span>
                  )}
                </div>
                
                <div className={styles.inputGroup}>
                  <textarea 
                    {...register('message', { 
                      required: 'Please tell us about your business needs',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })} 
                    placeholder="Tell us about your business and how we can help you achieve your goals..."
                    className={styles.textarea}
                    aria-invalid={errors.message ? "true" : "false"}
                    disabled={isSubmitting}
                    rows={6}
                  />
                  {errors.message && (
                    <span className={styles.errorMessage}>
                      {errors.message.message}
                    </span>
                  )}
                </div>
                
                <motion.button 
                  type="submit" 
                  className={`${styles.submitButton} ${isSubmitting ? styles.submitButtonLoading : ''}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner}></span>
                      Sending Your Message...
                    </>
                  ) : (
                    'Send Message & Get Started'
                  )}
                </motion.button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.contactInfo}
            >
              <h3 className={styles.infoTitle}>Our Offices & Contact Info</h3>
              
              <div className={styles.officeList}>
                {offices.map((office, index) => (
                  <div key={index} className={styles.officeItem}>
                    {office.icon}
                    <div className={styles.officeText}>
                      <h4>{office.city}</h4>
                      <p>{office.address}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.contactMethods}>
                <h4 className={styles.businessHoursTitle}>Direct Contact</h4>
                
                <div className={styles.contactMethodsList}>
                  {contactMethods.map((method, index) => (
                    <a 
                      key={index}
                      href={method.href}
                      className={styles.contactMethod}
                      target={method.type === 'whatsapp' ? '_blank' : '_self'}
                      rel={method.type === 'whatsapp' ? 'noopener noreferrer' : ''}
                    >
                      {method.icon}
                      <span className={styles.contactMethodText}>{method.value}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className={styles.businessHours}>
                <h4 className={styles.businessHoursTitle}>Business Hours</h4>
                <p className={styles.businessHoursText}>
                  <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM<br />
                  <strong>Saturday:</strong> 9:00 AM - 2:00 PM<br />
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}