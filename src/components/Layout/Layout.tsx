import React, { FC, useState } from "react";
import { SideNav } from "../SideNav/SideNav";
import { TopNav } from "../TopNav/TopNav";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children?: React.ReactChild | React.ReactChild[];
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav((prev) => !prev);
  };

  return (
    <div>
      <TopNav onMenuClick={toggleSideNav} />
      <div className={styles.layout}>
        {showSideNav && <SideNav />}
        {children}
      </div>
    </div>
  );
};
