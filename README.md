SalesLord Website

SalesLord is a modern B2B sales and marketing agency website built with Next.js, React, and Tailwind CSS.
The website showcases SalesLord's services, expertise, and allows companies to book a strategy call to discuss revenue growth opportunities.

The project is designed with a premium dark theme UI, optimized for performance, responsiveness, and scalability.

Overview

SalesLord helps B2B companies:

Generate qualified leads

Build predictable sales pipelines

Automate marketing workflows

Improve sales conversion systems

This website is structured as a multi-page B2B marketing site focused on clarity, credibility, and lead conversion.

Features
Modern B2B Design

Premium dark navy + gold UI

Clean typography hierarchy

Conversion-focused layout

Professional agency presentation

Multi-Page Architecture

The website includes:

Landing Page

Services Page

About Page

Contact / Strategy Call Page

Strategy Call Booking Page

A dedicated lead capture page where users can submit details about their company and request a strategy session.

Fully Responsive

Optimized for:

Desktop

Tablet

Mobile

Component Based Architecture

Reusable components ensure the codebase remains clean and scalable.

Production Ready

Clean folder structure

Optimized layouts

Accessible form structure

Ready for deployment on Vercel

Tech Stack

Framework

Next.js (App Router)

Frontend

React

Tailwind CSS

Deployment

Vercel

Version Control

GitHub

Project Structure
app/
  layout.tsx
  globals.css
  page.tsx
  services/
    page.tsx
  about/
    page.tsx
  contact/
    page.tsx

components/
  icons.tsx
  marketing/
    navbar.tsx
    footer.tsx
    hero.tsx
    social-proof.tsx
    services.tsx
    process.tsx
    results.tsx
    cta.tsx
    services-page-hero.tsx
    services-grid.tsx
    capability-breakdown.tsx
    featured-service-blocks.tsx
    services-page-cta.tsx
    why-saleslord.tsx
    about-hero.tsx
    our-mission.tsx
    our-approach.tsx
    small-team.tsx
    values.tsx
    about-results.tsx
    about-final-cta.tsx
    contact-hero.tsx
    strategy-call-form.tsx
    who-this-is-for.tsx
    contact-process.tsx
    why-book.tsx
    direct-contact.tsx
    reassurance.tsx
  ui/
    button.tsx
    card.tsx
    container.tsx
    section.tsx
    text.tsx
    form.tsx

lib/
  cn.ts

public/
  logo.png

The project uses a modular component structure to maintain readability and scalability.

Pages
Landing Page

Introduces SalesLord and highlights the company’s services, process, and revenue impact.

Services Page

Explains the main services offered:

Lead Generation

Sales Outsourcing

Marketing Automation

About Page

Provides information about the company mission, team philosophy, and approach to B2B revenue growth.

Contact Page

The Book a Strategy Call page where companies can submit their details and request a consultation.

Design System
Color Palette

Primary Background
#0B1C2C

Secondary Background
#142C44

Accent Color
#D4AF37

Text
#F5F7FA

Muted Text
#9FB3C8

Typography

Inter

Geist

The UI focuses on:

clean spacing

strong hierarchy

modern B2B aesthetic

Getting Started
Install Dependencies
npm install
Run Development Server
npm run dev

The site will be available at:

http://localhost:3000
Build for Production
npm run build

Start production server:

npm start
Deployment

This project is optimized for Vercel deployment.

Steps:

Push the repository to GitHub

Connect the repository to Vercel

Deploy automatically

Future Improvements

Possible future additions:

CRM integration for strategy call form

Calendly integration

Blog / insights section

Case studies

Analytics tracking

CMS for content management

License

This project is provided for demonstration and development purposes.