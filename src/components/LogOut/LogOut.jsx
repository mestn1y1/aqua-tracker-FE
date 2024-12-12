import css from './LogOut.module.css'
import { IoCloseOutline } from 'react-icons/io5'
export  const LogOut = () => {
  return(
    <div className={css.logOutContainer}>
      <button className={css.closeBtn}><IoCloseOutline /></button>
      <h2 className={css.logOutTitle}>Log Out</h2>
      <p className={css.logOutText}>Do you really want to leave?</p>
      <div className={css.btnContainer}>
        <button className={css.cancelBtn}>Cancel</button>
        <button className={css.logoutBtn}>LogOut</button>
      </div>
    </div>

  )
}