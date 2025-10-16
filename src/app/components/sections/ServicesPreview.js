'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function ServicesPreview() {
  const services = [
    { 
      title: 'CAC Business Registration', 
      blurb: 'Fast-track your company registration with CAC. Get your business certified and ready to operate in record time with our expert guidance.', 
      icon: '/images/building.svg',
      features: ['24-48h Processing', 'Name Reservation', 'BN & Incorporation']
    },
    { 
      title: 'NAFDAC Product Registration', 
      blurb: 'Navigate NAFDAC compliance seamlessly. We handle everything from product listing to full certification for your goods.', 
      icon: '/images/certificate.svg',
      features: ['Product Listing', 'Full Certification', 'Renewal Services']
    },
    { 
      title: 'Trademark Protection', 
      blurb: 'Secure your brand identity nationwide. Protect your intellectual property with comprehensive trademark registration services.', 
      icon: '/images/trademark.svg',
      features: ['Brand Search', 'Application Filing', 'Monitoring']
    },
    { 
      title: 'EFCC & Regulatory Compliance', 
      blurb: 'Stay compliant with all regulatory bodies. We ensure your business meets all legal requirements for smooth operations.', 
      icon: '/images/shield.svg',
      features: ['Compliance Audit', 'Documentation', 'Ongoing Support']
    },
  ];

  return (
    <section className={styles.services}>
      <div className={styles.sectionContainer}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.sectionTitle}
        >
          Comprehensive Business Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.sectionSubtitle}
        >
          End-to-end compliance services designed to launch, protect, and scale your business with confidence.
        </motion.p>
        
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={styles.serviceCard}
            >
              <div className={styles.serviceIcon}>
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceText}>{service.blurb}</p>
              <ul style={{textAlign: 'left', marginBottom: '1.5rem', color: '#64748b'}}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{marginBottom: '0.5rem', fontSize: '0.875rem'}}>✓ {feature}</li>
                ))}
              </ul>
              <Link href="/services" className={styles.serviceLink}>
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}