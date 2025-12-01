import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Workflows', href: '#workflows' },
    { label: 'Use Cases', href: '#usecases' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/tanvir-turzo-53a213301/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/8801316450823',
      label: 'WhatsApp',
      color: 'hover:text-green-600',
    },
    {
      icon: Mail,
      href: 'mailto:turzo5343@gmail.com',
      label: 'Email',
      color: 'hover:text-cyan-600',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.h3
              className="text-3xl font-bold mb-4 text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Tanvir Turzo
            </motion.h3>
            <p className="text-gray-400 text-lg mb-6">
              Business Automation Specialist & AI Workflow Architect
            </p>
            <p className="text-gray-400 mb-4">
              Transforming manual chaos into automated excellence with n8n, GoHighLevel, Airtable, Vapi, and ElevenLabs.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800 rounded-lg ${social.color} transition-colors`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="text-lg">
                <a href="mailto:turzo5343@gmail.com" className="hover:text-white transition-colors">
                  turzo5343@gmail.com
                </a>
              </li>
              <li className="text-lg">
                <a href="https://wa.me/8801316450823" className="hover:text-white transition-colors">
                  +880 1316 450823
                </a>
              </li>
              <li className="text-lg">
                <a href="https://calendly.com/turzo5343" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
            <p className="text-center md:text-left">
              © {currentYear} Tanvir Turzo. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-center md:text-right">
              Built with <Heart className="text-red-500 fill-red-500" size={16} /> and automation
            </p>
          </div>
          <div className="mt-4 text-center md:text-left">
            <p className="text-sm text-gray-500">
              Privacy: Your data is secure. I never share information with third parties.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;