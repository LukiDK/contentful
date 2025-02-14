import styled from "styled-components";

export const FrontpageStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(9, 1fr);
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

    .article img {
        width: 100%;
    }

    .article-1 {
        grid-area: a1;
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
