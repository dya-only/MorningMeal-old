import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faSign, faSignOut } from '@fortawesome/free-solid-svg-icons'

import style from './HomePage.module.css'
const log = console.log

const HomePage = (): JSX.Element => {
  const week = ['일', '월', '화', '수', '목', '금', '토']
  const [msg, setMsg] = useState('')
  const [img, setImg] = useState('')
  const [reImg, setReImg] = useState('')

  const onClickCapture = async () => {
    log('click the capture!')
  }

  const getSignOut = () => {
    localStorage.setItem('account', '')
    localStorage.setItem('name', '')
    window.location.href = '/'
  }

  const onChangeIMG = (e: React.ChangeEvent<HTMLInputElement>) => {    
    const fReader = new FileReader()
    fReader.readAsDataURL(e.target.files![0])
    fReader.onload = (e: any) => {
      log(e.target.result)
      setReImg(e.target.result)
    }
  }

  return (
    <div className={style.outer}>
      <div className={style.inner}>
        <div className={style.profile}>
          <div className={style.profile_cont}>
            <div className={style.profile_name}>{ localStorage.getItem('name') }</div>
            <div className={style.profile_id}>{ localStorage.getItem('account') }</div>
          </div>
          <button className={style.setting} onClick={getSignOut}>
            <FontAwesomeIcon className={style.out} icon={faSignOut} />
          </button>
        </div>
        <div className={style.front}>
          <div className={style.day}>즐거운 아침이에요!</div>
          <div className={style.week}>오늘은 {new Date().getMonth()}월 {new Date().getDate()}일 {week[new Date().getDay()]}요일입니다.</div>
        </div>

        <div className={style.card}>
          <img className={style.cardimg} src={reImg || "ni.jpg"} alt=""/>
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
      <label htmlFor="capture_file" className={style.btn}>
        <FontAwesomeIcon className={style.icon} icon={faCamera} />
        <div className={style.text}>가져오기</div>
      </label>
      <input className={style.capture_file} id="capture_file" onChange={onChangeIMG} type="file" accept="image/*" capture="user" />
    </div>
  </div>
  )
}

export default HomePage