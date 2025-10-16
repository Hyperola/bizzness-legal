'use client';
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
          Business Compliance 
          <br />
          <span style={{color: '#FBBF24'}}>Done Right</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.heroSubtitle}
        >
          Nigeria&apos;s Most Trusted Business Compliance Partner
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
            <Image 
              src="/file.svg" 
              alt="WhatsApp" 
              width={24} 
              height={24} 
              className={styles.whatsappIcon} 
            />
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
            <Image 
              src="/file.svg" 
              alt="Verified" 
              width={20} 
              height={20} 
              className={styles.trustIcon} 
            />
            <span>98% Success Rate</span>
          </div>
          <div className={styles.trustItem}>
            <Image 
              src="/file.svg" 
              alt="Fast" 
              width={20} 
              height={20} 
              className={styles.trustIcon} 
            />
            <span>Fastest Processing</span>
          </div>
          <div className={styles.trustItem}>
            <Image 
              src="/file.svg" 
              alt="Clients" 
              width={20} 
              height={20} 
              className={styles.trustIcon} 
            />
            <span>2,500+ Happy Clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}