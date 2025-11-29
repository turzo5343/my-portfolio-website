import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Workflow, Users, TrendingUp, MessageSquare, Bot, Mail, Database, Slack, Brain, Phone, GitBranch } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Custom Automation Problem Solving',
    problem: 'Manual processes eating up 20+ hours/week',
    outcome: 'Save 80% time on repetitive tasks',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Workflow,
    title: 'n8n Workflow Architecture & Implementation',
    problem: 'Complex workflows scattered across tools',
    outcome: 'Unified automation hub reducing errors by 95%',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Lead Generation Automation & CRM Integration',
    problem: 'Losing 40% of leads due to slow response',
    outcome: 'Instant lead capture + routing = 2x conversions',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Sales Automation & Follow-ups',
    problem: 'Missing follow-ups costing thousands monthly',
    outcome: 'Zero missed follow-ups, 35% revenue increase',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageSquare,
    title: 'Social Media Automation + Auto-Reply',
    problem: 'Can\'t respond to DMs/comments fast enough',
    outcome: '<5 min response time, 24/7 engagement',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Bot,
    title: 'Custom Website Chatbots (LLM/RAG)',
    problem: 'Support team overwhelmed with basic questions',
    outcome: '70% queries auto-resolved, team focused on sales',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Mail,
    title: 'Email Marketing Automation',
    problem: 'Generic campaigns with 2% open rates',
    outcome: 'Personalized sequences achieving 40%+ opens',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Database,
    title: 'Airtable Solutions & Database Automations',
    problem: 'Data scattered, manual updates causing delays',
    outcome: 'Real-time synced data, instant insights',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Slack,
    title: 'Slack & Team Automation',
    problem: 'Important notifications buried in noise',
    outcome: 'Smart alerts + workflows = 50% faster decisions',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Brain,
    title: 'RAG-based AI Systems',
    problem: 'Knowledge locked in documents no one reads',
    outcome: 'Instant AI-powered answers from your docs',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Phone,
    title: 'Voice Agent Integrations (Vapi & ElevenLabs)',
    problem: 'Phone support costs $50K+/year',
    outcome: 'AI handles 80% of calls, costs drop 70%',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: GitBranch,
    title: 'Full-stack Automation Pipelines',
    problem: 'Systems don\'t talk, data entry x3',
    outcome: 'End-to-end flow from lead to invoice',
    color: 'from-orange-500 to-red-500',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Services</span> That Drive Results
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proven automation solutions that eliminate bottlenecks and multiply your team's output
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                data-testid={`service-card-${index}`}
              >
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-red-600 dark:text-red-400">Problem:</span> {service.problem}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-green-600 dark:text-green-400">Outcome:</span> {service.outcome}
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm"
                    data-testid={`see-sample-btn-${index}`}
                  >
                    See Sample
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-semibold text-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    data-testid={`request-consult-btn-${index}`}
                  >
                    Request Consult
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;