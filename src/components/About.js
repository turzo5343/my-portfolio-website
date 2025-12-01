import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Cog, Rocket, BarChart } from 'lucide-react';

const About = () => {
  const process = [
    {
      icon: Target,
      title: 'Audit',
      description: 'Deep-dive into your workflows to identify bottlenecks and opportunities',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Cog,
      title: 'Prototype (n8n)',
      description: 'Build working automation in n8n with real data and test scenarios',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Deploy',
      description: 'Launch to production with GoHighLevel/Airtable integration and monitoring',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BarChart,
      title: 'Monitor & Improve',
      description: 'Track performance, fix issues, and optimize for better results',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl blur-3xl opacity-20"></div>
              
              {/* Image */}
              <motion.img
                src="https://customer-assets.emergentagent.com/job_9d379eb1-9703-4dae-a334-d2b4029f3fe9/artifacts/u1lql1rh_image.png"
                alt="Tanvir Turzo"
                className="relative z-10 w-full rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="text-gradient">About</span> Tanvir Turzo
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a <span className="font-semibold text-blue-600 dark:text-cyan-400">Business Automation Specialist and AI Workflow Architect</span> who turns chaotic manual processes into smooth, profitable automation systems.
              </p>
              <p>
                With expertise in <span className="font-semibold">n8n, GoHighLevel, Airtable, Vapi, and ElevenLabs</span>, I've helped startups, agencies, and SMEs save thousands of hours and scale revenue without hiring more staff.
              </p>
              <p>
                My focus isn't just building workflows. It's solving real business problems. Every automation I create is designed for <span className="font-semibold text-green-600 dark:text-green-400">measurable ROI</span>: faster response times, higher conversions, and lower costs.
              </p>
              <p>
                I work through a proven process: <span className="font-semibold">Audit, Prototype, Deploy, Monitor, and Improve</span>. You get working solutions fast, backed by real data and continuous optimization.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
                <CheckCircle className="text-green-600" size={20} />
                <span className="font-semibold">n8n Expert</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
                <CheckCircle className="text-green-600" size={20} />
                <span className="font-semibold">AI Integration Specialist</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
                <CheckCircle className="text-green-600" size={20} />
                <span className="font-semibold">Voice Agent Developer</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              How I Work
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A proven 4-step process that delivers results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  <motion.div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.color} mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-white" size={24} />
                  </motion.div>

                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>

                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-blue-600 dark:text-cyan-400 text-3xl">
                      →
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;