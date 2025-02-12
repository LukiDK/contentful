import { useEffect, useState } from "react";
import { client } from "../client/contentfulClient";
import { NavLink } from "react-router-dom";

export const Frontpage = () => {
    const [articleData, setArticleData] = useState();

    useEffect(() => {
        client
            .getEntries({
                content_type: "newsArticle",
            })
            .then((data) => setArticleData(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {articleData?.items?.map((article) => {
                return (
                    <NavLink
                        to={`/details/${article.fields.slug}`}
                        key={article.fields.slug}
                    >
                        {article.fields.title}
                    </NavLink>
                );
            })}
        </div>
    );
};
