import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../client/contentfulClient";
import { NavLink } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

    return (
        <div>
            {articleData?.map((article) => {
                const { title, slug, image, byline, releaseDate, text } =
                    article.fields;
                return (
                    <div key={slug} className="article">
                        <NavLink to={`/details/${slug}`}>
                            <h2>{title}</h2>
                        </NavLink>
                        {image && (
                            <img src={image.fields.file.url} alt={title} />
                        )}
                        <p>{byline}</p>
                        <p>{new Date(releaseDate).toLocaleDateString()}</p>
                        <div>
                            {documentToReactComponents(text).slice(0, 1)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
