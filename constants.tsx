
import React from 'react';
import { Droplet, ShieldCheck, Thermometer, Zap, ClipboardCheck, Sparkles } from 'lucide-react';
import { Service, PricingTier, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'clean',
    title: 'Regular Maintenance',
    description: 'Scheduled cleaning, skimming, and vacuuming to keep your pool pristine year-round in the Kingaroy climate.',
    icon: <Sparkles className="w-8 h-8 text-blue-800" />
  },
  {
    id: 'chem',
    title: 'Water Analysis',
    description: 'Advanced digital water testing and precise chemical balancing for safe, healthy swimming.',
    icon: <Droplet className="w-8 h-8 text-blue-800" />
  },
  {
    id: 'green',
    title: 'Algae Treatment',
    description: 'Fast-acting green pool recovery to bring your water back to crystal clear perfection.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-800" />
  },
  {
    id: 'equip',
    title: 'Equipment Repairs',
    description: 'Expert servicing and replacement of pumps, filters, chlorinators, and pool lights.',
    icon: <Zap className="w-8 h-8 text-blue-800" />
  },
  {
    id: 'servicing',
    title: 'Sand & Glass Filter',
    description: 'Specialized media replacement for filters to ensure maximum water clarity and flow.',
    icon: <ClipboardCheck className="w-8 h-8 text-blue-800" />
  },
  {
    id: 'seasonal',
    title: 'Pool Heating',
    description: 'Installation and maintenance of heat pumps and solar blankets to extend your swimming season.',
    icon: <Thermometer className="w-8 h-8 text-blue-800" />
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic',
    name: 'Standard Clean',
    price: '??',
    features: [
      'Chemical test and balance',
      'Skimmer and pump basket clean',
      'Pool floor vacuum',
      'Surface skim',
      'Equipment check-up'
    ]
  },
  {
    id: 'standard',
    name: 'Premium Care',
    price: '??',
    isPopular: true,
    features: [
      'Everything in Standard',
      'Filter backwash or clean',
      'Brooming of walls and steps',
      'Priority scheduling',
      'Detailed service report',
      'Chemicals included (Standard)'
    ]
  },
  {
    id: 'premium',
    name: 'Total Managed',
    price: '??',
    features: [
      'Fortnightly premium visits',
      'Full equipment optimization',
      'Robotic cleaner maintenance',
      'Salt cell acid wash',
      'Emergency response support',
      'Holiday house monitoring'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Robert Henderson",
    location: "Kingaroy Local",
    text: "South Burnett Pool & Spa are the best in the business. Reliable, honest, and my pool has never looked better. Highly recommend their regular maintenance.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "Nanango",
    text: "I called about a green pool and they had it blue again within 48 hours. The communication was excellent and the price was very fair.",
    rating: 5
  },
  {
    id: 3,
    name: "David Miller",
    location: "Kingaroy",
    text: "A truly professional service. They fixed my pump issue when others couldn't. Very knowledgeable about the local water conditions.",
    rating: 5
  }
];
