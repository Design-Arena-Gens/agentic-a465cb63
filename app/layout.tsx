import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AayamArts - Premium 3D Architectural Visualization Services',
  description: 'Transform your architectural vision into stunning reality with our 3D walkthroughs, blueprints, building elevations, VR demos, and 3D prints for complexes, apartments, and societies.',
  keywords: '3D walkthrough, 3D blueprint, building elevation, VR demo, 3D prints, architectural visualization, 3D rendering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
