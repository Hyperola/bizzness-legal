'use client';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import styles from '../styles/Legal.module.css';

export default function Terms() {
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
            Terms & Conditions
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.content}
          >
            <p>By using Bizzness Legal, you agree to our terms of service. All services are provided as-is, and we are not liable for any damages.</p>
            <p>Contact us at info@bizznesslegal.com for questions.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}