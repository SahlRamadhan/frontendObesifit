const ArticleStats = ({ totalArticles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Artikel</h2>
        <p className="text-4xl font-bold text-gray-800">{totalArticles}</p>
      </div>
    </div>
  );
};

export default ArticleStats;
