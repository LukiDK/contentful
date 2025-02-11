import { styled } from "styled-components";

export const NavStyled = styled.nav`
    background-color: #333;
    color: white;
    padding: 1rem;
    ul {
        max-width: 1080px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        list-style: none;
        padding: 0;

        li {
            a {
                color: white;
                text-decoration: none;
                padding: 1rem;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;
