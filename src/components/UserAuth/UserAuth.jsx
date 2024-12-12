import css from "./UserAuth.module.css";

const logedIn = false;

export const UserAuth = () => {
  return (
    <div className={css.container}>
      {logedIn ? (
        <>
          <p>User</p>
          <img src="" alt="avatar" />
        </>
      ) : (
        <a href="">Sign In</a>
      )}
    </div>
  );
};
