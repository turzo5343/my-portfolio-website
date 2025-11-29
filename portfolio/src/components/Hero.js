import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
      id="hero"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity }}
          className="space-y-8 text-center md:text-left z-10"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gradient">
              I build smart automations
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              that save time & scale revenue
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Expert in custom automation, AI voice & workflow architecture {' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              n8n, GoHighLevel, Airtable, Vapi, ElevenLabs
            </span>{' '}
            and more.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/tanvir-turzo-53a213301/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              data-testid="linkedin-cta-btn"
            >
              <Linkedin size={24} />
              Contact on LinkedIn
            </motion.a>

            <motion.a
              href="https://wa.me/8801316450823"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              data-testid="whatsapp-cta-btn"
            >
              <MessageCircle size={24} />
              WhatsApp
            </motion.a>

            <motion.a
              href="mailto:turzo5343@gmail.com"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              data-testid="email-cta-btn"
            >
              <Mail size={24} />
              Email
            </motion.a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            className="text-sm md:text-base text-gray-500 dark:text-gray-400 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            ✓ Projects delivered: automation for startups, agencies & SMEs fast, reliable, measurable outcomes.
          </motion.p>
        </motion.div>

        {/* Right side - Profile image with parallax */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            className="relative w-full max-w-md aspect-square"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            {/* Profile Image */}
            <motion.img
              src="https://customer-assets.emergentagent.com/job_9d379eb1-9703-4dae-a334-d2b4029f3fe9/artifacts/u1lql1rh_image.png"
              alt="Tanvir Turzo - Business Automation Specialist"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;