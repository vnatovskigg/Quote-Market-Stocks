export const getArticles = async () => {
  const res = await fetch(`http://localhost:8888/api/articles/`);
  const data = await res.json();
  return data;
};
