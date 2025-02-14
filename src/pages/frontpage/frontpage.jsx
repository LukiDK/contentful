import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../client/contentfulClient";
import { Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FrontpageStyled } from "./frontpage.styled";

export const Frontpage = () => {
    const [articleData, setArticleData] = useState();

    const { category } = useParams();

    console.log(category);

    useEffect(() => {
        client
            .getEntries({
                content_type: "newsArticle",
            })
            .then((result) => {
                const filteredData =
                    category && category !== "alle"
                        ? result.items.filter(
                              (item) => item.fields.category === category
                          )
                        : result.items;
                setArticleData(filteredData);
            })
            .catch((err) => console.log(err));
    }, [category]);

    console.log(articleData);

    return (
        <FrontpageStyled>
            {articleData?.map((article, index) => {
                return (
                    <div
                        key={article.fields.slug}
                        className={`article article-${index + 1}`}
                    >
                        <Link to={`/details/${article.fields.slug}`}>
                            <h2 className="title">{article.fields.title}</h2>
                        </Link>
                        <div className="article-text">
                            {documentToReactComponents(article.fields.text)}
                        </div>
                        <p className="info">
                            D.
                            {new Date(
                                article.fields.releaseDate
                            ).toLocaleDateString()}
                            -{article.fields.byline}
                        </p>
                        <img
                            src={`https:${article.fields.articleImg.fields.file.url}`}
                            alt={article.fields.title}
                        />
                    </div>
                );
            })}
        </FrontpageStyled>
    );
};
