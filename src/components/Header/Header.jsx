import css from "./Header.module.css";
import { Logo } from "../Logo/Logo.jsx";
import { UserAuth } from "../UserAuth/UserAuth.jsx";
import "../../index.css";

export const Header = () => {
  return (
    <div className="container">
      <header className={css.header}>
        <Logo />
        <UserAuth />
      </header>
    </div>
  );
};
