import { FooterStyled } from "./footer.styled";

export const Footer = () => {
    return (
        <FooterStyled>
            <ul className="container">
                <li className="footer-links">
                    <ul>
                        <li>Adresse:</li>
                        <li>Intet nyt - Godt nyt ApS</li>
                        <li>Tulipan Vej 232</li>
                        <li>7320</li>
                        <li>Valby Øster</li>
                    </ul>
                </li>
                <li className="footer-links">
                    <ul>
                        <li>
                            <p>Links</p>
                        </li>
                        <li>
                            <a href="">vikanweb.dk</a>
                        </li>
                        <li>
                            <a href="">overpådenandenside.dk</a>
                        </li>
                        <li>
                            <a href="">retsinformation.dk</a>
                        </li>
                        <li>
                            <a href="">nogetmednews.dk</a>
                        </li>
                    </ul>
                </li>
                <li className="footer-links">
                    <ul>
                        <li>
                            <p>Politik</p>
                        </li>
                        <li>
                            <a href="">Privatpolitik</a>
                        </li>
                        <li>
                            <a href="">Cookiepolitik</a>
                        </li>
                        <li>
                            <a href="">Købsinformaiton</a>
                        </li>
                        <li>
                            <a href="">Delingspolitik</a>
                        </li>
                    </ul>
                </li>
                <li className="footer-links">
                    <ul>
                        <li>
                            <p>Kontakt</p>
                        </li>
                        <li>
                            <a href="">ingn@nyhed.dk</a>
                        </li>
                        <li>
                            <a href="">teletfon: 23232323</a>
                        </li>
                        <li>
                            <a href="">fax: 123123-333</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </FooterStyled>
    );
};
