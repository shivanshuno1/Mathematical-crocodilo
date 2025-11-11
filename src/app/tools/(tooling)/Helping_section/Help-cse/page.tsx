"use client";

import { useState, useMemo } from 'react';
import './page.css';

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

// Real YouTube playlists for engineering subjects
const engineeringPlaylists: Playlist[] = [
  // Operating Systems Playlists
  {
    id: '1',
    title: 'Operating System - Complete Playlist',
    description: 'Complete operating systems course by Gate Smashers',
    subject: 'OS',
    instructor: 'Gate Smashers',
    level: 'Beginner',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p',
    thumbnail: 'https://img.youtube.com/vi/8XBtAjKwCm4/maxresdefault.jpg',
    videoCount: 59
  },
  {
    id: '2',
    title: 'Operating Systems - Neso Academy',
    description: 'Comprehensive OS lectures with animations and examples',
    subject: 'OS',
    instructor: 'Neso Academy',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O',
    thumbnail: 'https://img.youtube.com/vi/vBURTt97EkA/maxresdefault.jpg',
    videoCount: 105
  },

  // Networking Playlists
  {
    id: '3',
    title: 'Computer Networks - Complete Course',
    description: 'Complete computer networking course for beginners',
    subject: 'Networking',
    instructor: 'Gate Smashers',
    level: 'Beginner',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_',
    thumbnail: 'https://img.youtube.com/vi/JFF2vJaN0Cw/maxresdefault.jpg',
    videoCount: 72
  },
  {
    id: '4',
    title: 'Computer Networks - Neso Academy',
    description: 'Detailed networking concepts with practical examples',
    subject: 'Networking',
    instructor: 'Neso Academy',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx',
    thumbnail: 'https://img.youtube.com/vi/rmqpuW6QoKc/maxresdefault.jpg',
    videoCount: 195
  },

  // Data Structures & Algorithms Playlists
  {
    id: '5',
    title: 'Data Structures & Algorithms - CodeHelp',
    description: 'Complete DSA course with coding examples',
    subject: 'DSA',
    instructor: 'Love Babbar',
    level: 'Beginner',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA',
    thumbnail: 'https://img.youtube.com/vi/WQoB2z67hvY/maxresdefault.jpg',
    videoCount: 185
  },
  {
    id: '6',
    title: 'DSA - Striver Playlist',
    description: 'Advanced DSA for placements and competitive programming',
    subject: 'DSA',
    instructor: 'Take U Forward',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLgUwXviRr0Dh46EC3n66gnBr9t_k_0cBZ',
    thumbnail: 'https://img.youtube.com/vi/EgG5_47jhFA/maxresdefault.jpg',
    videoCount: 183
  },
  {
    id: '7',
    title: 'Algorithms - Abdul Bari',
    description: 'In-depth algorithm analysis and design',
    subject: 'DSA',
    instructor: 'Abdul Bari',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O',
    thumbnail: 'https://img.youtube.com/vi/0IAPZzGSbME/maxresdefault.jpg',
    videoCount: 99
  },
  {
    id: '8',
    title: 'Operating Systems in Depth',
    description: 'Advanced OS concepts and kernel programming',
    subject: 'OS',
    instructor: 'CS-IT Engineering Academy',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PL5-M_tYf311Zmu_9FyK1rQlR0YX9TBVh9',
    thumbnail: 'https://img.youtube.com/vi/RozoeWzT7IM/maxresdefault.jpg',
    videoCount: 42
  }
];

// Subject options for the dropdown
const subjectOptions = [
  { value: 'all', label: 'All Subjects' },
  { value: 'OS', label: 'Operating Systems' },
  { value: 'Networking', label: 'Computer Networking' },
  { value: 'DSA', label: 'Data Structures & Algorithms' }
];

// Level options for filtering
const levelOptions = [
  { value: 'all', label: 'All Levels' },
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' }
];

export default function StudentLearningPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Filter playlists based on search and filters
  const filteredPlaylists = useMemo(() => {
    return engineeringPlaylists.filter(playlist => {
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
            Engineering Learning Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive YouTube playlists for OS, Networking, and Data Structures & Algorithms
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
                      e.currentTarget.src = `https://via.placeholder.com/400x225/3B82F6/FFFFFF?text=${encodeURIComponent(playlist.subject)}`;
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
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
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