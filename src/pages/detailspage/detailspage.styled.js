import styled from "styled-components";

export const DetailspageStyled = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    background-color: white;

    img {
        width: 100%;
        max-height: 550px;
        object-fit: cover;
        margin-bottom: 5rem;
    }

    .article-textcontent {
        padding: 0 2rem;
        margin-bottom: 3rem;

        .title {
            font-size: 4rem;
            font-family: "Roboto Flex", serif;
            margin-bottom: 2.4rem;
        }

        .info {
            color: red;
            font-size: 1.4rem;
            margin-bottom: 3rem;
        }

        .article-text {
            margin-bottom: 7rem;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.9rem;
            padding-bottom: 8rem;
        }
    }
`;
