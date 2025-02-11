import styled from "styled-components";

export const NavbarStyled = styled.nav`
    width: 100%;
    background-color: #333;

    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;

        li {
            padding: 1rem;

            a {
                text-decoration: none;
                color: white;
            }
        }
    }
`;
