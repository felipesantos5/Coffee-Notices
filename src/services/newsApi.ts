import { Article} from '../types/types';

const filterUniqueArticles = (articles: Article[]): Article[] => {
  const uniqueArticles: Article[] = [];
  articles.forEach((article: Article) => {
    if (!uniqueArticles.some((existingArticle) => existingArticle.title === article.title)) {
      uniqueArticles.push(article);
    }
  });
  return uniqueArticles;
};

export const fetchNewsData = async (): Promise<Article[]> => {
  const API_KEY = "567cd3f60932e5ac2fb5479ab5698354";
  const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const uniqueArticles = filterUniqueArticles(data.articles);

    return uniqueArticles;
  } catch (error) {
    throw new Error("Error fetching news data");
  }
};
