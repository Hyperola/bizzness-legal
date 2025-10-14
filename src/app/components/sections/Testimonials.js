'use client';
import { motion } from 'framer-motion';
import styles from '../../styles/Home.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Bizzness Legal transformed our startup journey! Our CAC registration was completed in 48 hours when other agents promised weeks. Their professionalism is unmatched.',
      author: 'Adeola Johnson',
      company: 'TechSolutions NG',
      avatar: '/images/avatar1.jpg'
    },
    {
      quote: 'The NAFDAC certification process seemed daunting until we found Bizzness Legal. They guided us through every step and delivered faster than expected. Highly recommended!',
      author: 'Chinedu Okoro',
      company: 'PureFoods Ltd',
      avatar: '/images/avatar2.jpg'
    },
    {
      quote: 'As an international investor, I needed reliable local partners. Bizzness Legal exceeded expectations with their comprehensive compliance services across all our Nigerian entities.',
      author: 'Sarah Chen',
      company: 'Global Ventures',
      avatar: '/images/avatar3.jpg'
    },
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.sectionContainer}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{color: 'white'}}
        >
          Success Stories That Inspire
        </motion.h2>
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{color: '#e0f2fe', textAlign: 'center'}}
        >
          Join 2,500+ entrepreneurs who trusted us with their business dreams
        </motion.p>

        <div className={styles.testimonialGrid}>
          {testimonials.map(({ quote, author, company, avatar }, index) => (
            <motion.div
              key={author}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className={styles.testimonialText}>{quote}</p>
              <div className={styles.testimonialAuthor}>
                <img src={avatar} alt={author} className={styles.authorAvatar} />
                <div>
                  <strong>{author}</strong>
                  <div style={{fontSize: '0.875rem', opacity: 0.8}}>{company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          style={{textAlign: 'center', marginTop: '3rem'}}
        >
          <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2rem', fontWeight: 'bold'}}>4.9/5</div>
              <div style={{fontSize: '0.875rem', opacity: 0.8}}>Google Reviews</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2rem', fontWeight: 'bold'}}>98%</div>
              <div style={{fontSize: '0.875rem', opacity: 0.8}}>Success Rate</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2rem', fontWeight: 'bold'}}>24-48h</div>
              <div style={{fontSize: '0.875rem', opacity: 0.8}}>Average Processing</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}