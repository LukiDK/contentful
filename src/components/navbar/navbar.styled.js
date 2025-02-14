import styled from "styled-components";

export const NavbarStyled = styled.nav`
    width: 100%;
    background-color: white;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;

    ul {
        display: flex;
        align-items: center;
        list-style: none;
        max-width: 1200px;
        margin: 0 auto;

        li {
            padding: 1rem;
            position: relative;
            font-size: 2.4rem;

            a {
                text-decoration: none;
                color: black;
                font-size: 2.4rem;
            }

            &:first-child a {
                color: red;
                font-size: 4.6rem;
                font-family: "Righteous", serif;
            }
            &:first-child {
                margin-right: auto;
            }
        }

        /* Add bar after every link except the first */
        li:not(:first-child)::before {
            content: "|";
            color: black;
            margin-right: 10px;
        }

        /* Add bar after the last link too */
        li:last-child::after {
            content: "|";
            color: black;
            margin-left: 10px;
        }
    }
`;
