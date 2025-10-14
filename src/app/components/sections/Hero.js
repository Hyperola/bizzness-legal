'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.heroTitle}
        >
          Your Business Compliance
          <br />
          <span style={{color: '#FBBF24'}}>Done Right</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.heroSubtitle}
        >
          Nigerias Most Trusted Business Compliance Partner
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.heroText}
        >
          From CAC registration to full regulatory compliance - we handle the complex paperwork 
          while you focus on growing your business. Trusted by 2,500+ entrepreneurs nationwide.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.heroButtons}
        >
          <Link href="/services" className={styles.ctaButton}>
            Start Your Business Journey
          </Link>
          <a href="https://wa.me/2341234567890" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
            <img src="/whatsapp-icon.svg" alt="WhatsApp" className={styles.whatsappIcon} />
            Get Instant Consultation
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={styles.trustIndicators}
        >
          <div className={styles.trustItem}>
            <img src="/shield-check.svg" alt="Verified" className={styles.trustIcon} />
            <span>98% Success Rate</span>
          </div>
          <div className={styles.trustItem}>
            <img src="/clock.svg" alt="Fast" className={styles.trustIcon} />
            <span>Fastest Processing</span>
          </div>
          <div className={styles.trustItem}>
            <img src="/users.svg" alt="Clients" className={styles.trustIcon} />
            <span>2,500+ Happy Clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}