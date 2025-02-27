import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './slices/articlesSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    theme: themeReducer,
  },
});

export default store;
