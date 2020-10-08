export const getArticles = async () => {
  const res = await fetch(`http://localhost:8888/api/articles/`);
  let data = await res.json();
  return data;
};

export const checkForArticle = async (title) => {
  const res = await fetch(`http://localhost:8888/api/articles/`);
  const articles = await res.json();
  const foundArticle = articles.find((article) => {
    return article.title === title;
  });
  if (foundArticle) {
    return false;
  } else {
    return true;
  }
};
