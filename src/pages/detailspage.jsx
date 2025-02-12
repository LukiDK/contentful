import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
        <div>
            {" "}
            {articleDetails?.items?.map((article) => {
                return (
                    <div key={article.sys.id}>
                        <h1>{article.fields.title}</h1>
                        <img
                            src={
                                "https:" +
                                article.fields.articleImg.fields.file.url
                            }
                            alt={article.fields.articleImg.fields.title}
                        />
                        {documentToReactComponents(article.fields.text)}
                    </div>
                );
            })}
        </div>
    );

/*     return (
        <div>
            {articleDetails?.items?.map((article) => {
                return (
                    <div key={article.sys.id}>
                        <h1>{article.fields.title}</h1>
                        <img
                            src={
                                "https:" +
                                article.fields.articleImg.fields.file.url
                            }
                            alt={article.fields.articleImg.fields.title}
                        />
                        {documentToReactComponents(article.fields.description)}
                    </div>
                );
            })}
        </div>
    ); */
};
