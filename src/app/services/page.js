'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/common/SEO';
import styles from '../styles/Services.module.css';

export default function Services() {
  const services = [
    { title: 'CAC Registration', blurb: 'Register your business quickly with our expert guidance.', icon: '/file.svg' },
    { title: 'NAFDAC Certificate', blurb: 'Seamless product registration for market compliance.', icon: '/globe.svg' },
    { title: 'Trademark Registration', blurb: 'Protect your brand identity with ease.', icon: '/file.svg' },
    { title: 'EFCC Compliance', blurb: 'Ensure your business meets EFCC standards.', icon: '/globe.svg' },
    { title: 'TIN Registration', blurb: 'Hassle-free tax identification number setup.', icon: '/file.svg' },
    { title: 'Business Plan Writing', blurb: 'Craft professional plans to grow your business.', icon: '/globe.svg' },
  ];

  return (
    <>
      <SEO />
      <section className={styles.services}>
        <div className={styles.sectionContainer}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Our Services
          </motion.h1>
          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={styles.serviceCard}
              >
                <img src={service.icon} alt={service.title} className={styles.serviceIcon} />
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceText}>{service.blurb}</p>
                <Link href="/contact" className={styles.serviceLink}>Get Started</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}