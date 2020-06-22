import { MenuItem } from "../types/menu";
import { Icon } from "@iconify/react";
import arrowLeft from "@iconify/icons-feather/arrow-left";

type HeaderProps = {
  back_link?: string;
  title?: string | JSX.Element;
  show_title?: boolean;
  menu?: MenuItem[];
};

const Header = ({ back_link, title, menu, show_title }: HeaderProps) => (
  <div className="header">
    <div className="left">
      {back_link && back_link.length > 0 && (
        <a href={back_link} className="back-link button icon">
          <Icon icon={arrowLeft} />
        </a>
      )}
      {title ? (
        <div className={`title ${show_title ? "show-title" : ""}`}>{title}</div>
      ) : (
        <></>
      )}
    </div>
    <div className="right">
      {menu && menu.length > 0 && (
        <ul className="menu">
          {menu.map((menuItem) => (
            <li
              className={`menu-item ${menuItem.active ? `active` : ``}`}
              key={menuItem.name}
            >
              <a href={menuItem.link} className="menu-item-link">
                {menuItem.icon}
                <div className="menu-item-name">{menuItem.name}</div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default Header;
