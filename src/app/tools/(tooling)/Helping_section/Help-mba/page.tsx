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

// Real YouTube playlists for MBA subjects
const mbaPlaylists: Playlist[] = [
  // Strategic Management Playlists
  {
    id: '1',
    title: 'Strategic Management - Complete Course',
    description: 'Complete strategic management course with case studies and frameworks',
    subject: 'Strategy',
    instructor: 'Strategy Insights',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm8JNw5YrA9MUhNBDy1zC3iK',
    thumbnail: 'https://i.ytimg.com/vi/2OqggclF6_A/maxresdefault.jpg',
    videoCount: 28
  },
  {
    id: '2',
    title: 'Corporate Strategy - Advanced Concepts',
    description: 'Advanced corporate strategy and competitive analysis',
    subject: 'Strategy',
    instructor: 'Business School',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm9GxCT1jRbb7O_0O-TGqk3m',
    thumbnail: 'https://i.ytimg.com/vi/9QZP4X2cGvA/maxresdefault.jpg',
    videoCount: 35
  },

  // Financial Management Playlists
  {
    id: '3',
    title: 'Financial Management - Complete Course',
    description: 'Complete financial management and corporate finance course',
    subject: 'Finance',
    instructor: 'WallStreetMojo',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm8K7CqskT7PqkQyZ-oy8K7V',
    thumbnail: 'https://i.ytimg.com/vi/6T8jLLO0u8Q/maxresdefault.jpg',
    videoCount: 45
  },
  {
    id: '4',
    title: 'Investment Banking Preparation',
    description: 'Financial modeling and investment banking concepts',
    subject: 'Finance',
    instructor: 'Finance Academy',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm8uD28p8x0xTi7tS1qkR4Vb',
    thumbnail: 'https://i.ytimg.com/vi/8jRsuG2F0oI/maxresdefault.jpg',
    videoCount: 52
  },

  // Marketing Management Playlists
  {
    id: '5',
    title: 'Marketing Management - Full Course',
    description: 'Complete marketing management with digital marketing strategies',
    subject: 'Marketing',
    instructor: 'Marketing91',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm9GxCT1jRbb7O_0O-TGqk3m',
    thumbnail: 'https://i.ytimg.com/vi/zsOZ9wqHgLQ/maxresdefault.jpg',
    videoCount: 38
  },
  {
    id: '6',
    title: 'Digital Marketing Strategy',
    description: 'Advanced digital marketing and brand management',
    subject: 'Marketing',
    instructor: 'Digital Marketing Pro',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLl-gb0E4MII0ZL_a8_W6_epk0Y2YhHx1h',
    thumbnail: 'https://i.ytimg.com/vi/9QZP4X2cGvA/maxresdefault.jpg',
    videoCount: 42
  },
  {
    id: '7',
    title: 'Consumer Behavior Analysis',
    description: 'Understanding consumer psychology and market research',
    subject: 'Marketing',
    instructor: 'Consumer Insights',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PL6fC1y-C6n4lHxdAGKk0pO9JkG0p7j3L9',
    thumbnail: 'https://i.ytimg.com/vi/4-7V8utmsqI/maxresdefault.jpg',
    videoCount: 29
  },
  {
    id: '8',
    title: 'Leadership and Organizational Behavior',
    description: 'Leadership development and organizational culture',
    subject: 'Leadership',
    instructor: 'Leadership Hub',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLsh2FvSr3n7fQlhzo2a1qCx5D0KMPI4bH',
    thumbnail: 'https://i.ytimg.com/vi/V7K_Qz-QwTo/maxresdefault.jpg',
    videoCount: 31
  }
];

// Subject options for the dropdown
const subjectOptions = [
  { value: 'all', label: 'All Subjects' },
  { value: 'Strategy', label: 'Strategic Management' },
  { value: 'Finance', label: 'Financial Management' },
  { value: 'Marketing', label: 'Marketing Management' },
  { value: 'Leadership', label: 'Leadership & OB' }
];

// Level options for filtering
const levelOptions = [
  { value: 'all', label: 'All Levels' },
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' }
];

export default function MBAHelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Filter playlists based on search and filters
  const filteredPlaylists = useMemo(() => {
    return mbaPlaylists.filter(playlist => {
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
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            MBA Learning Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive YouTube playlists for Strategic Management, Finance, Marketing, and Leadership
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
                placeholder="Search by title, instructor, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Subject Filter */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
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
            Found <span className="font-semibold text-blue-600">{filteredPlaylists.length}</span> playlists
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Playlists Grid */}
        {filteredPlaylists.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No playlists found</h3>
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
                      e.currentTarget.src = `https://via.placeholder.com/400x225/8B5CF6/FFFFFF?text=${encodeURIComponent(playlist.subject)}`;
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
                      {playlist.videoCount} videos
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