import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Clock, Zap, CheckCircle } from 'lucide-react';

// Platform logos data with SVG paths or URLs
const platforms = [
  { name: 'n8n', logo: 'https://n8n.io/favicon.ico', color: 'from-pink-500 to-red-500' },
  { name: 'GoHighLevel', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI4IiBmaWxsPSIjMzNDRjMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+R0hMPC90ZXh0Pjwvc3ZnPg==', color: 'from-green-500 to-emerald-500' },
  { name: 'Airtable', logo: 'https://airtable.com/images/favicon/baymax/favicon-32x32.png', color: 'from-yellow-500 to-orange-500' },
  { name: 'Vapi', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI4IiBmaWxsPSIjNjM2NkYxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VkFQSTwvdGV4dD48L3N2Zz4=', color: 'from-indigo-500 to-purple-500' },
  { name: 'ElevenLabs', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI4IiBmaWxsPSJibGFjayIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjExPC90ZXh0Pjwvc3ZnPg==', color: 'from-gray-700 to-black' },
  { name: 'Slack', logo: 'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack.png', color: 'from-purple-500 to-pink-500' },
  { name: 'Make', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI4IiBmaWxsPSIjNkQzNkZGIi8+PC9zdmc+', color: 'from-purple-600 to-violet-600' },
  { name: 'Zapier', logo: 'https://cdn.zapier.com/ssr/f71f2dd2b75b3d467dc5e68c0c1c86c0455c2281/_next/static/images/favicon-bf0955dc0f50139b6be06eeb8f2a93e7.ico', color: 'from-orange-500 to-red-500' },
  { name: 'HubSpot', logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png', color: 'from-orange-500 to-amber-500' },
];

// Workflow nodes data
const workflowNodes = [
  {
    id: 1,
    type: 'trigger',
    label: 'Webhook Trigger',
    description: 'New lead form submission',
    x: 50,
    y: 200,
    color: 'from-green-500 to-emerald-500',
    details: {
      title: 'Webhook Trigger',
      description: 'Listens for incoming lead data from website forms, landing pages, or ads.',
      sample: `{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "interest": "automation"
}`,
    },
  },
  {
    id: 2,
    type: 'transform',
    label: 'Data Transform',
    description: 'Clean & enrich data',
    x: 250,
    y: 150,
    color: 'from-blue-500 to-cyan-500',
    details: {
      title: 'Data Transformation',
      description: 'Validates email, formats phone number, enriches with location data from IP.',
      sample: `// Validate & format
if (!email.includes('@')) throw error;
phone = formatE164(phone);
location = await geoIP(ipAddress);`,
    },
  },
  {
    id: 3,
    type: 'api',
    label: 'CRM Push',
    description: 'Create contact in GoHighLevel',
    x: 250,
    y: 280,
    color: 'from-purple-500 to-pink-500',
    details: {
      title: 'CRM Integration',
      description: 'Creates or updates contact in GoHighLevel CRM with all enriched data.',
      sample: `POST /contacts
{
  "contact": {
    "email": "john@example.com",
    "phone": "+1234567890",
    "tags": ["website-lead", "automation-interest"]
  }
}`,
    },
  },
  {
    id: 4,
    type: 'conditional',
    label: 'Lead Score',
    description: 'Check if high-value',
    x: 450,
    y: 200,
    color: 'from-yellow-500 to-orange-500',
    details: {
      title: 'Lead Scoring Logic',
      description: 'Analyzes lead data to determine priority. High-value leads get instant attention.',
      sample: `if (budget > 10000 || company_size > 50) {
  priority = 'HIGH';
  notify_sales_immediately();
} else {
  priority = 'NORMAL';
  add_to_nurture_sequence();
}`,
    },
  },
  {
    id: 5,
    type: 'action',
    label: 'Slack Notify',
    description: 'Alert sales team',
    x: 650,
    y: 100,
    color: 'from-indigo-500 to-purple-500',
    details: {
      title: 'Real-time Sales Alert',
      description: 'Sends rich notification to sales channel with lead details and quick action buttons.',
      sample: `📊 NEW HIGH-VALUE LEAD
👤 John Doe
✉️ john@example.com
💰 Budget: $15,000
🎯 Interest: Automation
[Call Now] [Send Email] [View Profile]`,
    },
  },
  {
    id: 6,
    type: 'action',
    label: 'Email Sequence',
    description: 'Start nurture campaign',
    x: 650,
    y: 280,
    color: 'from-pink-500 to-rose-500',
    details: {
      title: 'Automated Email Nurture',
      description: 'Enrolls lead in personalized email sequence based on their interests.',
      sample: `Day 1: Welcome + Case Study
Day 3: How It Works Video
Day 7: ROI Calculator
Day 10: Book Demo CTA
Day 14: Last Chance Offer`,
    },
  },
];

const WorkflowShowcase = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState(-1);

  const playAnimation = () => {
    setIsPlaying(true);
    setActiveNodeIndex(0);
    
    workflowNodes.forEach((_, index) => {
      setTimeout(() => {
        setActiveNodeIndex(index);
        if (index === workflowNodes.length - 1) {
          setTimeout(() => {
            setIsPlaying(false);
            setActiveNodeIndex(-1);
          }, 1000);
        }
      }, index * 800);
    });
  };

  return (
    <section id="workflows" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Interactive Workflow</span> Architecture
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            See how automation flows through your systems — click any node to explore
          </p>
          <motion.button
            onClick={playAnimation}
            disabled={isPlaying}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isPlaying ? 1 : 1.05 }}
            whileTap={{ scale: isPlaying ? 1 : 0.95 }}
            data-testid="play-workflow-btn"
          >
            <Play size={20} />
            {isPlaying ? 'Running...' : 'Run Demo Workflow'}
          </motion.button>
        </motion.div>

        {/* Workflow canvas */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 mb-16 overflow-hidden" style={{ minHeight: '500px' }}>
          {/* SVG connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* Connections between nodes */}
            <motion.path
              d="M 150 220 Q 200 185 250 170"
              stroke="url(#gradient1)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: activeNodeIndex >= 1 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.path
              d="M 150 220 Q 200 250 250 280"
              stroke="url(#gradient2)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: activeNodeIndex >= 2 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.path
              d="M 350 170 Q 400 185 450 200"
              stroke="url(#gradient3)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: activeNodeIndex >= 3 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.path
              d="M 350 300 Q 400 250 450 220"
              stroke="url(#gradient4)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: activeNodeIndex >= 3 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.path
              d="M 550 200 Q 600 150 650 120"
              stroke="url(#gradient5)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: activeNodeIndex >= 4 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.path
              d="M 550 220 Q 600 250 650 280"
              stroke="url(#gradient6)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: activeNodeIndex >= 5 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Gradients for connections */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Workflow nodes */}
          {workflowNodes.map((node, index) => (
            <motion.div
              key={node.id}
              className="absolute cursor-pointer"
              style={{ 
                left: `${node.x}px`, 
                top: `${node.y}px`,
                zIndex: hoveredNode === node.id ? 10 : 2,
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              onClick={() => setSelectedNode(node)}
              onHoverStart={() => setHoveredNode(node.id)}
              onHoverEnd={() => setHoveredNode(null)}
              animate={{
                scale: activeNodeIndex === index ? [1, 1.2, 1] : 1,
              }}
              data-testid={`workflow-node-${node.id}`}
            >
              <div className={`relative bg-gradient-to-br ${node.color} p-4 rounded-xl shadow-lg min-w-[120px]`}>
                {activeNodeIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-xl"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                <div className="text-white font-semibold text-sm mb-1">{node.label}</div>
                <div className="text-white/80 text-xs">{node.description}</div>
                {activeNodeIndex === index && (
                  <motion.div
                    className="absolute -top-1 -right-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <CheckCircle className="text-green-400" size={20} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border-2 border-red-200 dark:border-red-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-red-600 dark:text-red-400" size={32} />
              <h3 className="text-2xl font-bold text-red-900 dark:text-red-100">Before Automation</h3>
            </div>
            <ul className="space-y-3 text-red-800 dark:text-red-200">
              <li className="flex items-start gap-2">
                <span className="text-2xl">⏰</span>
                <span className="text-lg">24-48 hours to respond to leads</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">❌</span>
                <span className="text-lg">40% of leads never contacted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">👥</span>
                <span className="text-lg">3 people manually entering data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">💸</span>
                <span className="text-lg">$15K/month in wasted opportunities</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-green-600 dark:text-green-400" size={32} />
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">After Automation</h3>
            </div>
            <ul className="space-y-3 text-green-800 dark:text-green-200">
              <li className="flex items-start gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-lg">&lt; 5 minutes response time (24/7)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-lg">100% of leads captured & routed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">🤖</span>
                <span className="text-lg">Zero manual data entry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">📈</span>
                <span className="text-lg">+65% conversion rate increase</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Platform logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Powered by Industry-Leading Platforms
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 2 + index * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                <div className={`p-4 bg-gradient-to-br ${platform.color} rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow`}>
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-white font-bold text-xs text-center mt-1">
                    {platform.name}
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {platform.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Node details side panel */}
      <AnimatePresence>
        {selectedNode && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setSelectedNode(null)}
            />
            
            {/* Side panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${selectedNode.color} text-white rounded-lg font-semibold mb-4`}>
                      {selectedNode.label}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {selectedNode.details.title}
                    </h3>
                  </div>
                  <motion.button
                    onClick={() => setSelectedNode(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {selectedNode.details.description}
                </p>

                <div className="bg-gray-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
                  <div className="text-xs text-gray-400 mb-2 font-mono">Sample Code / Data:</div>
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                    {selectedNode.details.sample}
                  </pre>
                </div>

                <motion.button
                  onClick={() => setSelectedNode(null)}
                  className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkflowShowcase;