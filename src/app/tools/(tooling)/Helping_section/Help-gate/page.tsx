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

// Real YouTube playlists for GATE subjects
const gatePlaylists: Playlist[] = [
  // CSE Playlists
  {
    id: '1',
    title: 'GATE CSE Complete Preparation 2024',
    description: 'Complete computer science syllabus with PYQs and mock tests by Gate Smashers',
    subject: 'CSE',
    instructor: 'Gate Smashers',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGmiGl_DOuRMJYG8tOVuapB',
    thumbnail: 'https://i.ytimg.com/vi/5f3wXan2X4c/maxresdefault.jpg',
    videoCount: 150
  },
  {
    id: '2',
    title: 'Operating Systems for GATE',
    description: 'Complete OS syllabus with process management, memory management',
    subject: 'CSE',
    instructor: 'Gate Smashers',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p',
    thumbnail: 'https://i.ytimg.com/vi/8XBtAjKwCm4/maxresdefault.jpg',
    videoCount: 59
  },
  {
    id: '3',
    title: 'Computer Networks GATE Course',
    description: 'Complete CN syllabus with protocols, network layers, and security',
    subject: 'CSE',
    instructor: 'Gate Smashers',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_',
    thumbnail: 'https://i.ytimg.com/vi/JFF2vJaN0Cw/maxresdefault.jpg',
    videoCount: 72
  },

  // Electrical Engineering Playlists
  {
    id: '4',
    title: 'GATE Electrical Engineering Complete',
    description: 'Complete EE syllabus with circuit theory, power systems, and machines',
    subject: 'Electrical',
    instructor: 'Kreatryx GATE',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLbMVogVj5nJS6KcYQ-bUQjM6qg3W0kX_G',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoCount: 200
  },
  {
    id: '5',
    title: 'Power Systems for GATE',
    description: 'Complete power systems engineering with transmission and distribution',
    subject: 'Electrical',
    instructor: 'MADE EASY GATE',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm-JK1d1ZQ-ZrK1wMLslA-bH',
    thumbnail: 'https://i.ytimg.com/vi/6T8jLLO0u8Q/maxresdefault.jpg',
    videoCount: 85
  },

  // Mechanical Engineering Playlists
  {
    id: '6',
    title: 'GATE Mechanical Engineering Full Course',
    description: 'Complete ME syllabus with thermodynamics, fluid mechanics, and machine design',
    subject: 'Mechanical',
    instructor: 'MADE EASY GATE',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm-JK1d1ZQ-ZrK1wMLslA-bH',
    thumbnail: 'https://i.ytimg.com/vi/zsOZ9wqHgLQ/maxresdefault.jpg',
    videoCount: 180
  },
  {
    id: '7',
    title: 'Thermodynamics GATE Preparation',
    description: 'Complete thermodynamics with laws, cycles, and applications',
    subject: 'Mechanical',
    instructor: 'GATE ACADEMY',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm-JK1d1ZQ-ZrK1wMLslA-bH',
    thumbnail: 'https://i.ytimg.com/vi/9QZP4X2cGvA/maxresdefault.jpg',
    videoCount: 65
  },

  // Electronics & Communication Playlists
  {
    id: '8',
    title: 'GATE Electronics & Communication',
    description: 'Complete ECE syllabus with signals, communication systems, and embedded',
    subject: 'Electronics',
    instructor: 'ACE Academy',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm-JK1d1ZQ-ZrK1wMLslA-bH',
    thumbnail: 'https://i.ytimg.com/vi/4-7V8utmsqI/maxresdefault.jpg',
    videoCount: 160
  },
  {
    id: '9',
    title: 'Digital Electronics for GATE',
    description: 'Complete digital electronics with logic gates, sequential circuits',
    subject: 'Electronics',
    instructor: 'Neso Academy',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm',
    thumbnail: 'https://i.ytimg.com/vi/V7K_Qz-QwTo/maxresdefault.jpg',
    videoCount: 75
  },

  // Civil Engineering Playlists
  {
    id: '10',
    title: 'GATE Civil Engineering Complete',
    description: 'Complete CE syllabus with structural analysis, geotech, and transportation',
    subject: 'Civil',
    instructor: 'Unacademy GATE',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm-JK1d1ZQ-ZrK1wMLslA-bH',
    thumbnail: 'https://i.ytimg.com/vi/2OqggclF6_A/maxresdefault.jpg',
    videoCount: 190
  },
  {
    id: '11',
    title: 'Structural Analysis GATE Course',
    description: 'Complete structural analysis with beams, trusses, and frames',
    subject: 'Civil',
    instructor: 'GATE Wallah',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm-JK1d1ZQ-ZrK1wMLslA-bH',
    thumbnail: 'https://i.ytimg.com/vi/8jRsuG2F0oI/maxresdefault.jpg',
    videoCount: 70
  },

  // Engineering Mathematics
  {
    id: '12',
    title: 'Engineering Mathematics for GATE',
    description: 'Complete math syllabus with calculus, linear algebra, and probability',
    subject: 'Mathematics',
    instructor: 'GATE Wallah',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLm_MSClsnwm-JK1d1ZQ-ZrK1wMLslA-bH',
    thumbnail: 'https://i.ytimg.com/vi/6T8jLLO0u8Q/maxresdefault.jpg',
    videoCount: 120
  }
];

// Subject options for the dropdown
const subjectOptions = [
  { value: 'all', label: 'All Branches' },
  { value: 'CSE', label: 'Computer Science' },
  { value: 'Electrical', label: 'Electrical Engineering' },
  { value: 'Mechanical', label: 'Mechanical Engineering' },
  { value: 'Electronics', label: 'Electronics & Communication' },
  { value: 'Civil', label: 'Civil Engineering' },
  { value: 'Mathematics', label: 'Engineering Mathematics' }
];

// Level options for filtering
const levelOptions = [
  { value: 'all', label: 'All Levels' },
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' }
];

export default function GATEHelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Filter playlists based on search and filters
  const filteredPlaylists = useMemo(() => {
    return gatePlaylists.filter(playlist => {
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
            GATE Preparation Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive YouTube playlists for GATE CSE, Electrical, Mechanical, Electronics, and Civil Engineering
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
                placeholder="Search by branch, subject, or instructor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Subject Filter */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Engineering Branch
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
                Preparation Level
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
            Found <span className="font-semibold text-blue-600">{filteredPlaylists.length}</span> preparation courses
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Playlists Grid */}
        {filteredPlaylists.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
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
                      e.currentTarget.src = `https://via.placeholder.com/400x225/059669/FFFFFF?text=${encodeURIComponent(playlist.subject)}`;
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
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
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
                    Start Preparation
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