import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users, Zap } from 'lucide-react';

const useCases = [
  {
    icon: Clock,
    title: 'Lead Capture Automation',
    problem: 'Sales team took 24-48 hours to respond to website leads',
    solution: 'Built instant lead capture → CRM push → Slack notification → auto-email sequence',
    outcome: 'Response time reduced to <10 minutes, +35% conversion rate',
    metric: '+35%',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: DollarSign,
    title: 'Sales Pipeline Automation',
    problem: '$50K+ deals stuck in pipeline due to missed follow-ups',
    solution: 'Automated deal stage tracking + smart reminders + auto-tasks creation',
    outcome: 'Zero missed follow-ups, closed 8 additional deals in 60 days',
    metric: '+$400K',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Customer Onboarding Flow',
    problem: 'Manual onboarding taking 2 weeks, 30% churn in first month',
    solution: 'Automated welcome sequence + account setup + training scheduler + check-ins',
    outcome: 'Onboarding in 2 days, churn reduced to 8%, NPS score +40 points',
    metric: '-73%',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Support Ticket Triage',
    problem: 'Support team overwhelmed with 200+ daily tickets, 24hr response time',
    solution: 'AI chatbot + auto-categorization + priority routing + knowledge base integration',
    outcome: '70% of queries auto-resolved, team handles complex issues only',
    metric: '-70%',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Social Media Engagement Bot',
    problem: 'Missing 80% of Instagram/Facebook DMs, losing potential customers',
    solution: 'Auto-reply bot with GPT + sentiment analysis + lead capture + CRM sync',
    outcome: '<5 min response time 24/7, captured 120+ leads in 30 days',
    metric: '+120',
    color: 'from-pink-500 to-rose-500',
  },
];

const UseCases = () => {
  return (
    <section id="usecases" className="py-24 px-4 relative bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Real Results</span> from Real Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Measurable outcomes that transformed businesses — not just theory, actual implementations
          </p>
        </motion.div>

        {/* Use cases */}
        <div className="space-y-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                data-testid={`usecase-card-${index}`}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Icon & Metric */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${useCase.color} mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-white" size={32} />
                    </motion.div>
                    <div className={`text-center px-4 py-2 rounded-lg bg-gradient-to-r ${useCase.color} text-white font-bold text-2xl`}>
                      {useCase.metric}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {useCase.title}
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-24 font-semibold text-red-600 dark:text-red-400 text-lg">
                          Problem:
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                          {useCase.problem}
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-24 font-semibold text-blue-600 dark:text-blue-400 text-lg">
                          Solution:
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                          {useCase.solution}
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-24 font-semibold text-green-600 dark:text-green-400 text-lg">
                          Outcome:
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
                          {useCase.outcome}
                        </p>
                      </div>
                    </div>

                    <motion.a
                      href="#workflows"
                      className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-lg hover:gap-4 transition-all"
                      whileHover={{ x: 5 }}
                      data-testid={`show-workflow-btn-${index}`}
                    >
                      Show my workflow →
                    </motion.a>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;