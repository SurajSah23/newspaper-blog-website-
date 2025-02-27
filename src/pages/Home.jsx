import { useDispatch, useSelector } from 'react-redux';
import FeaturedArticles from '../components/FeaturedArticles';
import { clearSearch } from '../store/slices/articlesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const filteredArticles = useSelector((state) => state.articles.filteredArticles);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {filteredArticles !== null && (
        <button
          onClick={() => dispatch(clearSearch())}
          className="mb-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Clear Search
        </button>
      )}
      <FeaturedArticles />
    </div>
  );
};

export default Home;