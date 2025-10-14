'use client';
import { motion } from 'framer-motion';
import styles from '../../styles/components.module.css';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/2341234567890"
      target="_blank"
      className={styles.whatsappButton}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img src="/file.svg" alt="WhatsApp" className={styles.whatsappIcon} />
    </motion.a>
  );
}