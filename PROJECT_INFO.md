# Infothon 7.0 — Complete Project Documentation

This document provides a comprehensive technical and functional overview of the **Infothon 7.0** web application. It is structured to serve as a context reference document for AI models (GPTs), developers, and stakeholders.

---

## 1. Project Overview

**Infothon 7.0** is the official web application for the 7th edition of **Infothon**, the flagship 10-hour national-level hackathon organized by the **Department of Information Science & Engineering (ISE)** at **Vidyavardhaka College of Engineering (VVCE)**, Mysuru, Karnataka, India.

- **Event Timeline**:
  - **9th October — 5:00 PM**: Registration Closes
  - **10th October — 1:00 PM**: PPT Submission Deadline
  - **14th October**: Shortlist Announcement
  - **17th October**: Payment Deadline for Shortlisted Teams
  - **24th October**: Offline Hackathon
- **Prize Pool**: ₹40,000
- **Venue**: VVCE Sports Complex, Mysuru
- **Primary Goal**: Showcase event details, problem statements, shortlisted teams (Coming Soon), previous edition contributors, sponsorship tiers, registration portal (Official Unstop Registration), and contact information.
- **Design Persona**: Futuristic dark-themed cyberpunk UI with **Parrot Green / Neon Green (`#7CFF00` / `hsl(91 100% 50%)`)** accents, glassmorphism containers, and interactive 3D scroll animations.

---

## 2. Tech Stack & Dependencies

### Core Framework & Build Tools
- **Framework**: React 18 (TypeScript `.tsx` / JavaScript `.jsx`)
- **Build Tool**: Vite (with `@vitejs/plugin-react-swc`)
- **Language**: TypeScript 5.8 & JavaScript ES6+
- **Styling**: Tailwind CSS v3.4, PostCSS, Autoprefixer, Custom CSS Variables & Utilities

### Component & UI Libraries
- **UI Framework**: shadcn/ui built on Radix UI primitives (`@radix-ui/react-*` components including Dialog, Popover, Tooltip, Toast, Dropdown Menu, Accordion, etc.)
- **Animations & Motion**: Framer Motion 12 (`framer-motion`)
- **Icons**: Lucide React (`lucide-react`)
- **Data Fetching / State**: TanStack React Query v5 (`@tanstack/react-query`)
- **Form Management & Validation**: React Hook Form (`react-hook-form`), Zod (`zod`), `@hookform/resolvers`
- **Toast Notifications**: Sonner (`sonner`) & Radix Toast (`@radix-ui/react-toast`)
- **Charts / Visuals**: Recharts (`recharts`), Embla Carousel (`embla-carousel-react`)
- **Utility Libraries**: `clsx`, `tailwind-merge`, `class-variance-authority`, `date-fns`

---

## 3. Architecture & Project Structure

```
Infothon_7.0/
├── public/                     # Static assets (Logos, gallery images, sponsors graphic)
│   ├── 23.png                  # ISE Department Logo
│   ├── 34.png                  # VVCE Institution Logo
│   ├── 677.png                 # Sponsors Banner Graphic
│   └── gallery/                # Gallery photos from previous Infothon editions
├── src/
│   ├── components/             # Reusable UI & Layout Components
│   │   ├── ui/                 # Atomic shadcn/ui components (button, dialog, input, etc.)
│   │   ├── BackgroundEffects.tsx # Dynamic background glow effects
│   │   ├── Footer.tsx          # Global site footer with contact links & social channels
│   │   ├── HeroScene.tsx       # 3D interactive cube animated on scroll using Framer Motion (showing 7.0)
│   │   ├── Navbar.tsx          # Fixed glassmorphism navigation header (responsive)
│   │   ├── NavLink.tsx         # Navigation item helper component
│   │   └── SectionHeading.tsx  # Styled section title & subtitle block
│   ├── hooks/                  # Custom React Hooks
│   │   ├── use-mobile.tsx      # Breakpoint detector hook
│   │   └── use-toast.ts        # Toast notification system hook
│   ├── lib/                    # Helper Functions
│   │   └── utils.ts            # `cn()` classnames utility (clsx + tailwind-merge)
│   ├── pages/                  # Application Routes/Pages
│   │   ├── Index.tsx           # Home / Landing Page (`/`)
│   │   ├── Problems.tsx        # Problem Statements Repository with modal details (`/problems`)
│   │   ├── Results.jsx         # Shortlisted Teams Coming Soon Page (`/results`)
│   │   ├── About.tsx           # Event Legacy, Team Members & Image Gallery (`/about`)
│   │   ├── Contributors.tsx    # Previous Infothon Edition Contributors 1.0–6.0 (`/contributors`)
│   │   ├── Sponsors.tsx        # Sponsor Benefits, Tiers & Inquiry Form (`/sponsors`)
│   │   ├── Contact.tsx         # Infothon 7.0 Contact Info, Map, Socials (`/contact`)
│   │   ├── Register.tsx        # Official Unstop Registration Page (`/register`)
│   │   └── NotFound.tsx       # 404 Fallback Page (`*`)
│   ├── App.css                 # Application-specific CSS
│   ├── App.tsx                 # Root Router & Query Provider setup
│   ├── index.css               # Design system, CSS variables (Parrot Green), glassmorphism & neon utilities
│   ├── main.tsx                # Application Entry Point
│   └── vite-env.d.ts           # Vite TypeScript declaration file
├── index.html                  # Main HTML template with Google Fonts (Space Grotesk & Orbitron)
├── package.json                # Project dependencies & npm scripts
├── tailwind.config.ts          # Tailwind configuration (custom colors, fonts, keyframes)
├── tsconfig.json               # TypeScript base config
├── vite.config.ts              # Vite configuration with path aliases (`@/`)
└── vercel.json                 # Vercel deployment configuration
```

