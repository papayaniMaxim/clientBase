import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";
import styles from "./NavigationMenu.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

interface NavigationMenuProps {
  className?: string;
  style?: React.CSSProperties;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  className,
  style,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const navList = useMemo(
    () => (
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/a">Login</Link>
        </li>
        <li>
          <Link to="/services">Услуги</Link>
        </li>
        <li>
          <Link to="/contact">Контакты</Link>
        </li>
      </ul>
    ),
    []
  );

  return (
    <div className={`${styles.navigationMenu} ${className}`} style={style}>
      <Burger
        className={styles.burger}
        onClick={handleMenuToggle}
        isOpen={showMenu}
      />
      <div
        className={`${styles.menuList} ${
          showMenu ? styles.open : styles.close
        }`}
      >
        {navList}
      </div>
      <ThemeToggle className={styles.toggle} />
    </div>
  );
};

export default NavigationMenu;
