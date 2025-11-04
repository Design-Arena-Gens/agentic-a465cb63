'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Real Estate Developer',
      company: 'Kumar Properties',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      text: 'AayamArts transformed our project presentation completely. Their 3D walkthroughs helped us close deals 40% faster. The quality is simply outstanding!',
      rating: 5,
      project: 'Luxury Villa Complex'
    },
    {
      name: 'Priya Sharma',
      role: 'Architect',
      company: 'Design Studio',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      text: 'Working with AayamArts has been a game-changer for my practice. Their attention to detail and ability to visualize complex designs is exceptional.',
      rating: 5,
      project: 'Commercial Tower'
    },
    {
      name: 'Amit Patel',
      role: 'Builder',
      company: 'Patel Constructions',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      text: 'The VR demo experience helped our clients visualize their dream homes perfectly. We saw a 60% increase in pre-bookings after using their services.',
      rating: 5,
      project: 'Residential Society'
    },
    {
      name: 'Sneha Reddy',
      role: 'Interior Designer',
      company: 'Reddy Interiors',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      text: 'The 3D models and blueprints are incredibly detailed. It makes client presentations so much more impactful and helps avoid misunderstandings.',
      rating: 5,
      project: 'Hotel Interior Design'
    },
    {
      name: 'Vikram Singh',
      role: 'Project Manager',
      company: 'Singh Developers',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      text: 'Professional, timely, and exceptional quality. AayamArts delivered beyond our expectations. The building elevations were photorealistic!',
      rating: 5,
      project: 'Mixed-Use Development'
    },
    {
      name: 'Anita Verma',
      role: 'Real Estate Agent',
      company: 'Verma Realty',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
      text: 'These visualizations have revolutionized how we showcase properties. Clients love the immersive experience and it significantly boosts conversions.',
      rating: 5,
      project: 'Apartment Showcase'
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry professionals have to say about our services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-light rounded-2xl p-8 card-hover relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={60} />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <div className="text-sm text-gray-500 font-semibold">
                Project: {testimonial.project}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Join 250+ Satisfied Clients
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Experience the AayamArts difference in your next project
            </p>
            <a href="#contact">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition">
                Get Your Free Quote
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
