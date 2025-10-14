'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/common/SEO';
import styles from '../styles/Blog.module.css';

export default function Blog() {
  const posts = [
    { 
      slug: 'cac-business-registration-guide', 
      title: 'Complete Guide to CAC Business Registration in Nigeria', 
      excerpt: 'Learn everything you need to know about registering your business with the Corporate Affairs Commission. Step-by-step process, required documents, and common pitfalls to avoid.',
      category: 'Business Registration',
      readTime: '8 min read',
      date: 'March 15, 2024',
      image: '/images/blog/cac-registration.jpg'
    },
    { 
      slug: 'nafdac-compliance-tips', 
      title: 'NAFDAC Product Registration: A Comprehensive Guide', 
      excerpt: 'Navigate the NAFDAC certification process with ease. Discover expert tips for seamless product registration and compliance with Nigerian regulatory standards.',
      category: 'Product Compliance',
      readTime: '6 min read',
      date: 'March 12, 2024',
      image: '/images/blog/nafdac-compliance.jpg'
    },
    { 
      slug: 'trademark-protection-strategies', 
      title: 'Protecting Your Brand: Trademark Registration Strategies', 
      excerpt: 'Secure your intellectual property with effective trademark registration. Learn how to protect your brand identity and prevent infringement in the Nigerian market.',
      category: 'Intellectual Property',
      readTime: '5 min read',
      date: 'March 8, 2024',
      image: '/images/blog/trademark-protection.jpg'
    },
    { 
      slug: 'efcc-compliance-business', 
      title: 'Understanding EFCC Compliance for Nigerian Businesses', 
      excerpt: 'Stay compliant with EFCC regulations and avoid legal pitfalls. Essential compliance requirements every business owner should know in Nigeria.',
      category: 'Legal Compliance',
      readTime: '7 min read',
      date: 'March 5, 2024',
      image: '/images/blog/efcc-compliance.jpg'
    },
    { 
      slug: 'tax-registration-nigeria', 
      title: 'Tax Registration and Compliance Guide for Startups', 
      excerpt: 'Complete guide to tax registration, filing, and compliance for Nigerian businesses. Understand your tax obligations and avoid penalties.',
      category: 'Tax Compliance',
      readTime: '9 min read',
      date: 'March 1, 2024',
      image: '/images/blog/tax-registration.jpg'
    },
    { 
      slug: 'business-licenses-permits', 
      title: 'Essential Business Licenses and Permits in Nigeria', 
      excerpt: 'Discover the key licenses and permits required to operate legally in Nigeria. Industry-specific requirements and application processes explained.',
      category: 'Business Licensing',
      readTime: '6 min read',
      date: 'February 26, 2024',
      image: '/images/blog/business-licenses.jpg'
    }
  ];

  return (
    <>
      <SEO 
        title="Business Compliance Blog - Expert Insights & Resources | Bizzness Legal"
        description="Stay updated with the latest insights on business compliance, CAC registration, NAFDAC certification, trademark protection, and legal requirements in Nigeria."
        keywords="business compliance blog, CAC registration tips, NAFDAC certification guide, trademark protection Nigeria, business legal advice"
      />
      
      <section className={styles.blog}>
        <div className={styles.sectionContainer}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Business Compliance Insights
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            Expert advice, guides, and resources to help you navigate business compliance and legal requirements in Nigeria
          </motion.p>

          {posts.length > 0 ? (
            <div className={styles.postGrid}>
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={styles.postCard}
                >
                  {post.image && (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className={styles.postImage}
                    />
                  )}
                  
                  <span className={styles.postCategory}>
                    {post.category}
                  </span>
                  
                  <h3 className={styles.postTitle}>
                    <Link href={`/blog/${post.slug}`} className={styles.postTitleLink}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <div className={styles.postMeta}>
                    <span className={styles.postDate}>
                      <svg className={styles.metaIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className={styles.postReadTime}>
                      <svg className={styles.metaIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <p className={styles.postExcerpt}>
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                    Read Full Article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.emptyState}
            >
              <div className={styles.emptyStateIcon}>📝</div>
              <h3 className={styles.emptyStateTitle}>No Articles Yet</h3>
              <p className={styles.emptyStateText}>
                We are working on creating valuable content to help you with business compliance. 
                Check back soon for expert insights and guides.
              </p>
            </motion.div>
          )}

          {/* Newsletter Signup */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.newsletter}
          >
            <h3 className={styles.newsletterTitle}>Stay Updated</h3>
            <p className={styles.newsletterText}>
              Get the latest business compliance insights and regulatory updates delivered to your inbox.
            </p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                Subscribe
              </button>
            </form>
          </motion.section>
        </div>
      </section>
    </>
  );
}