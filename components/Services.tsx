'use client'

import { motion } from 'framer-motion'
import { Box, Layout, Building2, Glasses, Printer, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Box size={40} />,
      title: '3D Walkthrough',
      description: 'Immersive virtual tours that allow clients to experience every corner of their future property with photorealistic detail and cinematic quality.',
      features: ['4K Resolution', 'Interactive Navigation', 'Day/Night Views', 'Custom Camera Angles'],
      cta: 'Explore Walkthroughs'
    },
    {
      icon: <Layout size={40} />,
      title: '3D Blueprints',
      description: 'Detailed technical drawings and floor plans transformed into stunning 3D visualizations with accurate measurements and spatial understanding.',
      features: ['Precise Measurements', 'Layer-by-Layer Views', 'Material Specifications', 'Scalable Designs'],
      cta: 'View Blueprints'
    },
    {
      icon: <Building2 size={40} />,
      title: 'Building Elevation',
      description: 'Stunning exterior visualizations showcasing architectural aesthetics, materials, textures, and lighting for residential and commercial projects.',
      features: ['Photorealistic Renders', 'Multiple Angles', 'Landscaping Integration', 'Weather Simulations'],
      cta: 'See Elevations'
    },
    {
      icon: <Glasses size={40} />,
      title: 'VR Demo Experience',
      description: 'Cutting-edge virtual reality demonstrations that transport clients directly into their future spaces for an unparalleled immersive experience.',
      features: ['Full VR Support', 'Real-time Interaction', 'Multi-user Sessions', 'Oculus & HTC Compatible'],
      cta: 'Try VR Demo'
    },
    {
      icon: <Printer size={40} />,
      title: '3D Prints & Models',
      description: 'Physical scale models of your projects created with precision 3D printing technology for presentations, approvals, and marketing.',
      features: ['Multiple Scale Options', 'High-Detail Printing', 'Color Options', 'Durable Materials'],
      cta: 'Order Models'
    },
    {
      icon: <Building2 size={40} />,
      title: 'Complex & Society Projects',
      description: 'Comprehensive visualization solutions for large-scale developments including apartments, complexes, townships, and gated communities.',
      features: ['Master Planning', 'Amenities Showcase', 'Landscape Design', 'Infrastructure Mapping'],
      cta: 'Discuss Project'
    },
  ]

  return (
    <section id="services" className="section-padding bg-light">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive 3D Visualization Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to reality, we provide end-to-end architectural visualization services that bring your projects to life with stunning detail and precision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg card-hover"
            >
              <div className="text-primary mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact">
                <button className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition">
                  {service.cta}
                  <ArrowRight size={18} />
                </button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            We specialize in tailored visualization packages for unique project requirements
          </p>
          <a href="#contact">
            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition">
              Discuss Your Requirements
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
