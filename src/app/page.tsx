import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-20">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden">
            <Image
              src="/profile-placeholder.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Your Name</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer
          </p>
          <div className="flex gap-4">
            <a href="https://github.com" className="text-2xl hover:text-primary">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" className="text-2xl hover:text-primary">
              <FaLinkedin />
            </a>
            <a href="mailto:your@email.com" className="text-2xl hover:text-primary">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-20 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-300">
          I am a passionate developer with expertise in building modern web applications.
          I love working with React, Next.js, and other cutting-edge technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Project description goes here. Brief overview of what the project does.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 