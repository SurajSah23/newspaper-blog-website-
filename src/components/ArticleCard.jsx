import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article, featured }) => {
  return (
    <div
      className={`w-full max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        featured ? 'md:max-w-2xl' : ''
      }`}
    >
      <Link to={`/article/${article.id}`} className="block">
        <div className="relative">
          <img
            src={article.imageUrl}
            alt={article.title}
            className={`w-full object-cover transition-opacity duration-300 hover:opacity-90 ${
              featured ? 'h-64 sm:h-80 md:h-96' : 'h-48 sm:h-56'
            }`}
          />
          {featured && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-pink-600 text-white px-3 py-1 rounded-lg text-xs sm:text-sm font-medium">
              Featured
            </div>
          )}
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-xs sm:text-sm text-gray-600">
            <span className="bg-gray-100 px-2 py-1 rounded">{article.category}</span>
            <span className="text-gray-500">•</span>
            <span>{article.date}</span>
          </div>
          <h3
            className={`font-bold text-gray-900 line-clamp-2 mb-3 ${
              featured ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg sm:text-xl'
            }`}
          >
            {article.title}
          </h3>
          <p
            className={`text-gray-600 mb-4 line-clamp-3 ${
              featured ? 'text-base' : 'text-sm sm:text-base'
            }`}
          >
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-sm text-gray-700 font-medium">{article.author}</span>
            <span className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base transition-colors duration-200 flex items-center gap-1">
              Read More
              <span className="text-lg">→</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
  featured: PropTypes.bool,
};

export default ArticleCard;