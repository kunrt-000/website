import Sun from './icons/Sun.jsx';
import Moon from './icons/Moon.jsx';

const ThemeToggle = (props) => (
    <div className="nav-item theme-toggle" onClick={props.toggleOnClick}>
        {(props.darkTheme) ? <Sun /> : <Moon />}
    </div>
);

export default ThemeToggle;