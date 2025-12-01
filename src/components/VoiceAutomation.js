import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIncoming, PhoneOutgoing, Mic, Play, Pause } from 'lucide-react';

const VoiceAutomation = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      icon: PhoneIncoming,
      title: 'Inbound Call Handler',
      description: 'AI answers calls 24/7, gathers customer info, routes to team or books meetings automatically',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: PhoneOutgoing,
      title: 'Outbound Lead Qualifier',
      description: 'AI calls leads, qualifies them with natural conversation, books appointments with hot prospects',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Mic,
      title: 'Premium Voice Quality',
      description: 'ElevenLabs TTS + Vapi telephony = human-like voices that build trust and convert',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="voice-automation" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">AI Voice Agents</span> That Sound Human
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cut phone support costs by 70% while improving customer experience with AI-powered voice automation
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-3xl p-1"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Listen to a Voice Agent in Action
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                This AI handles appointment booking, answers questions, and routes calls with natural conversation.
              </p>
            </div>

            {/* Audio player mockup */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-8">
                <div className="flex items-center justify-center gap-6 mb-6">
                  <motion.button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    data-testid="play-voice-demo-btn"
                  >
                    {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
                  </motion.button>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600"
                        initial={{ width: '0%' }}
                        animate={{ width: isPlaying ? '100%' : '0%' }}
                        transition={{ duration: isPlaying ? 30 : 0 }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <span>0:00</span>
                      <span>Sample Audio (To Be Added)</span>
                      <span>0:30</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                    <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Availability</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                    <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400">80%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Calls Handled</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                    <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400">70%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Cost Reduction</div>
                  </div>
                </div>
              </div>

              <motion.button
                className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="request-voice-prototype-btn"
              >
                Request Voice Agent Prototype
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Use cases */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <PhoneIncoming className="text-blue-600" size={28} />
              Inbound Use Cases
            </h4>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                Customer support (hours, pricing, FAQs)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                Appointment booking & confirmation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                Order status & subscription info
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                Route to human when needed
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <PhoneOutgoing className="text-purple-600" size={28} />
              Outbound Use Cases
            </h4>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                Lead qualification & scoring
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                Appointment reminders
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                Survey & feedback collection
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                Event promotion & registration
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAutomation;