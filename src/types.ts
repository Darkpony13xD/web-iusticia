import type { LucideIcon } from 'lucide-react';

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    features?: string[];
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    description?: string;
    icon?: string; 
    specialty?: string;
    image?: string;
    bio?: string;
    credentials?: string[];
}

export interface Testimonial {
    id: number;
    content: string;
    author: string;
    role: string;
    initial: string;
}

export interface Stat {
    id: number;
    value: number;
    label: string;
    suffix?: string;
}