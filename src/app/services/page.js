'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/common/SEO';
import styles from '../styles/Services.module.css';

export default function Services() {
  const services = [
    { 
      title: 'CAC Business Registration', 
      blurb: 'Complete business registration with the Corporate Affairs Commission. Fast-track your company setup with our expert guidance and streamlined process.', 
      icon: '/building.svg',
      features: ['Business Name Registration', 'Company Incorporation', 'Post-Incorporation Compliance', 'Annual Returns Filing']
    },
    { 
      title: 'NAFDAC Product Registration', 
      blurb: 'Seamless product registration and certification with NAFDAC. Get your products market-ready with comprehensive compliance support.', 
      icon: '/certificate.svg',
      features: ['Product Listing', 'Full Certification', 'Renewal Services', 'Regulatory Guidance']
    },
    { 
      title: 'Trademark Registration', 
      blurb: 'Protect your brand identity with comprehensive trademark registration services. Secure your intellectual property rights nationwide.', 
      icon: '/trademark.svg',
      features: ['Trademark Search', 'Application Filing', 'Registration Monitoring', 'Renewal Services']
    },
    { 
      title: 'EFCC & Regulatory Compliance', 
      blurb: 'Ensure your business meets all regulatory requirements with our comprehensive compliance solutions and ongoing support.', 
      icon: '/shield.svg',
      features: ['Compliance Audit', 'Documentation Support', 'Regulatory Updates', 'Ongoing Monitoring']
    },
    { 
      title: 'Tax Registration & Compliance', 
      blurb: 'Complete tax solutions from registration to filing. Stay compliant with federal and state tax authorities.', 
      icon: '/calculator.svg',
      features: ['TIN Registration', 'Tax Clearance', 'Monthly Filing', 'Tax Advisory']
    },
    { 
      title: 'Business Advisory & Planning', 
      blurb: 'Strategic business guidance and professional business plan development to support your growth and investment needs.', 
      icon: '/chart.svg',
      features: ['Business Planning', 'Market Research', 'Financial Projections', 'Growth Strategy']
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your business needs and recommend the best compliance solutions.'
    },
    {
      number: '02',
      title: 'Documentation',
      description: 'We handle all required documentation and paperwork on your behalf.'
    },
    {
      number: '03',
      title: 'Submission',
      description: 'Professional submission to relevant government agencies and regulatory bodies.'
    },
    {
      number: '04',
      title: 'Follow-up',
      description: 'Continuous monitoring and follow-up until successful completion.'
    }
  ];

  return (
    <>
      <SEO 
        title="Business Compliance Services - CAC, NAFDAC, Trademark & More | Bizzness Legal"
        description="Comprehensive business compliance services including CAC registration, NAFDAC certification, trademark protection, tax registration, and regulatory compliance in Nigeria."
        keywords="CAC registration services, NAFDAC certification, trademark registration Nigeria, business compliance services, tax registration Nigeria"
      />
      
      <section className={styles.services}>
        <div className={styles.sectionContainer}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Comprehensive Business Compliance Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            End-to-end compliance services designed to launch, protect, and scale your business with confidence
          </motion.p>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={styles.serviceCard}
              >
                <div className={styles.serviceIcon}>
                  <img src={service.icon} alt={service.title} />
                </div>
                
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                
                <p className={styles.serviceText}>{service.blurb}</p>
                
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.serviceFeature}>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className={styles.serviceLink}>
                  Get Started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.processSection}
          >
            <h2 className={styles.processTitle}>Our Simple 4-Step Process</h2>
            <div className={styles.processSteps}>
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={styles.processStep}
                >
                  <div className={styles.stepNumber}>{step.number}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.ctaSection}
          >
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaText}>
              Let us handle your business compliance needs so you can focus on what you do best - growing your business.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Start Your Compliance Journey
            </Link>
          </motion.section>
        </div>
      </section>
    </>
  );
}