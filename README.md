# Dental Clinics

A responsive dental clinic website built with React and Vite. The project includes public pages for services, dentists, blogs, contact forms, testimonials, and detailed pages for individual services, doctors, and blog posts.

## Features

- Responsive multi-page layout using React Router.
- Home page with hero section, introduction cards, services, statistics, features, how-it-works steps, testimonials, blogs, FAQ, and contact CTA.
- Services listing and service details pages.
- Dentist team listing and doctor profile pages.
- Blog listing and blog details pages.
- Contact page with form and contact information.
- Before/after testimonial image comparison.
- Smooth in-view animations using `motion.dev`.
- Automatic scroll-to-top on route changes.

## Tech Stack

- React 19
- Vite 8
- React Router DOM
- Bootstrap
- Motion
- React Icons
- React Compare Image
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Main Routes

- `/` - Home
- `/about` - About
- `/contact` - Contact
- `/services` - Services
- `/services/:id` - Service details
- `/team` - Dentist team
- `/team/:doctor_id` - Doctor profile
- `/blogs` - Blogs
- `/blogs/:slug` - Blog details

## Project Structure

```text
src/
  assets/                 Images, videos, and shared data
  components/             Shared UI components
  components/componentsHome/
                           Home page sections
  page/                   Route pages
  utils/motionPresets.js  Shared Motion animation presets
```

## Animation Notes

Most visual sections use shared animation presets from:

```text
src/utils/motionPresets.js
```

Cards and content blocks animate with fade and vertical movement when they enter the viewport. The animation uses a smooth spring transition and small stagger delays for repeated items.
