import styled from "styled-components";

export const FooterStyled = styled.footer`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 2rem;

    .container {
        display: flex;
        justify-content: space-between;
        max-width: 1080px;
        width: 100%;
        margin: 0 auto;

        .footer-links {
            list-style: none;
            display: flex;
            flex-direction: column;

            ul {
                list-style: none;

                a {
                    text-decoration: none;
                    color: black;
                    font-size: 1.6rem;
                    font-family: "Roboto Flex", serif;
                }

                p {
                    margin-bottom: 1.6rem;
                    font-size: 1.6rem;
                    font-family: "Roboto Flex", serif;
                }
            }
        }
    }
`;
