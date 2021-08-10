import './NavBar.css';

const NavBar = ({ links, toggleMenu, isMenuOpen }) => {
    let menuClass = isMenuOpen ? 'menu-open' : '';

    return(
        <div>
            <nav>
                <h1>Start Bootstrap</h1>
                <ul>
                    {links.map(link => <li>{link}</li>)}
                </ul>
                
            </nav>
            <menu className={menuClass}>
                <h1 className={isMenuOpen ? 'menu-text' : "hidden"}></h1>
            </menu>
        </div>
    )
}


export default NavBar;