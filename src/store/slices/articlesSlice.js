import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [
    {
      id: '1',
      title: 'Quantum Computing: The Next Tech Revolution',
      excerpt: 'Velit cillum commodo adipisicing excepteur irure aute. Velit sit eu Lorem et ea ea aliquip nulla et officia et irure laborum. Cillum et ipsum laboris excepteur quis ut sit velit cillum cillum occaecat. Magna consequat commodo deserunt dolor.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Technology',
      author: 'John Doe',
      date: '2024-03-15',
      imageUrl: 'https://media.istockphoto.com/id/2012393906/photo/big-data-analysis-with-ai-technology-person-using-machine-learning-and-deep-learning-neural.webp?a=1&b=1&s=612x612&w=0&k=20&c=EOjmnc2Jp-_U3gJrOUNgJR8vXnwma39V58CEwewLsL8=',
      featured: true,
      comments: [],
    },
    {
      id: '2',
      title: 'The Impact of 5G on Smart Cities',
      excerpt: 'Velit cillum commodo adipisicing excepteur irure aute. Velit sit eu Lorem et ea ea aliquip nulla et officia et irure laborum. Cillum et ipsum laboris excepteur quis ut sit velit cillum cillum occaecat. Magna consequat commodo deserunt dolor.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Environment',
      author: 'Jane Smith',
      date: '2024-03-14',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1727080902443-57aaef898b8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRoZSUyMEltcGFjdCUyMG9mJTIwNUclMjBvbiUyMFNtYXJ0JTIwQ2l0aWVzfGVufDB8fDB8fHww',
      featured: true,
      comments: [],
    },
    {
      id: '3',
      title: 'Cybersecurity in 2025: What You Need to Know',
      excerpt: 'Velit cillum commodo adipisicing excepteur irure aute. Velit sit eu Lorem et ea ea aliquip nulla et officia et irure laborum. Cillum et ipsum laboris excepteur quis ut sit velit cillum cillum occaecat. Magna consequat commodo deserunt dolor.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Technology',
      author: 'Jane Smith',
      date: '2024-03-14',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q3liZXJzZWN1cml0eSUyMGluJTIwMjAyNSUzQSUyMFdoYXQlMjBZb3UlMjBOZWVkJTIwdG8lMjBLbm93fGVufDB8fDB8fHww',
      featured: true,
      comments: [],
    },
    {
      id: '4',
      title: 'The Future of Remote Work: Trends and Predictions',
      excerpt: 'Velit sit eu Lorem et ea ea aliquip nulla et officia et irure laborum. Cillum et ipsum laboris excepteur quis ut sit velit cillum cillum occaecat. Magna consequat commodo deserunt dolor.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Technology',
      author: 'Jane Smith',
      date: '2024-03-14',
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRoZSUyMEZ1dHVyZSUyMG9mJTIwUmVtb3RlJTIwV29yayUzQSUyMFRyZW5kcyUyMGFuZCUyMFByZWRpY3Rpb25zfGVufDB8fDB8fHww',
      featured: true,
      comments: [],
    },
    {
      id: '5',
      title: 'Climate Change: A Global Crisis',
      excerpt: 'Velit cillum commodo adipisicing excepteur irure aute. Velit sit eu Lorem et ea ea aliquip nulla et officia et irure laborum. Cillum et ipsum laboris excepteur quis ut sit velit cillum cillum occaecat. Magna consequat commodo deserunt dolor.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Environment',
      author: 'Jane Smith',
      date: '2024-03-14',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1681487077388-5a2c641a1e21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2xpbWF0ZSUyMENoYW5nZSUzQSUyMEElMjBHbG9iYWwlMjBDcmlzaXN8ZW58MHx8MHx8fDA%3D',
      featured: true,
      comments: [],
    },
    {
      id: '6',
      title: 'How Blockchain is Changing the Finance Industry',
      excerpt: 'Velit cillum commodo adipisicing excepteur irure aute. Velit sit eu Lorem et ea ea aliquip nulla et officia et irure laborum. Cillum et ipsum laboris excepteur quis ut sit velit cillum cillum occaecat. Magna consequat commodo deserunt dolor.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Finance',
      author: 'Jane Smith',
      date: '2024-03-14',
      imageUrl: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG93JTIwQmxvY2tchaGFpbiUyMGlzJTIwQ2hhbmdpbmclMjB0aGUlMjBGaW5hbmNlJTIwSW5kdXN0cnl8ZW58MHx8MHx8fDA%3D',
      featured: true,
      comments: [],
    },
  ],
  filteredArticles: null,
  loading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    addComment: (state, action) => {
      const { articleId, ...commentData } = action.payload;
      const article = state.articles.find((a) => a.id === articleId);
      if (article) {
        article.comments.push(commentData);
      }
    },
    editComment: (state, action) => {
      const { articleId, commentId, content } = action.payload;
      const article = state.articles.find((a) => a.id === articleId);
      if (article) {
        const comment = article.comments.find((c) => c.id === commentId);
        if (comment) {
          comment.content = content;
          comment.date = new Date().toISOString(); // Update timestamp
        }
      }
    },
    deleteComment: (state, action) => {
      const { articleId, commentId } = action.payload;
      const article = state.articles.find((a) => a.id === articleId);
      if (article) {
        article.comments = article.comments.filter((c) => c.id !== commentId);
      }
    },
    searchArticles: (state, action) => {
      const query = action.payload.toLowerCase().trim();
      if (query === '') {
        state.filteredArticles = null;
      } else {
        state.filteredArticles = state.articles.filter(
          (article) =>
            article.title.toLowerCase().includes(query) ||
            article.category.toLowerCase().includes(query) ||
            article.excerpt.toLowerCase().includes(query)
        );
      }
    },
    clearSearch: (state) => {
      state.filteredArticles = null;
    },
  },
});

export const { addArticle, addComment, editComment, deleteComment, searchArticles, clearSearch } = articlesSlice.actions;
export default articlesSlice.reducer;