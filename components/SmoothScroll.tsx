"use client"
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function SmoothScroll() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);

  return null;
}
