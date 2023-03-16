import React, {useEffect, useState} from 'react'
import axios from 'axios'
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

  const [imgArr, setImgArr] = useState([])

  const getSignOut = () => {
    localStorage.setItem('account', '')
    localStorage.setItem('name', '')
    window.location.href = '/'
  }

  const onChangeIMG = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]
    const reader: any = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = async () => {
      setImg(reader.result)
      log(reader.result)
      
      await axios({
        method: "post",
        url: `http://localhost:8080/api/users/data`,
        data: { img: reader.result, id: localStorage.getItem('account') }
      })
    }
  }

  useEffect(() => {
    const getIMG = async () => {
      axios({
        method: "get",
        url: `http://localhost:8080/api/users/data?id=${localStorage.getItem('account')}`
      }).then(async (resp) => {
        setImgArr(await resp.data.data)
        log(await resp.data.data)
      })
    }
    getIMG()
  }, [])

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

        { imgArr.map((el: any) => (
          <div className={style.card}>
            <img className={style.cardimg} src={el.img || "pj_bg.png"} alt=""/>
            <div className={style.cardtitle}>{ el.date }의 아침!</div>
          </div>
        )) }
        
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