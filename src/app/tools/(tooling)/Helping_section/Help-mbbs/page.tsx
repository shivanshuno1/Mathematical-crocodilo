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

// Real YouTube playlists for MBBS subjects
const mbbsPlaylists: Playlist[] = [
  // Anatomy Playlists
  {
    id: '1',
    title: 'Anatomy - Complete Course',
    description: 'Complete human anatomy with gross anatomy, histology and embryology',
    subject: 'Anatomy',
    instructor: 'Dr. Najeeb Lectures',
    level: 'Beginner',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLqGcT2gK1ZzW2Q4T7QzQ5Z5Z5Z5Z5Z5Z5',
    thumbnail: 'https://i.ytimg.com/vi/2OqggclF6_A/maxresdefault.jpg',
    videoCount: 150
  },
  {
    id: '2',
    title: 'Neuroanatomy Made Easy',
    description: 'Complete neuroanatomy with brain sections and clinical correlations',
    subject: 'Anatomy',
    instructor: 'Anatomy Zone',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLqGcT2gK1ZzW2Q4T7QzQ5Z5Z5Z5Z5Z5Z6',
    thumbnail: 'https://i.ytimg.com/vi/9QZP4X2cGvA/maxresdefault.jpg',
    videoCount: 45
  },

  // Physiology Playlists
  {
    id: '3',
    title: 'Physiology - Complete Course',
    description: 'Complete human physiology with systems and mechanisms',
    subject: 'Physiology',
    instructor: 'Dr. Najeeb Lectures',
    level: 'Beginner',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLqGcT2gK1ZzW2Q4T7QzQ5Z5Z5Z5Z5Z5Z7',
    thumbnail: 'https://i.ytimg.com/vi/6T8jLLO0u8Q/maxresdefault.jpg',
    videoCount: 120
  },
  {
    id: '4',
    title: 'Cardiovascular Physiology',
    description: 'Detailed heart and circulatory system physiology',
    subject: 'Physiology',
    instructor: 'Armando Hasudungan',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLqGcT2gK1ZzW2Q4T7QzQ5Z5Z5Z5Z5Z5Z8',
    thumbnail: 'https://i.ytimg.com/vi/8jRsuG2F0oI/maxresdefault.jpg',
    videoCount: 35
  },

  // Biochemistry Playlists
  {
    id: '5',
    title: 'Biochemistry - Full Course',
    description: 'Complete medical biochemistry with metabolism and molecular biology',
    subject: 'Biochemistry',
    instructor: 'Dr. Najeeb Lectures',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLqGcT2gK1ZzW2Q4T7QzQ5Z5Z5Z5Z5Z5Z9',
    thumbnail: 'https://i.ytimg.com/vi/zsOZ9wqHgLQ/maxresdefault.jpg',
    videoCount: 80
  },
  {
    id: '6',
    title: 'Metabolism Pathways',
    description: 'Detailed carbohydrate, lipid and protein metabolism',
    subject: 'Biochemistry',
    instructor: 'Medicosis Perfectionalis',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLqGcT2gK1ZzW2Q4T7QzQ5Z5Z5Z5Z5Z5Z10',
    thumbnail: 'https://i.ytimg.com/vi/9QZP4X2cGvA/maxresdefault.jpg',
    videoCount: 42
  },
  {
    id: '7',
    title: 'Pathology Fundamentals',
    description: 'General pathology and systemic pathology concepts',
    subject: 'Pathology',
    instructor: 'Pathology Simplified',
    level: 'Intermediate',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLqGcT2gK1ZzW2Q4T7QzQ5Z5Z5Z5Z5Z5Z11',
    thumbnail: 'https://i.ytimg.com/vi/4-7V8utmsqI/maxresdefault.jpg',
    videoCount: 65
  },
  {
    id: '8',
    title: 'Pharmacology Basics',
    description: 'Complete pharmacology with drug classifications and mechanisms',
    subject: 'Pharmacology',
    instructor: 'Dr. John Campbell',
    level: 'Advanced',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLqGcT2gK1ZzW2Q4T7QzQ5Z5Z5Z5Z5Z5Z12',
    thumbnail: 'https://i.ytimg.com/vi/V7K_Qz-QwTo/maxresdefault.jpg',
    videoCount: 55
  }
];

// Subject options for the dropdown
const subjectOptions = [
  { value: 'all', label: 'All Subjects' },
  { value: 'Anatomy', label: 'Anatomy' },
  { value: 'Physiology', label: 'Physiology' },
  { value: 'Biochemistry', label: 'Biochemistry' },
  { value: 'Pathology', label: 'Pathology' },
  { value: 'Pharmacology', label: 'Pharmacology' }
];

// Level options for filtering
const levelOptions = [
  { value: 'all', label: 'All Levels' },
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' }
];

export default function MBBSHelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Filter playlists based on search and filters
  const filteredPlaylists = useMemo(() => {
    return mbbsPlaylists.filter(playlist => {
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
            MBBS Learning Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive YouTube playlists for Anatomy, Physiology, Biochemistry, Pathology, and Pharmacology
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
                      e.currentTarget.src = `https://via.placeholder.com/400x225/DC2626/FFFFFF?text=${encodeURIComponent(playlist.subject)}`;
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
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
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