import { NavbarStyled } from "./navbar.styled";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <NavbarStyled>
            <ul>
                <li>
                    <NavLink to="/">INGN</NavLink>
                </li>
                <li>
                    <NavLink to="category/alle">Alle</NavLink>
                </li>
                <li>
                    <NavLink to="category/indland">Indland</NavLink>
                </li>
                <li>
                    <NavLink to="category/udland">Udland</NavLink>
                </li>
                <li>
                    <NavLink to="category/teknologi">Teknologi</NavLink> 
                </li>
                <li>
                    <NavLink to="category/sport">Sport</NavLink>
                </li>
                <li>
                    <NavLink to="category/politik">Politik</NavLink>
                </li>
                <li>
                    <NavLink to="category/samfund">Samfund</NavLink>
                </li>
            </ul>
        </NavbarStyled>
    );
};
