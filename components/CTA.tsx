'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-dark via-secondary to-accent text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Architectural Vision?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get started with a free consultation and discover how our cutting-edge 3D visualization services can elevate your project to new heights.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-lg">Free Project Consultation</h4>
                  <p className="text-gray-300">Discuss your requirements with our experts</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-lg">Competitive Pricing</h4>
                  <p className="text-gray-300">Get the best value without compromising quality</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-lg">Fast Turnaround</h4>
                  <p className="text-gray-300">Quick delivery without sacrificing excellence</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <button className="btn-primary flex items-center gap-2 text-lg">
                  Book Demo Now
                  <ArrowRight size={20} />
                </button>
              </a>
              <a href="tel:+919999999999">
                <button className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-dark flex items-center gap-2 text-lg">
                  <Phone size={20} />
                  Call Us Now
                </button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>

            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="" className="text-dark">Select a service</option>
                  <option value="3d-walkthrough" className="text-dark">3D Walkthrough</option>
                  <option value="3d-blueprint" className="text-dark">3D Blueprint</option>
                  <option value="building-elevation" className="text-dark">Building Elevation</option>
                  <option value="vr-demo" className="text-dark">VR Demo</option>
                  <option value="3d-prints" className="text-dark">3D Prints</option>
                  <option value="custom" className="text-dark">Custom Requirements</option>
                </select>
              </div>

              <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2">
                Request Callback
                <Phone size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
