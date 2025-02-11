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
                    <NavLink to="/">Alle</NavLink>
                </li>
                <li>
                    <NavLink to="/">Indland</NavLink>
                </li>
                <li>
                    <NavLink to="/">Udland</NavLink>
                </li>
                <li>
                    <NavLink to="/">Teknologi</NavLink> 
                </li>
                <li>
                    <NavLink to="/">Sport</NavLink>
                </li>
                <li>
                    <NavLink to="/">Politik</NavLink>
                </li>
                <li>
                    <NavLink to="/">Samfund</NavLink>
                </li>
            </ul>
        </NavbarStyled>
    );
};
