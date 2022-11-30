import React from 'react'
import style from "./header.module.css"
import BellIcon from "../../assets/icons/bell-icon.svg"
import MenuIcon from "../../assets/icons/menu-icon.svg"

const Header = () => {
  return (
    <div className={style.container}>
        <div className={style.logo}>
            <div>
                LOGO
            </div>
        </div>
        <div className={style.bellIcon}>
            <img src={BellIcon} />
        </div>
        <div className={style.optionIcon}>
            <img src={MenuIcon} />
        </div>
    </div>
  )
}

export default Header