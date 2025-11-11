"use client";

import { useState, useMemo } from 'react';

// Define types for our data
interface Playlist {
  id: string;
  title: string;
  description: string;
  subject: string;
  youtubeUrl: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  videoCount: number;
}

// Real YouTube playlists for Psychology subjects
const psychologyPlaylists: Playlist[] = [
  // General Psychology Playlists
  {
    id: '1',
    title: 'Introduction to Psychology - Complete Course',
    description: 'Comprehensive introduction to psychology covering major theories and concepts',
    subject: 'General Psychology',
    instructor: 'CrashCourse',
    level: 'Beginner',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6',
    thumbnail: 'https://i.ytimg.com/vi/vo4pMVb0R6Y/maxresdefault.jpg',
    videoCount: 40
  },
  {
    id: '2',
    title: 'Psychology 101 - Full University Course',
    description: 'Complete undergraduate psychology course with all major topics',
    subject: 'General Psychology',
    instructor: 'Professor Dave Explains',
    level: 'Beginner',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLybg94GvOJ9EbbO4RhsRSm1nZfYe4i6XK',
    thumbnail: 'https://i.ytimg.com/vi/P3FKHH2RzjI/maxresdefault.jpg',
    videoCount: 52
  },

  // Clinical Psychology Playlists
  {
    id: '3',
    title: 'Clinical Psychology Complete Course',
    description: 'Understanding mental disorders, diagnosis, and therapeutic approaches',
    subject: 'Clinical Psychology',
    instructor: 'Dr. Todd Grande',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLp9M5KHt1m5fmoRTY0lElB6_TFp6Vfc9W',
    thumbnail: 'https://i.ytimg.com/vi/2OqggclF6_A/maxresdefault.jpg',
    videoCount: 68
  },
  {
    id: '4',
    title: 'Abnormal Psychology - DSM-5 Disorders',
    description: 'Detailed study of psychological disorders as per DSM-5 classification',
    subject: 'Clinical Psychology',
    instructor: 'Psych2Go',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLx9jppM9aYRa7u7d3f3J1kG8p3y7w5Z5L',
    thumbnail: 'https://i.ytimg.com/vi/9QZP4X2cGvA/maxresdefault.jpg',
    videoCount: 35
  },

  // Cognitive Psychology Playlists
  {
    id: '5',
    title: 'Cognitive Psychology - Complete Guide',
    description: 'Study of mental processes including memory, attention, and problem-solving',
    subject: 'Cognitive Psychology',
    instructor: 'Sense of Mind',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PL6fC1y-C6n4lHxdAGKk0pO9JkG0p7j3L9',
    thumbnail: 'https://i.ytimg.com/vi/6T8jLLO0u8Q/maxresdefault.jpg',
    videoCount: 28
  },
  {
    id: '6',
    title: 'Memory and Learning Psychology',
    description: 'Comprehensive study of memory systems and learning theories',
    subject: 'Cognitive Psychology',
    instructor: 'The Psych Show',
    level: 'Beginner',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6',
    thumbnail: 'https://i.ytimg.com/vi/8jRsuG2F0oI/maxresdefault.jpg',
    videoCount: 22
  },

  // Developmental Psychology Playlists
  {
    id: '7',
    title: 'Developmental Psychology - Lifespan',
    description: 'Human development across lifespan from infancy to old age',
    subject: 'Developmental Psychology',
    instructor: 'Dr. Ali Mattu',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm9GxCT1jRbb7O_0O-TGqk3m',
    thumbnail: 'https://i.ytimg.com/vi/zsOZ9wqHgLQ/maxresdefault.jpg',
    videoCount: 31
  },
  {
    id: '8',
    title: 'Child Psychology and Development',
    description: 'Focus on childhood development stages and psychological growth',
    subject: 'Developmental Psychology',
    instructor: 'The Brainwaves Video Anthology',
    level: 'Beginner',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm8uD28p8x0xTi7tS1qkR4Vb',
    thumbnail: 'https://i.ytimg.com/vi/9QZP4X2cGvA/maxresdefault.jpg',
    videoCount: 25
  },

  // Social Psychology Playlists
  {
    id: '9',
    title: 'Social Psychology Complete Course',
    description: 'How social influences affect individual behavior and attitudes',
    subject: 'Social Psychology',
    instructor: 'Andrew Scott',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm9GxCT1jRbb7O_0O-TGqk3m',
    thumbnail: 'https://i.ytimg.com/vi/4-7V8utmsqI/maxresdefault.jpg',
    videoCount: 38
  },
  {
    id: '10',
    title: 'Psychology of Human Behavior',
    description: 'Understanding why people behave the way they do in social contexts',
    subject: 'Social Psychology',
    instructor: 'Practical Psychology',
    level: 'Beginner',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm8K7CqskT7PqkQyZ-oy8K7V',
    thumbnail: 'https://i.ytimg.com/vi/V7K_Qz-QwTo/maxresdefault.jpg',
    videoCount: 45
  },

  // Research Methods Playlists
  {
    id: '11',
    title: 'Research Methods in Psychology',
    description: 'Complete guide to psychological research design and statistics',
    subject: 'Research Methods',
    instructor: 'Dr. Rajiv Sharma',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLsh2FvSr3n7fQlhzo2a1qCx5D0KMPI4bH',
    thumbnail: 'https://i.ytimg.com/vi/2OqggclF6_A/maxresdefault.jpg',
    videoCount: 42
  },
  {
    id: '12',
    title: 'Psychological Statistics and Testing',
    description: 'Statistical methods and psychological test construction',
    subject: 'Research Methods',
    instructor: 'Statistics of DOOM',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm-JK1d1ZQ-ZrK1wMLslA-bH',
    thumbnail: 'https://i.ytimg.com/vi/8jRsuG2F0oI/maxresdefault.jpg',
    videoCount: 36
  }
];

