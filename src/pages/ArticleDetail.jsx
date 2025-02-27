import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addComment, editComment, deleteComment } from '../store/slices/articlesSlice';

const ArticleDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((state) =>
    state.articles.articles.find((a) => a.id === id)
  );
  const [comment, setComment] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentContent, setEditCommentContent] = useState('');

  if (!article) {
    return <div className="text-center text-gray-500 py-20">Article not found</div>;
  }

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    dispatch(
      addComment({
        id: Date.now().toString(),
        articleId: article.id,
        author: 'Anonymous',
        content: comment,
        date: new Date().toISOString(),
      })
    );
    setComment('');
  };

  const handleEditComment = (comment) => {
    setEditCommentId(comment.id);
    setEditCommentContent(comment.content);
  };

  const handleUpdateComment = (e, commentId) => {
    e.preventDefault();
    if (!editCommentContent.trim()) return;

    dispatch(
      editComment({
        articleId: article.id,
        commentId,
        content: editCommentContent,
      })
    );
    setEditCommentId(null);
    setEditCommentContent('');
  };

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment({
      articleId: article.id,
      commentId,
    }));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12 bg-gray-50 rounded-xl shadow-lg">
      <br />
      <br />
      <div className="overflow-hidden rounded-xl mb-6">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-72 md:h-96 object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{article.title}</h1>
        <div className="text-gray-600 flex flex-wrap justify-center md:justify-start gap-2 text-sm md:text-base">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span className="bg-blue-500 text-white px-2 py-1 rounded-md">{article.category}</span>
        </div>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed mt-6">{article.content}</p>

      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comments</h3>
        <form onSubmit={handleSubmitComment} className="flex flex-col gap-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Comment
          </button>
        </form>
      </div>

      <div className="mt-6">
        {article.comments.length > 0 ? (
          <div className="space-y-4">
            {article.comments.map((comment) => (
              <div key={comment.id} className="bg-white p-4 rounded-lg shadow-md">
                {editCommentId === comment.id ? (
                  <form onSubmit={(e) => handleUpdateComment(e, comment.id)} className="flex flex-col gap-2">
                    <textarea
                      value={editCommentContent}
                      onChange={(e) => setEditCommentContent(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      rows={2}
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditCommentId(null)}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">{comment.author}</span>
                      <span className="text-gray-500 text-sm">
                        {new Date(comment.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-700">{comment.content}</p>
                    <div className="mt-2 flex gap-2">
                      <button
                        onClick={() => handleEditComment(comment)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-4">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;