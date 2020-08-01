import React from "react";

import SideNav from "@components/nav/SideNav";
import SideNavItem from "@components/nav/SideNavItem";

export class Nav extends React.Component {
  render() {
    return (
      <SideNav>
        <SideNavItem
          title="プロフィール"
          href="/edit"
        />
        <SideNavItem
          title="アカウント情報"
          href="/edit/account"
        />
        <SideNavItem
          title="パスワード"
           href="/edit/password"
          />
          <SideNavItem
           title="ソーシャルメディア"
            href="/edit/social"
          />
          <SideNavItem
           title="アカウントの削除"
            href="/edit/delete"
          />
        </SideNav>
    );
  }
}

export default Nav;
