'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './styles/Home.module.css';
import SEO from './components/common/SEO';
import Hero from './components/sections/Hero';
import AboutSummary from './components/sections/AboutSummary';
import ServicesPreview from './components/sections/ServicesPreview';
import Testimonials from './components/sections/Testimonials';
import ContactSection from './components/sections/ContactSection';
import WhatsAppButton from './components/common/WhatsAppButton';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <AboutSummary />
      <ServicesPreview />
      <Testimonials />
      <ContactSection />
      <WhatsAppButton />
    
    </>
  );
}