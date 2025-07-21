'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // 👈 Global duration
        // 👈 Animate only once (on scroll in)
    });
  }, []);

  return null;
}
