import Link from 'next/link';

const NavItem = (props) => (
    <Link href={props.href}>
        <a className="nav-item">
            {props.name}
        </a>
    </Link>
);

export default NavItem;