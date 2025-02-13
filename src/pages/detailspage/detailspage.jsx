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
                    <p className="title">{article.fields.title}</p>

                    <p className="info">
                        {article.fields.byline} -
                        {new Date(
                            article.fields.releaseDate
                        ).toLocaleDateString()}
                    </p>
                    <div className="article-content">
                        {documentToReactComponents(article.fields.text)}
                    </div>
                </DetailspageStyled>
            ))}
        </>
    );
};
