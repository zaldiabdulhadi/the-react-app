import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(function () {
        document.title = "Blog";
        async function getArticles() {
            const request = await fetch(
                "https://api.spaceflightnewsapi.net/v3/articles"
            );
            const response = await request.json();

            setArticles(response);
        }
        getArticles();
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);
    return (
        <section className="section">
            <h1 className="section-title">Blog</h1>
            <p className="section-description">
                Berikut ini adalah tulisan-tulisanku (tapi bo'ong) ✌
            </p>

            {!isLoading ? (
                <div className="articles">
                    {articles.map(function (article) {
                        return (
                            <article className="article" key={article.id}>
                                <h2 className="article-title">
                                    <Link to={`/blog/${article.id}`}>
                                        {article.title}
                                    </Link>
                                </h2>
                                <time className="article-time">
                                    {new Date(
                                        article.publishedAt
                                    ).toLocaleDateString()}
                                </time>
                            </article>
                        );
                    })}
                </div>
            ) : (
                <div>
                    <p>Loading articles ...</p>
                </div>
            )}
        </section>
    );
}
