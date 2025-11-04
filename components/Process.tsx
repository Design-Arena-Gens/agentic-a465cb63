'use client'

import { motion } from 'framer-motion'
import { MessageSquare, FileText, Paintbrush, Eye, CheckCircle, Rocket } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: <MessageSquare size={40} />,
      title: 'Initial Consultation',
      description: 'We discuss your project requirements, vision, and objectives to understand your needs perfectly.',
      duration: 'Day 1'
    },
    {
      icon: <FileText size={40} />,
      title: 'Planning & Documentation',
      description: 'Gather all necessary blueprints, specifications, and reference materials for the project.',
      duration: 'Day 1-2'
    },
    {
      icon: <Paintbrush size={40} />,
      title: '3D Modeling & Design',
      description: 'Our expert team creates detailed 3D models based on your specifications with precision.',
      duration: 'Day 3-7'
    },
    {
      icon: <Eye size={40} />,
      title: 'Review & Revisions',
      description: 'You review the initial renders and provide feedback for any adjustments needed.',
      duration: 'Day 8-10'
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Final Rendering',
      description: 'High-quality final renders are produced with all approved modifications incorporated.',
      duration: 'Day 11-14'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Delivery & Support',
      description: 'Receive your complete project files with ongoing support for any future needs.',
      duration: 'Day 15'
    },
  ]

  return (
    <section id="process" className="section-padding bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg mb-4 block">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Bring Your Vision to Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined, transparent process designed to deliver exceptional results with minimal hassle.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row gap-8 mb-12 items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className="text-primary">{step.icon}</div>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Center Circle */}
              <div className="hidden lg:block relative z-10">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Spacer */}
              <div className="hidden lg:block lg:w-1/2"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-white rounded-2xl p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Book a free consultation call to discuss your project requirements
          </p>
          <a href="#contact">
            <button className="btn-primary text-lg">
              Schedule Free Consultation
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
