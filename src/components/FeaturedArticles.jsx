import { useSelector } from 'react-redux';
import ArticleCard from './ArticleCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const FeaturedArticles = () => {
  const articles = useSelector((state) => state.articles.articles);
  const filteredArticles = useSelector((state) => state.articles.filteredArticles);
  const displayArticles = filteredArticles !== null ? filteredArticles : articles.filter((article) => article.featured);

  return (
    <section className="mb-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        {filteredArticles !== null ? 'Search Results' : 'Recent Articles'}
      </h2>
      {displayArticles.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No articles found.</p>
      ) : (
        <>
          {/* Mobile View: Swiper Carousel */}
          <div className="block md:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="w-full"
            >
              {displayArticles.map((article) => (
                <SwiperSlide key={article.id}>
                  <ArticleCard article={article} featured={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Desktop View: Grid Layout */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayArticles.map((article) => (
              <ArticleCard key={article.id} article={article} featured={true} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default FeaturedArticles;