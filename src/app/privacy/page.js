'use client';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import styles from '../styles/Legal.module.css';

export default function Privacy() {
  return (
    <>
      <SEO />
      <section className={styles.legal}>
        <div className={styles.sectionContainer}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Privacy Policy
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.content}
          >
            <p>We collect only necessary data to provide our services. Your information is secure and not shared with third parties.</p>
            <p>Contact us at info@bizznesslegal.com for details.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}