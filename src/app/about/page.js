'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/common/SEO';
import styles from '../styles/About.module.css';

export default function About() {
  const values = [
    {
      title: 'Expertise & Excellence',
      description: 'Our team comprises certified professionals with deep regulatory knowledge and years of experience in business compliance.',
      icon: '/award.svg'
    },
    {
      title: 'Client Success Focus',
      description: 'We measure our success by your success. Your business growth and compliance are our top priorities.',
      icon: '/users.svg'
    },
    {
      title: 'Innovation & Efficiency',
      description: 'Leveraging technology to streamline processes and deliver faster, more efficient compliance solutions.',
      icon: '/lightning.svg'
    },
    {
      title: 'Integrity & Trust',
      description: 'Building lasting relationships based on transparency, honesty, and reliable service delivery.',
      icon: '/shield-check.svg'
    }
  ];

  const teamMembers = [
    {
      name: 'Adebayo Johnson',
      role: 'Founder & CEO',
      bio: '15+ years in corporate law and business compliance. Former legal advisor to multinational corporations.',
      image: '/images/team/adebayo.jpg'
    },
    {
      name: 'Chinwe Okoro',
      role: 'Head of Compliance',
      bio: 'Regulatory expert specializing in CAC and NAFDAC compliance with 12 years of experience.',
      image: '/images/team/chinwe.jpg'
    },
    {
      name: 'Emeka Nwosu',
      role: 'Legal Director',
      bio: 'Corporate lawyer with expertise in intellectual property and trademark registration.',
      image: '/images/team/emeka.jpg'
    }
  ];

  return (
    <>
      <SEO 
        title="About Bizzness Legal - Nigeria's Premier Business Compliance Partner"
        description="Learn about Bizzness Legal - Nigeria's trusted business compliance experts. Our mission, values, and team dedicated to helping businesses thrive through seamless regulatory compliance."
        keywords="about Bizzness Legal, business compliance Nigeria, CAC registration experts, NAFDAC certification, our team"
      />
      
      <section className={styles.about}>
        <div className={styles.sectionContainer}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Empowering Nigerian Businesses Through Expert Compliance
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            Your trusted partner for seamless business registration and regulatory compliance since 2018
          </motion.p>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.heroSection}
          >
            <div className={styles.heroContent}>
              <p className={styles.heroText}>
                <strong>Bizzness Legal</strong> is Nigeria premier business compliance service provider, 
                dedicated to simplifying the complex landscape of corporate registration and regulatory compliance. 
                Founded with a vision to empower entrepreneurs, we combine deep expertise with a client-first approach 
                to help businesses launch, grow, and thrive in the Nigerian market.
              </p>
              
              <p className={styles.heroText}>
                With offices across major Nigerian cities and international presence, we have successfully helped 
                over 2,500 businesses navigate CAC registration, NAFDAC certification, trademark protection, 
                and comprehensive regulatory compliance.
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
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={styles.heroImage}
            >
              <img src="/images/about-team.jpg" alt="Bizzness Legal Team" />
            </motion.div>
          </motion.div>

          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.missionSection}
          >
            <h2 className={styles.missionTitle}>Our Mission</h2>
            <p className={styles.missionText}>
              To democratize access to professional business compliance services, enabling entrepreneurs 
              to focus on their core business while we handle the complex regulatory requirements. We believe 
              that every business deserves expert guidance and seamless compliance solutions to achieve their 
              full potential in the Nigerian market.
            </p>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.missionTitle}>Our Core Values</h2>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={styles.valueCard}
                >
                  <div className={styles.valueIcon}>
                    <img src={value.icon} alt={value.title} />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueText}>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.teamSection}
          >
            <h2 className={styles.teamTitle}>Meet Our Leadership Team</h2>
            <div className={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={styles.teamMember}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={styles.memberImage}
                  />
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.badges}
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

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.ctaSection}
          >
            <h2 className={styles.ctaTitle}>Ready to Start Your Business Journey?</h2>
            <p className={styles.ctaText}>
              Join thousands of successful entrepreneurs who trust Bizzness Legal for their compliance needs. 
              Let us build your business on a solid legal foundation.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Get Started Today
            </Link>
          </motion.section>
        </div>
      </section>
    </>
  );
}