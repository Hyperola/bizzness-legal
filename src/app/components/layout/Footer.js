import Link from 'next/link';
import styles from '../../styles/components.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { href: '/services/cac-registration', label: 'CAC Registration' },
        { href: '/services/nafdac-certification', label: 'NAFDAC Certification' },
        { href: '/services/trademark-registration', label: 'Trademark Registration' },
        { href: '/services/efcc-compliance', label: 'EFCC Compliance' },
        { href: '/services/tax-registration', label: 'Tax Registration' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/team', label: 'Our Team' },
        { href: '/careers', label: 'Careers' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
      ],
    },
  ];

  const socialLinks = [
    { 
      href: 'https://linkedin.com/company/bizzness-legal', 
      icon: '/linkedin-icon.svg', 
      label: 'LinkedIn' 
    },
    { 
      href: 'https://twitter.com/bizznesslegal', 
      icon: '/twitter-icon.svg', 
      label: 'Twitter' 
    },
    { 
      href: 'https://facebook.com/bizznesslegal', 
      icon: '/facebook-icon.svg', 
      label: 'Facebook' 
    },
    { 
      href: 'https://instagram.com/bizznesslegal', 
      icon: '/instagram-icon.svg', 
      label: 'Instagram' 
    },
  ];

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            {/* Brand Section */}
            <div className={styles.footerBrand}>
              <img src="/images/logo-white.png" alt="Bizzness Legal" className={styles.footerLogo} />
              <p className={styles.footerDescription}>
                Nigerias premier business compliance partner, helping entrepreneurs launch and scale 
                their businesses with seamless regulatory compliance and legal protection.
              </p>
              <div className={styles.socialLinks}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <img src={social.icon} alt={social.label} className={styles.socialIcon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className={styles.footerSection}>
              <h3>Services</h3>
              <div className={styles.footerLinks}>
                {footerSections[0].links.map((link) => (
                  <Link key={link.href} href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Section */}
            <div className={styles.footerSection}>
              <h3>Company</h3>
              <div className={styles.footerLinks}>
                {footerSections[1].links.map((link) => (
                  <Link key={link.href} href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className={styles.footerSection}>
              <h3>Contact Info</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Business Road, Ikeja, Lagos</span>
                </div>
                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+234 123 456 7890</span>
                </div>
                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@bizznesslegal.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className={styles.footerBottom}>
            <p className={styles.footerText}>
              © {currentYear} Bizzness Legal. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <Link href="/privacy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.legalLink}>
                Terms of Service
              </Link>
              <Link href="/cookies" className={styles.legalLink}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2341234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        aria-label="Chat with us on WhatsApp"
      >
        <img src="/whatsapp-icon.svg" alt="WhatsApp" className={styles.whatsappIcon} />
      </a>
    </>
  );
}