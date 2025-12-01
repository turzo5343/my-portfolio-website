import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder, GrowthLab Agency',
    company: 'Marketing Agency',
    text: "Tanvir built us a lead capture system that reduced our response time from 2 days to 10 minutes. We've closed 40% more deals in the last quarter. The automation is rock-solid and has paid for itself 10x over.",
    metric: '+40% deals closed',
    rating: 5,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'James Rodriguez',
    role: 'CEO, TechStart Solutions',
    company: 'SaaS Startup',
    text: 'We were drowning in manual processes. Tanvir built n8n workflows that automated our entire onboarding flow. What used to take 2 weeks now happens in 2 days. Customer satisfaction went through the roof.',
    metric: 'From 14 days to 2 days',
    rating: 5,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Emily Chen',
    role: 'Operations Manager, BizScale',
    company: 'E-commerce',
    text: "The voice agent Tanvir built handles 70% of our customer calls. We cut support costs by $40K/year and customers actually prefer talking to the AI because it's faster. Mind-blowing ROI.",
    metric: '$40K saved annually',
    rating: 5,
    color: 'from-green-500 to-emerald-500',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">What Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real feedback from businesses that transformed their operations
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
              data-testid={`testimonial-card-${index}`}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4">
                <div className={`p-3 bg-gradient-to-br ${testimonial.color} rounded-full shadow-lg`}>
                  <Quote className="text-white" size={24} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-base mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Metric badge */}
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${testimonial.color} text-white rounded-full font-semibold text-sm mb-6`}>
                {testimonial.metric}
              </div>

              {/* Author info */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="font-bold text-xl text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl px-12 py-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-cyan-400">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-cyan-400">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-cyan-400">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;