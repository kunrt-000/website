import NavItem from './NavItem.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const NavBar = (props) => (
    <div className="navbar">
        <div className="items">
            {props.nav.map(i => (
                <NavItem href={i.href} name={i.name} />
            ))}
            {props.enableThemeToggle ? <ThemeToggle toggleOnClick={props.toggleOnClick} darkTheme={props.darkTheme} /> : false}
        </div>
    </div>
);

export default NavBar;