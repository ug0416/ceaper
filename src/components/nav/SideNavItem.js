import React from "react";
import Link from "@components/link/Link";
import { useRouter } from "next/router";

import s from "./Nav.module.scss";

function SideNavItem ({ to, title}) {
  const router = useRouter();
    return (
      <div className={s.side__nav__item}>
        <Link href={to}  activeClassName={s.active}>
          <a className={s.side__nav__link}>
            {title}
          </a>
        </Link>
      </div>
    );
  }

export default SideNavItem;
