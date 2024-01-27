import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">ArticleList</Link>
                </li>
                <li>
                    <Link to="/articles/:articleId">Article</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