---

## 4. Navigation & Routes

The application uses **React Router DOM v6** for client-side routing. Below are all active routes:

| Path | Component | Purpose / Description |
| :--- | :--- | :--- |
| `/` | `src/pages/Index.tsx` | Landing page featuring Hero 3D scene, timeline, overview, institution profile, and sponsor banner. |
| `/problems` | `src/pages/Problems.tsx` | Interactive list of hackathon problem statements under 2 main themes with modal popup view. |
| `/about` | `src/pages/About.tsx` | Information about Infothon's 7th Edition legacy, committee team members categorized by role, and past event gallery. |
| `/contributors` | `src/pages/Contributors.tsx` | Previous edition contributors & coordinators for Infothon 1.0 through 6.0. |
| `/sponsors` | `src/pages/Sponsors.tsx` | Sponsorship tiers (Platinum, Gold, Silver), value proposition, and sponsor contact inquiry form. |
| `/contact` | `src/pages/Contact.tsx` | Infothon 7.0 contacts (Sukrutha K, Vasudev S, Ajay Kumar R, Abhinav C), email, location map, socials. |
| `/register` | `src/pages/Register.tsx` | Official Unstop Registration page. |
| `/results` | `src/pages/Results.jsx` | Shortlisted Teams Coming Soon page. |
| `*` | `src/pages/NotFound.tsx` | 404 Page for undefined routes. |

---

## 5. Key Features & Content Breakdown

### 5.1 Landing Page (`Index.tsx`)
- **Hero 3D Scene (`HeroScene.tsx`)**: Interactive 3D cube displaying `7.0`.
- **Event Overview**: 10-hour hackathon highlights, open participation criteria, ₹40,000 prize pool.
- **Event Timeline**:
  - **9th October — 5:00 PM**: Registration Closes
  - **10th October — 1:00 PM**: PPT Submission Deadline
  - **14th October**: Shortlist Announcement
  - **17th October**: Payment Deadline for Shortlisted Teams
  - **24th October**: Offline Hackathon
- **About Institutions**: Highlight cards for **Vidyavardhaka College of Engineering (VVCE)** and **Department of Information Science & Engineering (ISE)**.

### 5.2 Problem Statements (`Problems.tsx`)
Contains 54 problem statements split across two primary hackathon themes (Agentic AI & SDG).

### 5.3 Contributors Page (`Contributors.tsx`)
Lists coordinators and contributors from previous editions:
- **Infothon 1.0**: Sumukh M G, C Sai Kartheek, Ullas U, H A Vishwadatta
- **Infothon 2.0**: Pranava thejaswi N M, Shashanka R, S Karthik
- **Infothon 3.0**: Not found
- **Infothon 4.0**: Aishwarya Deepak Prajwal GS, Amit D Jain, Priyadarshani Sarja
- **Infothon 5.0**: Amit D Jain, Syed Nawaz, Sanjana R, Priyadarshani Sarja
- **Infothon 6.0**: Sanjana R, Priyadarshani Sarja, Akash Valmiki

### 5.4 Infothon 7.0 Contacts (`Contact.tsx`)
- **Sukrutha K**: `6361203438`
- **Vasudev S**: `8123099737`
- **Ajay Kumar R**: `8660164565`
- **Abhinav C**: `9481138912`
- **Email**: `infothon@vvce.ac.in`

---

## 6. Developer & Execution Guide

```bash
npm install      # Install dependencies
npm run dev      # Start Vite development server
npm run build    # Build production bundle
npm run test     # Run Vitest test suite
npm run lint     # Run ESLint check
```