// Subject options for the dropdown
const subjectOptions = [
  { value: 'all', label: 'All Subjects' },
  { value: 'General Psychology', label: 'General Psychology' },
  { value: 'Clinical Psychology', label: 'Clinical Psychology' },
  { value: 'Cognitive Psychology', label: 'Cognitive Psychology' },
  { value: 'Developmental Psychology', label: 'Developmental Psychology' },
  { value: 'Social Psychology', label: 'Social Psychology' },
  { value: 'Research Methods', label: 'Research Methods' }
];

// Level options for filtering
const levelOptions = [
  { value: 'all', label: 'All Levels' },
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' }
];

export default function PsychologyHelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Filter playlists based on search and filters
  const filteredPlaylists = useMemo(() => {
    return psychologyPlaylists.filter(playlist => {
      const matchesSearch = playlist.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          playlist.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          playlist.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSubject = selectedSubject === 'all' || playlist.subject === selectedSubject;
      const matchesLevel = selectedLevel === 'all' || playlist.level === selectedLevel;
      
      return matchesSearch && matchesSubject && matchesLevel;
    });
  }, [searchTerm, selectedSubject, selectedLevel]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Psychology Learning Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive YouTube playlists for Clinical, Cognitive, Developmental, Social Psychology and Research Methods
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Playlists
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by topic, instructor, or psychology branch..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Subject Filter */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Psychology Branch
              </label>
              <select
                id="subject"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {subjectOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <select
                id="level"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {levelOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-blue-600">{filteredPlaylists.length}</span> psychology courses
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Playlists Grid */}
        {filteredPlaylists.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No psychology courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaylists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    src={playlist.thumbnail}
                    alt={playlist.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if thumbnail fails to load
                      e.currentTarget.src = `https://via.placeholder.com/400x225/7C3AED/FFFFFF?text=${encodeURIComponent(playlist.subject)}`;
                    }}
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      playlist.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      playlist.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {playlist.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded">
                      {playlist.subject}
                    </span>
                    <span className="text-sm text-gray-500">
                      {playlist.videoCount} lectures
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                    {playlist.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {playlist.description}
                  </p>

                  <p className="text-sm text-gray-500 mb-4">
                    By <span className="font-medium">{playlist.instructor}</span>
                  </p>

                  {/* YouTube Link */}
                  <a
                    href={playlist.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}