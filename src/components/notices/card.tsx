import { useEffect, useState } from "react";

const API_KEY = "a846022e95344ba99dad5080f2865cb2";

interface Article {
  title: string;
  description: string;
  author: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
}

const Card = () => {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`);
        const data = await response.json();
        setNews(data.articles);
        console.log(data.articles);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      {news.map((article, index) => (
        <div key={index} className="flex flex-col justify-center items-center mt-10">
          <div className="">
            <h2 className="text-3xl font-semibold">{article.title}</h2>
            <div className="flex gap-2">
              <p>{article.author}</p>
              <p>{article.publishedAt}</p>
            </div>
          </div>
          <h3>{article.description}</h3>
          <p>{article.content}</p>

          {article.urlToImage && <img src={article.urlToImage} alt="image" />}
        </div>
      ))}
    </div>
  );
};

export default Card;
