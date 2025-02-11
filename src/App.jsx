import React, { useEffect, useState } from "react";
import { Nav } from "./components/nav/nav";
import "./App.css";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import * as contentful from "contentful";
import { client } from "./client/contentfulClient";
import { Navbar } from "./components/navbar/navbar";

function App() {
    const [data, setData] = useState();

    useEffect(() => {
        client
            .getEntries({ content_type: "newsArticle" })
            .then((response) => {
                console.log(response);
                setData(response);
            })
            .catch(console.error);
    }, []);

    return (
        <>
            <Nav />
            <div className="container">
                {data?.items.map((item) => (
                    <div className="galleryCard" key={item.sys.id}>
                        <h2>{item.fields.title}</h2>
                        <img
                            src={
                                "https:" +
                                item.fields.articleImg.fields.file.url
                            }
                            alt={item.fields.articleImg.fields.title}
                        />
                        {documentToReactComponents(item.fields.description)}
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
