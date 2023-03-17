import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faUserGroup, faSignOut } from '@fortawesome/free-solid-svg-icons'

import style from './HomePage.module.css'
import logo from '../assets/logo-white.png'
import logo_blue from '../assets/logo-blue.png'
const log = console.log

const HomePage = (): JSX.Element => {
  const week = ['일', '월', '화', '수', '목', '금', '토']
  const [msg, setMsg] = useState('')
  const [img, setImg] = useState('')
  const [reImg, setReImg] = useState('')

  const [imgArr, setImgArr] = useState([])
  const [imgExists, setImgExists] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const getSignOut = () => {
    localStorage.setItem('account', '')
    localStorage.setItem('name', '')
    window.location.href = '/'
  }

  const getSetting = () => {
    window.location.href = '/setting'
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
    window.location.href = '/index'
  }

  useEffect(() => {
    const getIMG = async () => {
      axios({
        method: "get",
        url: `http://localhost:8080/api/users/data?id=${localStorage.getItem('account')}`
      }).then(async (resp) => {
        if (await resp.data.data.length == 0) {
          setImgExists(false)
        } else {
          setImgArr(await resp.data.data)
          log(await resp.data.data)
        }
      })
    }
    getIMG()

    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  return (
    <div className={style.outer}>
      <div className={style.inner}>
        <div className={style.profile}>
          <button className={style.setting} onClick={getSetting}>
            <FontAwesomeIcon className={style.set} icon={faUserGroup} />
          </button>
          <div className={style.profile_cont}>
            <div className={style.profile_name}>{ localStorage.getItem('name') }</div>
            <div className={style.profile_id}>{ localStorage.getItem('account') }</div>
          </div>
          <button className={style.signout} onClick={getSignOut}>
            <FontAwesomeIcon className={style.out} icon={faSignOut} />
          </button>
        </div>
        <div className={style.front}>
          <div className={style.day}>즐거운 아침이에요!</div>
          <div className={style.week}>오늘은 {new Date().getMonth()}월 {new Date().getDate()}일 {week[new Date().getDay()]}요일입니다.</div>
        </div>

        { isLoading ?
          <div className={style.load_contain}>
            <img className={style.load_logo} src={logo_blue} alt=""/>
            <div className={style.load_title}>로딩중이에요!</div>
          </div>
        : ( imgExists ?
          ( imgArr.map((el: any) => (
            <div className={style.card}>
              <img className={style.cardimg} src={el.img || "pj_bg.png"} alt=""/>
              <div className={style.cardtitle}>{ el.date }의 아침!</div>
            </div>
          )) )
          : <div className={style.unknown}>
            <img className={style.unknown_logo} src={logo} alt="" />
            <div className={style.unknown_text}>아직 가져온 급식이없어요!</div>
          </div> )
        }
        
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