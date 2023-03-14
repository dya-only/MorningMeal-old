import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import style from './HomePage.module.css'
const log = console.log

const HomePage = (): JSX.Element => {
  const week = ['일', '월', '화', '수', '목', '금', '토']
  const [msg, setMsg] = useState('')

  const onClickCapture = async () => {
    log('click the capture!')
  }

  return (
    <div className={style.outer}>
      <div className={style.inner}>
        <div className={style.profile}>
          <img className={style.profile_img} src="ni.jpg" alt="" />
          <div className={style.profile_name}>{ sessionStorage.getItem('name') }</div>
        </div>
        <div className={style.front}>
          <div className={style.day}>즐거운 아침이에요!</div>
          <div className={style.week}>오늘은 {new Date().getMonth()}월 {new Date().getDate()}일 {week[new Date().getDay()]}요일입니다.</div>
        </div>

        <div className={style.card}>
          <img className={style.cardimg} src="ni.jpg" alt=""/>
          <div className={style.cardtitle}>니코 니코 니~!</div>
        </div>
        <div className={style.card}>
          <img className={style.cardimg} src="ni.jpg" alt=""/>
          <div className={style.cardtitle}>니코 니코 니~!</div>
        </div>
        <div className={style.card}>
          <img className={style.cardimg} src="ni.jpg" alt=""/>
          <div className={style.cardtitle}>니코 니코 니~!</div>
        </div>

        <div className={style.card}>
          <img className={style.cardimg} src="ni.jpg" alt=""/>
          <div className={style.cardtitle}>니코 니코 니~!</div>
        </div>
        <div className={style.card}>
          <img className={style.cardimg} src="ni.jpg" alt=""/>
          <div className={style.cardtitle}>니코 니코 니~!</div>
        </div>
        <div className={style.cardendl}>
          <div className={style.cardimg}></div>
        </div>
    </div>

    <div className={style.btncontain}>
      <button className={style.btn} onClick={onClickCapture}>
        <FontAwesomeIcon className={style.icon} icon={faCamera} />
        <div className={style.text}>가져오기</div>
      </button>
    </div>
  </div>
  )
}

export default HomePage