import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa';
import { MdRepeat, MdShuffle } from 'react-icons/md';

const Home = () => {
  const recentlyPlayed = [
    { id: 1, name: 'Playlist 1', description: 'Description', image: 'https://picsum.photos/200/200?random=1' },
    { id: 2, name: 'Playlist 2', description: 'Description', image: 'https://picsum.photos/200/200?random=2' },
    { id: 3, name: 'Playlist 3', description: 'Description', image: 'https://picsum.photos/200/200?random=3' },
    { id: 4, name: 'Playlist 4', description: 'Description', image: 'https://picsum.photos/200/200?random=4' },
    { id: 5, name: 'Playlist 5', description: 'Description', image: 'https://picsum.photos/200/200?random=5' },
    { id: 6, name: 'Playlist 6', description: 'Description', image: 'https://picsum.photos/200/200?random=6' },
  ];

  const madeForYou = [
    { id: 1, name: 'Daily Mix 1', artists: 'Artist names', image: 'https://picsum.photos/200/200?random=7' },
    { id: 2, name: 'Daily Mix 2', artists: 'Artist names', image: 'https://picsum.photos/200/200?random=8' },
    { id: 3, name: 'Daily Mix 3', artists: 'Artist names', image: 'https://picsum.photos/200/200?random=9' },
    { id: 4, name: 'Daily Mix 4', artists: 'Artist names', image: 'https://picsum.photos/200/200?random=10' },
    { id: 5, name: 'Daily Mix 5', artists: 'Artist names', image: 'https://picsum.photos/200/200?random=11' },
    { id: 6, name: 'Daily Mix 6', artists: 'Artist names', image: 'https://picsum.photos/200/200?random=12' },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-gradient-to-b from-purple-900 to-pink-900 p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Recently played</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-8">
          {recentlyPlayed.map((playlist) => (
            <div key={playlist.id} className="bg-white bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-colors group">
              <img src={playlist.image} alt={playlist.name} className="w-full aspect-square object-cover rounded-md mb-4 shadow-lg" />
              <p className="font-semibold truncate text-white">{playlist.name}</p>
              <p className="text-sm text-gray-300 truncate">{playlist.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-white">Made For You</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {madeForYou.map((mix) => (
            <div key={mix.id} className="bg-white bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-colors group">
              <img src={mix.image} alt={mix.name} className="w-full aspect-square object-cover rounded-md mb-4 shadow-lg" />
              <p className="font-semibold truncate text-white">{mix.name}</p>
              <p className="text-sm text-gray-300 truncate">{mix.artists}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Player */}
      <div className="bg-black bg-opacity-30 border-t border-white border-opacity-10 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 w-1/4">
            <img src="https://picsum.photos/56/56?random=20" alt="Now playing" className="w-14 h-14 rounded" />
            <div>
              <p className="font-semibold">Song Name</p>
              <p className="text-sm text-gray-400">Artist Name</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <div className="flex items-center space-x-6 mb-2">
              <MdShuffle className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <FaStepBackward className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <button className="bg-white rounded-full p-2">
                <FaPlay className="text-black" size={24} />
              </button>
              <FaStepForward className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <MdRepeat className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            </div>
            <div className="flex items-center w-full">
              <span className="text-xs text-gray-400 mr-2">1:23</span>
              <div className="w-full bg-gray-600 rounded-full h-1">
                <div className="bg-white w-1/3 h-1 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400 ml-2">3:45</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-1/4 justify-end">
            <FaVolumeUp className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            <div className="w-24 bg-gray-600 rounded-full h-1">
              <div className="bg-white w-2/3 h-1 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;