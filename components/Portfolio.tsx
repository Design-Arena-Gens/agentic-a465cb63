'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play, Maximize2, ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const categories = ['all', '3D Walkthrough', '3D Blueprint', 'Building Elevation', 'VR Demo', '3D Models']

  const portfolioItems = [
    {
      id: 1,
      title: 'Luxury Villa Complex',
      category: '3D Walkthrough',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      description: 'Premium residential complex with modern amenities and landscaping',
      tags: ['Residential', 'Luxury', 'Modern']
    },
    {
      id: 2,
      title: 'Commercial Tower Blueprint',
      category: '3D Blueprint',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
      description: 'Detailed technical blueprints for 20-story commercial building',
      tags: ['Commercial', 'High-rise', 'Technical']
    },
    {
      id: 3,
      title: 'Modern Apartment Exterior',
      category: 'Building Elevation',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      description: 'Contemporary apartment building with glass facade',
      tags: ['Apartments', 'Contemporary', 'Glass']
    },
    {
      id: 4,
      title: 'Society Master Plan',
      category: '3D Blueprint',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
      description: 'Complete township development with infrastructure planning',
      tags: ['Township', 'Master Plan', 'Infrastructure']
    },
    {
      id: 5,
      title: 'VR Property Tour',
      category: 'VR Demo',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      description: 'Immersive VR experience for luxury penthouse',
      tags: ['VR', 'Luxury', 'Interactive']
    },
    {
      id: 6,
      title: 'Scale Model - Residential Complex',
      category: '3D Models',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      description: 'Physical 3D printed model for client presentation',
      tags: ['Physical Model', '3D Print', 'Presentation']
    },
    {
      id: 7,
      title: 'Shopping Mall Walkthrough',
      category: '3D Walkthrough',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=800&h=600&fit=crop',
      description: 'Interactive walkthrough of multi-level shopping center',
      tags: ['Commercial', 'Retail', 'Interactive']
    },
    {
      id: 8,
      title: 'Eco-Friendly Housing',
      category: 'Building Elevation',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      description: 'Sustainable residential building with green architecture',
      tags: ['Sustainable', 'Green', 'Residential']
    },
    {
      id: 9,
      title: 'Hotel Interior VR',
      category: 'VR Demo',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      description: 'Virtual reality tour of 5-star hotel interiors',
      tags: ['Hospitality', 'Interior', 'VR']
    },
  ]

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter)

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-lg mb-4 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Showcase of Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our diverse portfolio of successfully delivered projects across residential, commercial, and mixed-use developments.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                filter === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play size={60} className="text-white" />
                  ) : (
                    <Maximize2 size={60} className="text-white" />
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-light text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-600 mb-6">
            Want to see your project visualized with this level of detail?
          </p>
          <a href="#contact">
            <button className="btn-primary text-lg flex items-center gap-2 mx-auto">
              Request Free Quote
              <ExternalLink size={20} />
            </button>
          </a>
        </motion.div>
      </div>

      {/* Modal for Selected Item */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full max-h-[70vh] object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-3 hover:bg-gray-100 transition"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">{selectedItem.title}</h3>
              <p className="text-gray-600 mb-6">{selectedItem.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedItem.tags.map((tag: string, idx: number) => (
                  <span key={idx} className="bg-light text-gray-700 px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#contact">
                <button className="btn-primary">
                  Get Similar Visualization
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
