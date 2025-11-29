# Tanvir Turzo - Premium Portfolio Website

## 🌟 Overview

A premium, conversion-first, animated portfolio website for **Tanvir Turzo** - Business Automation Specialist & AI Workflow Architect. Built with React + Tailwind CSS and featuring advanced animations, interactive workflow visualizations, and comprehensive automation service showcase.

## ✨ Features

### Core Functionality
- **Light/Dark Mode Toggle** - One-click theme switching with system preference detection
- **Mouse-Reactive Gradient Background** - Dynamic colorful gradients that follow cursor movement
- **Cursor Trail Effect** - Smooth, animated cursor trail for premium feel
- **Smooth Parallax Scrolling** - Parallax effects on hero image and scroll animations
- **Interactive Workflow Viewer** - n8n-style node graph with clickable nodes and detailed explanations
- **Responsive Design** - Mobile-first, fully responsive across all devices

### Sections
1. **Hero Section** - Large headline, professional image with parallax, 3 prominent CTAs
2. **Navigation** - Sticky, translucent navbar with smooth animations
3. **Services Grid** - 12 interactive service cards with hover effects and metrics
4. **Workflow Showcase** - Interactive node-based workflow visualization with demo animation
5. **Platform Logos** - Animated badges for n8n, GoHighLevel, Airtable, Vapi, ElevenLabs, etc.
6. **Use Cases** - Real-world examples with problem-solution-outcome format
7. **Voice Automation** - Dedicated section for AI voice agents with demo player
8. **About** - Professional bio with process timeline
9. **Testimonials** - Client feedback with ratings and metrics
10. **Contact** - Multiple contact options + form with Calendly integration
11. **Footer** - Social links, quick navigation, contact info

### Premium Animations
- Button hover effects with scale, shadow, and gradient shifts
- Card lift animations with hover states
- Logo floating and pulsing animations
- Workflow node connection animations
- Micro-interactions on all interactive elements
- Smooth page transitions and scroll reveals

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
cd /app/portfolio
npm install
# or
yarn install
```

### Development

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

Optimized production files will be in the `build/` folder.

## 📝 Customization

### Replacing Professional Image

The profile image is currently hosted at:
```
https://customer-assets.emergentagent.com/job_9d379eb1-9703-4dae-a334-d2b4029f3fe9/artifacts/u1lql1rh_image.png
```

To replace with your own image:
1. Add your image to `/public/images/profile.jpg`
2. Update the image URL in:
   - `src/components/Hero.js` (line 74)
   - `src/components/About.js` (line 48)

### Updating Contact Information

Update these files with your contact details:
- `src/components/Hero.js` - Hero CTAs
- `src/components/Contact.js` - Contact section
- `src/components/Footer.js` - Footer links

Current contact info:
- LinkedIn: https://www.linkedin.com/in/tanvir-turzo-53a213301/
- WhatsApp: +880 1316 450823
- Email: turzo5343@gmail.com
- Calendly: https://calendly.com/turzo5343

### Updating Platform Logos

Platform logos are in `src/components/WorkflowShowcase.js` (lines 6-15). To add official SVG logos:

1. Download official brand assets:
   - [n8n Brand Assets](https://n8n.io/brand)
   - [ElevenLabs Brand Kit](https://elevenlabs.io/brand)
   - [Vapi Documentation](https://docs.vapi.ai/)
   - Other platforms' brand pages

2. Add SVG files to `/public/logos/`
3. Update the `platforms` array with new paths

### Adding Voice Demo Audio

To add actual voice demo:
1. Add audio file to `/public/audio/voice-demo.mp3`
2. Update `src/components/VoiceAutomation.js`:
   - Add `<audio>` element
   - Connect play/pause controls

### Calendly Integration

Update Calendly link in:
- `src/components/Contact.js` (line 170)

Replace `https://calendly.com/turzo5343` with your Calendly URL.

### Customizing Colors & Branding

Main gradient colors can be adjusted in:
- `tailwind.config.js` - Theme extensions
- `src/index.css` - Global styles

Primary gradient: `from-purple-600 via-pink-600 to-blue-600`

## ♻️ Tech Stack

- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## ✅ Accessibility Features

- Keyboard navigation support
- Focus states on all interactive elements
- Alt text on all images
- ARIA labels on buttons
- Color contrast meeting WCAG standards
- Screen reader friendly

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components are mobile-first and fully responsive.

## 🔒 SEO Considerations

For production deployment:
1. Add meta tags in `public/index.html`
2. Include Open Graph tags for social sharing
3. Add structured data (JSON-LD) for rich snippets
4. Create `robots.txt` and `sitemap.xml`
5. Optimize images (WebP format, lazy loading)

## 📝 Content Updates

### Services
Update services in `src/components/Services.js` (lines 4-49)

### Use Cases
Update use cases in `src/components/UseCases.js` (lines 5-44)

### Testimonials
Update testimonials in `src/components/Testimonials.js` (lines 5-32)

### Workflow Nodes
Customize workflow in `src/components/WorkflowShowcase.js` (lines 18-115)

## 🚀 Deployment

### Netlify
```bash
npm run build
# Deploy build/ folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy with Vercel CLI or GitHub integration
```

### Traditional Hosting
```bash
npm run build
# Upload build/ folder contents to web server
```

## 🔧 Troubleshooting

### Animations not working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser compatibility (modern browsers only)

### Dark mode not persisting
- Currently uses in-session toggle
- To persist: Add localStorage in `src/App.js`

### Platform logos not loading
- Check image URLs in `WorkflowShowcase.js`
- Use local files in `/public/logos/` for reliability

## 📄 License

This is a custom portfolio website for Tanvir Turzo. All rights reserved.

## 👍 Support

For questions or customization help:
- Email: turzo5343@gmail.com
- WhatsApp: +880 1316 450823
- LinkedIn: [Tanvir Turzo](https://www.linkedin.com/in/tanvir-turzo-53a213301/)

---

**Built with ❤️ and automation by Tanvir Turzo**