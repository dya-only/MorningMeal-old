import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import style from './HomePage.module.css'

const HomePage = (): JSX.Element => {
  const week = ['일', '월', '화', '수', '목', '금', '토']
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const getHello = async () => {
      const res = await fetch('/hello')
      const data = await res.json()
      console.log(data.message)
      setMsg(data.message)
    }

    getHello()
  }, [])

  const onClickCapture = async () => {
    const res = await fetch('/hello')
    const data = await res.json()
    console.log(data.message)
    setMsg(data.message)
  }

  return (
    <div className={style.outer}>
      <div className={style.inner}>
        <div className={style.front}>
          <div className={style.day}>{ msg }</div>
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
      {/*<Link className={style.btn} to={'/'}>*/}
      {/*  <FontAwesomeIcon className={style.icon} icon={faCamera} />*/}
      {/*  <div className={style.text}>가져오기</div>*/}
      {/*</Link>*/}
      <button className={style.btn} onClick={onClickCapture}>
        <FontAwesomeIcon className={style.icon} icon={faCamera} />
        <div className={style.text}>가져오기</div>
      </button>
    </div>
  </div>
  )
}

export default HomePage