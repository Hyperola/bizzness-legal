'use client';
import { motion } from 'framer-motion';
import styles from '../../styles/Home.module.css';

export default function AboutSummary() {
  return (
    <section className={styles.about}>
      <div className={styles.sectionContainer}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.sectionTitle}
        >
          Trusted by Visionary Entrepreneurs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.sectionSubtitle}
        >
          Your success is our business. We have been turning entrepreneurial dreams into compliant, thriving businesses since 2018.
        </motion.p>
        
        <div className={styles.aboutContent}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.aboutImage}
          >
            <img src="/images/about-team.jpg" alt="Bizzness Legal Team" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.aboutText}>
              At <strong>Bizzness Legal</strong>, we are more than just compliance experts - we are your strategic partners in business growth. 
              With offices across Nigeria and international presence, we have mastered the art of navigating complex regulatory landscapes 
              so you can focus on what you do best: building your empire.
            </p>
            
            <p className={styles.aboutText}>
              Our team of certified professionals combines deep regulatory knowledge with cutting-edge technology to deliver 
              faster approvals, comprehensive protection, and peace of mind that your business is built on solid legal foundations.
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2,500+</span>
                <span className={styles.statLabel}>Businesses Registered</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24-48h</span>
                <span className={styles.statLabel}>Average Processing</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>6</span>
                <span className={styles.statLabel}>Office Locations</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.trustBadges}
        >
          <span className={styles.badge}>
            <img src="/shield-check.svg" alt="Verified" className={styles.badgeIcon} />
            Accredited CAC Partner
          </span>
          <span className={styles.badge}>
            <img src="/award.svg" alt="Award" className={styles.badgeIcon} />
            NAFDAC Certified Agents
          </span>
          <span className={styles.badge}>
            <img src="/globe.svg" alt="Global" className={styles.badgeIcon} />
            International Presence
          </span>
          <span className={styles.badge}>
            <img src="/clock.svg" alt="Fast" className={styles.badgeIcon} />
            Fastest Processing
          </span>
        </motion.div>
      </div>
    </section>
  );
}