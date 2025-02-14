import styled from "styled-components";

export const FrontpageStyled = styled.div`
    max-width: 1200px;
    margin: 0 auto; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: auto; /* Adjust row height based on content */
    grid-template-areas:
        "a1 a1 a1 a1"
        "a1 a1 a1 a1"
        "b1 b1 c1 c1"
        "b1 b1 d1 d1"
        "e1 e1 d1 d1"
        "f1 f1 f1 f1"
        "g1 g1 g1 g1"
        "h1 h1 h1 h1"
        "i1 i1 j1 j1";

    .article {
        padding: 2rem;
        background-color: white;
        width: 100%;
        height: 100%;

        .title {
            font-size: 4rem;
            font-family: "Roboto Flex", serif;
            margin-bottom: 1.2rem;
            font-weight: 400;
        }

        .article-text {
            font-size: 1.6rem;
            margin-bottom: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .info {
            color: red;
            font-size: 1.4rem;
            margin-bottom: 3rem;
        }

        a {
            text-decoration: none;
            color: black;
        }

        img {
            width: 100%;
        }
    }

    .article-1 {
        grid-area: a1;

        img {
            max-height: 600px;
            height: 100%;
            object-fit: cover;
        }
    }

    .article-2 {
        grid-area: b1;
    }

    .article-3 {
        grid-area: c1;
    }

    .article-4 {
        grid-area: d1;
    }

    .article-5 {
        grid-area: e1;
    }

    .article-6 {
        grid-area: f1;
    }

    .article-7 {
        grid-area: g1;
    }

    .article-8 {
        grid-area: h1;
    }

    .article-9 {
        grid-area: i1;
    }
`;
