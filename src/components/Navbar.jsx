import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch, FaMoon, FaSun, FaBars, FaTimes, FaTimesCircle } from 'react-icons/fa';
import { toggleDarkMode } from '../store/slices/themeSlice';
import { searchArticles, clearSearch } from '../store/slices/articlesSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const filteredArticles = useSelector((state) => state.articles.filteredArticles);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      dispatch(searchArticles(searchQuery));
      navigate('/');
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const handleClearSearch = () => {
    dispatch(clearSearch());
    setSearchQuery('');
    navigate('/');
  };

  return (
    <nav className={`fixed w-full z-50 shadow-md ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold tracking-wide">Newspaper</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 translate-x-96">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative w-56 flex items-center">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 -translate-x-4 text-gray-500">
              <FaSearch />
            </button>
            {filteredArticles && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="ml-2 text-gray-500 hover:text-red-500"
              >
                <FaTimesCircle />
              </button>
            )}
          </form>
          
          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md">
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden px-4 py-3 space-y-3 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <Link to="/" className="block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Home</Link>
          <form onSubmit={handleSearch} className="flex items-center space-x-4 py-2 px-4">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full rounded-lg py-2 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
            />
            <button type="submit" className="text-gray-500">
              <FaSearch />
            </button>
            {filteredArticles && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="text-gray-500 hover:text-red-500"
              >
                <FaTimesCircle />
              </button>
            )}
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;