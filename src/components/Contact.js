import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, MessageCircle, Calendar, Send, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    problem: '',
    budget: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Let's Build</span> Your Automation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get a free consultation — I'll audit your workflow and show you exactly how automation can help
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Reach Out Directly
            </h3>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/tanvir-turzo-53a213301/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="contact-linkedin-btn"
            >
              <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl">
                <Linkedin className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-xl text-gray-900 dark:text-white">LinkedIn</div>
                <div className="text-gray-600 dark:text-gray-400">Connect and message me</div>
              </div>
              <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform">
                →
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/8801316450823"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="contact-whatsapp-btn"
            >
              <div className="p-4 bg-gradient-to-r from-green-600 to-green-700 rounded-xl">
                <MessageCircle className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-xl text-gray-900 dark:text-white">WhatsApp</div>
                <div className="text-gray-600 dark:text-gray-400">+880 1316 450823</div>
              </div>
              <div className="text-green-600 dark:text-green-400 group-hover:translate-x-2 transition-transform">
                →
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:turzo5343@gmail.com"
              className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="contact-email-btn"
            >
              <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                <Mail className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-xl text-gray-900 dark:text-white">Email</div>
                <div className="text-gray-600 dark:text-gray-400">turzo5343@gmail.com</div>
              </div>
              <div className="text-purple-600 dark:text-purple-400 group-hover:translate-x-2 transition-transform">
                →
              </div>
            </motion.a>

            {/* Calendly */}
            <motion.a
              href="https://calendly.com/turzo5343"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="book-consultation-btn"
            >
              <div className="p-4 bg-white/20 rounded-xl">
                <Calendar className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-xl">Book a Free Consultation</div>
                <div className="text-white/80">30-minute strategy call</div>
              </div>
              <div className="text-white group-hover:translate-x-2 transition-transform">
                →
              </div>
            </motion.a>
          </motion.div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Or Send a Message
            </h3>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none transition-colors text-lg"
                      placeholder="John Doe"
                      data-testid="contact-name-input"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none transition-colors text-lg"
                      placeholder="Your Company"
                      data-testid="contact-company-input"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none transition-colors text-lg"
                      placeholder="john@company.com"
                      data-testid="contact-email-input"
                    />
                  </div>

                  {/* Problem */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      What problem are you trying to solve? *
                    </label>
                    <textarea
                      name="problem"
                      required
                      value={formData.problem}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none transition-colors text-lg resize-none"
                      placeholder="Tell me about your workflow challenges..."
                      data-testid="contact-problem-input"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none transition-colors text-lg"
                      data-testid="contact-budget-select"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-plus">$25,000+</option>
                    </select>
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-testid="contact-submit-btn"
                  >
                    <Send size={24} />
                    Send Message
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                    className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6"
                  >
                    <Check className="text-white" size={48} />
                  </motion.div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Message Sent!
                  </h4>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                    Thanks for reaching out! I'll review your message and get back to you within 24 hours.
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    <strong>Next Steps:</strong>
                  </p>
                  <ul className="text-left max-w-md mx-auto mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Check your email for confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>I'll send you a meeting invite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>We'll discuss your automation needs</span>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl px-8 py-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong className="text-purple-600 dark:text-purple-400">Quick Response Guarantee:</strong> I respond to all inquiries within 24 hours — usually much faster!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;