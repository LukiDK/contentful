import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../client/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { DetailspageStyled } from "./detailspage.styled";

export const Detailspage = () => {
    const { articleID } = useParams();

    const [articleDetails, setArticleDetails] = useState();

    useEffect(() => {
        client
            .getEntries({
                content_type: "newsArticle",
                "fields.slug": articleID,
            })
            .then((data) => setArticleDetails(data))
            .catch((err) => console.log(err));
    }, [articleID]);

    return (
        <>
            {articleDetails?.items?.map((article) => (
                <DetailspageStyled key={article.sys.id} className="article">
                    <img
                        src={
                            "https:" + article.fields.articleImg.fields.file.url
                        }
                        alt={article.fields.articleImg.fields.title}
                    />
                    <div className="article-textcontent">
                        <p className="title">{article.fields.title}</p>

                        <p className="info">
                            D.
                            {new Date(
                                article.fields.releaseDate
                            ).toLocaleDateString()}
                            -{article.fields.byline}
                        </p>
                        <div className="article-text">
                            {documentToReactComponents(article.fields.text)}
                        </div>
                    </div>
                </DetailspageStyled>
            ))}
        </>
    );
};
