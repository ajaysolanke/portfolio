import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  {
    id: 'about',
    title: 'About Me',
    content: `I'm a full-stack developer with 7 years of experience building scalable web applications using React, Node.js, and Python. Passionate about creating beautiful UIs and clean backend architectures.`
  },
  {
    id: 'skills',
    title: 'Skills',
    content: `React.js, Node.js, Python/Django, AWS, PostgreSQL, Docker, CI/CD, REST APIs, and system design.`
  },
  {
    id: 'projects',
    title: 'Projects',
    content: `1. Society Management Platform (React + Node + AWS)\n2. Real-time Collaboration Tool (Socket.io + Redis)\n3. Serverless URL Shortener (AWS Lambda + DynamoDB)`
  },
  {
    id: 'experience',
    title: 'Experience',
    content: `Worked on multiple SaaS products, led small teams, handled full-stack development from design to deployment.`
  },
  {
    id: 'contact',
    title: 'Contact',
    content: `Let's connect: ajay.solanke@email.com | LinkedIn | GitHub`
  }
]

export default function Portfolio() {
  const [activeId, setActiveId] = useState('about')

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-start py-10 text-white overflow-hidden">
      <h1 className="text-4xl font-bold mb-10">Ajay Solanke</h1>

      <div className="relative w-full max-w-3xl flex flex-col items-center">
        {sections.map((section, index) => {
          const isActive = activeId === section.id
          return (
            <motion.div
              key={section.id}
              layout
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              className={`w-full bg-gray-900 rounded-2xl shadow-xl p-6 mb-[-60px] cursor-pointer border border-gray-800 overflow-hidden ${
                isActive ? 'z-50' : 'z-10'
              }`}
              style={{
                transform: isActive ? 'translateY(0)' : `translateY(${index * 60}px)`,
                opacity: isActive ? 1 : 0.85
              }}
              onClick={() => setActiveId(section.id)}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-300 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
                  >
                    <div className="p-1">
                      {section.content.split('\n').map((line, i) => (
                        <p key={i} className="mb-2 leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      <div className="flex mt-10 space-x-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveId(section.id)}
            className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
              activeId === section.id ? 'bg-blue-600 text-white' : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  )
}
