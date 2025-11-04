'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Users, Shield, Lightbulb, Target } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award size={40} />,
      title: 'Industry Excellence',
      description: 'Award-winning team with 10+ years of experience in architectural visualization and 3D rendering services.'
    },
    {
      icon: <Clock size={40} />,
      title: 'Fast Turnaround',
      description: 'Efficient workflow processes ensure your projects are delivered on time without compromising quality.'
    },
    {
      icon: <Users size={40} />,
      title: 'Dedicated Support',
      description: 'Personal project manager assigned to every client for seamless communication and updates.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Quality Guaranteed',
      description: 'Unlimited revisions until you\'re 100% satisfied. We stand behind our work with confidence.'
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Creative Innovation',
      description: 'Cutting-edge technology and creative approach to bring the most challenging visions to life.'
    },
    {
      icon: <Target size={40} />,
      title: 'Results Driven',
      description: 'Our visualizations help you secure approvals faster and close deals with compelling presentations.'
    },
  ]

  return (
    <section id="why-choose-us" className="section-padding bg-gradient-to-br from-dark to-secondary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg mb-4 block">Why Choose AayamArts</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted Visualization Partner
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine technical expertise, creative excellence, and client-focused service to deliver exceptional results every time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 hover:bg-white/20 transition"
            >
              <div className="text-primary mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="#contact">
            <button className="btn-primary text-lg">
              Start Your Project Today
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
