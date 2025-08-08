"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

export interface TimetableCell {
  text: string
  type: 'session' | 'closed' | 'available'
  subject?: string
  time?: string
}

export interface TimetableRow {
  time: string
  monday: TimetableCell
  tuesday: TimetableCell
  wednesday: TimetableCell
  thursday: TimetableCell
  friday: TimetableCell
  saturday: TimetableCell
  sunday: TimetableCell
}

interface TimetableProps {
  data: TimetableRow[]
  title?: string
  description?: string
}

export default function Timetable({ data, title, description }: TimetableProps) {
  const getCellClasses = (cell: TimetableCell) => {
    const baseClasses = "border border-gray-300 px-2 sm:px-4 py-3 transition-all duration-300 hover:scale-105"
    
    switch (cell.type) {
      case 'session':
        const sessionClasses = `${baseClasses} text-white font-medium`
        // Handle specific session types
        if (cell.text === '1:1') {
          return `${sessionClasses} bg-gradient-to-br from-orange-400 to-orange-600`
        } else if (cell.text === 'Group Session') {
          return `${sessionClasses} bg-gradient-to-br from-blue-400 to-blue-600`
        } else if (cell.text === 'Art Workshop') {
          return `${sessionClasses} bg-gradient-to-br from-purple-400 to-purple-600`
        } else {
          // Subject-specific sessions
          return `${sessionClasses} ${getSubjectBackgroundColor(cell.text)}`
        }
      case 'closed':
        return `${baseClasses} bg-gray-200 text-gray-500 font-medium`
      case 'available':
        return `${baseClasses} bg-green-50 text-green-700 hover:bg-green-100 font-medium`
      default:
        return `${baseClasses} font-medium`
    }
  }

  const getSubjectBackgroundColor = (sessionText: string) => {
    const text = sessionText.toLowerCase()
    
    // Homeschool Support Sessions
    if (text.includes('foundational homeschool english') || text.includes('foundational hs english')) {
      return 'bg-gradient-to-br from-green-400 to-green-600'
    } else if (text.includes('foundational hs maths') || text.includes('foundational homeschool maths')) {
      return 'bg-gradient-to-br from-blue-400 to-blue-600'
    } else if (text.includes('english senior homeschool') || text.includes('senior homeschool english')) {
      return 'bg-gradient-to-br from-emerald-400 to-emerald-600'
    } else if (text.includes('maths senior hs') || text.includes('senior homeschool maths') || text.includes('senior hs maths')) {
      return 'bg-gradient-to-br from-indigo-400 to-indigo-600'
    } 
    // Generic subjects (fallback)
    else if (text.includes('homeschool') && text.includes('english')) {
      return 'bg-gradient-to-br from-green-400 to-green-600'
    } else if (text.includes('homeschool') && (text.includes('maths') || text.includes('math'))) {
      return 'bg-gradient-to-br from-blue-400 to-blue-600'
    } else if (text.includes('english')) {
      return 'bg-gradient-to-br from-green-400 to-green-600'
    } else if (text.includes('math') || text.includes('maths')) {
      return 'bg-gradient-to-br from-blue-400 to-blue-600'
    } 
    // Default for unknown sessions
    else {
      return 'bg-gradient-to-br from-gray-400 to-gray-600'
    }
  }

  const getSubjectColor = (subject?: string) => {
    switch (subject?.toLowerCase()) {
      case 'math':
      case 'maths':
        return 'bg-blue-500'
      case 'english':
        return 'bg-green-500'
      case 'science':
        return 'bg-purple-500'
      case 'primary':
        return 'bg-orange-500'
      case '1:1':
        return 'bg-orange-500'
      case 'group':
        return 'bg-blue-500'
      case 'art':
        return 'bg-purple-500'
      case 'homeschool':
        return 'bg-teal-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title || "Weekly Tutoring Timetable"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description || "Explore our weekly tutoring schedule for primary and high school students across Melbourne. Sessions in Math, English, and Science are available throughout the week."}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-xl border border-gray-200"
        >
          <div className="overflow-x-auto min-w-full">
            <table className="w-full border-collapse min-w-[800px]">
              <thead className="bg-gradient-to-r from-primary to-primary-dark text-white">
                <tr>
                  <th className="px-3 sm:px-6 py-4 text-left font-semibold text-sm sm:text-base">Time</th>
                  <th className="px-3 sm:px-6 py-4 text-left font-semibold text-sm sm:text-base">Mon</th>
                  <th className="px-3 sm:px-6 py-4 text-left font-semibold text-sm sm:text-base">Tue</th>
                  <th className="px-3 sm:px-6 py-4 text-left font-semibold text-sm sm:text-base">Wed</th>
                  <th className="px-3 sm:px-6 py-4 text-left font-semibold text-sm sm:text-base">Thu</th>
                  <th className="px-3 sm:px-6 py-4 text-left font-semibold text-sm sm:text-base">Fri</th>
                  <th className="px-3 sm:px-6 py-4 text-left font-semibold text-sm sm:text-base">Sat</th>
                  <th className="px-3 sm:px-6 py-4 text-left font-semibold text-sm sm:text-base">Sun</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <motion.tr 
                    key={index} 
                    className="hover:bg-gray-50 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <td className="px-3 sm:px-6 py-4 font-medium bg-gray-100 border-r border-gray-200 min-w-[80px]">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <span className="text-xs sm:text-sm whitespace-nowrap">{row.time}</span>
                      </div>
                    </td>
                    {[
                      row.monday,
                      row.tuesday,
                      row.wednesday,
                      row.thursday,
                      row.friday,
                      row.saturday,
                      row.sunday
                    ].map((cell, cellIndex) => (
                      <td 
                        key={cellIndex} 
                        className={getCellClasses(cell)}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <span className="text-xs sm:text-sm font-medium leading-tight">{cell.text}</span>
                          {cell.subject && (
                            <Badge 
                              className={`text-xs ${getSubjectColor(cell.subject)} text-white self-start sm:self-auto`}
                            >
                              {cell.subject}
                            </Badge>
                          )}
                        </div>
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        
        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="bg-gray-50 border-0">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Schedule Legend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-sm text-gray-700">1:1 Sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-700">Group Sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                                      <span className="text-sm text-gray-700">Workshops</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-700">Foundational English</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span className="text-sm text-gray-700">Foundational Maths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                  <span className="text-sm text-gray-700">Senior English</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-indigo-500 rounded"></div>
                  <span className="text-sm text-gray-700">Senior Maths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  <span className="text-sm text-gray-700">Homeschool Support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <motion.button 
            className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 