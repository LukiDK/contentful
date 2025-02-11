import React, { useEffect, useState } from "react";
import { client } from "./client/contentfulClient";
import { Navbar } from "./components/navbar/navbar";

function App() {
    const [data, setData] = useState();

    useEffect(() => {
        client
            .getEntries({content_type: "newsArticle"})
            .then((response) => setData(response))
            .catch(console.error);
    }, []);

    console.log("Contentful data", data);
    
    return (
        <>
        <Navbar />
            <h1>Hello</h1>
            {
                data && data.items.map((item) => (
                    <div key={item.sys.id}>
                        <h2>{item.fields.title}</h2>
                        <p>{item.fields.body}</p>
                    </div>
                ))
            }
        </>
    );
}

export default App;
