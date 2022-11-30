import React from 'react'
import { DOC_NAME } from '../../constants'
import style from "./name-card.module.css"
import Img from "../../assets/images/user1.png"

const NameCard = () => {
  return (
    <div className={style.nameCard}>
        <div className={style.name}>
            <div>Hello,</div>
            <p>{DOC_NAME}</p>
        </div>
        <div className={style.img}>
            <img src={Img} />
        </div>
    </div>
  )
}

export default NameCard