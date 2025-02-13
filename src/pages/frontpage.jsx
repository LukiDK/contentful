import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client/contentfulClient";
import { NavLink } from "react-router-dom";

export const Frontpage = () => {
    const [articleData, setArticleData] = useState();

    const { category } = useParams();

    console.log(category);

    const filterData = (category, articleArray) => {
        if (!articleArray) return [];
        const newArray = articleArray.filter(
            (item) => item.fields.category === category
        );
        return newArray;
    };

    useEffect(() => {
        client
            .getEntries({
                content_type: "newsArticle",
            })
            .then((result) => {
                const filteredData = filterData(category, result.items);
                setArticleData(filteredData);
            })
            .catch((err) => console.log(err));
    }, [category]);

    return (
        <div>
            {articleData?.map((article) => {
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
