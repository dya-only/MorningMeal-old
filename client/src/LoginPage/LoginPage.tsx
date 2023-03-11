import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import style from './LoginPage.module.css'
import logo from '../assets/logo-white.png'

const log = console.log

const LoginPage = (): JSX.Element => {
  const getLogin = async () => {
    await fetch(`http://localhost:8080/api/users/auth?id=${ id }&pw=${ pw }`, {
      method: "GET",
    }).then(async (resp) => { console.log(await resp.json()) })
  }

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value)
  }

  return (
    <div className={style.outer}>
      <div className={style.header_contain}>
        <button className={style.homebtn} onClick={() => window.location.href='/'}>
          <FontAwesomeIcon className={style.home} icon={faHome} />
          <span className={style.hometext}>처음으로</span>
        </button>
        <input type="text" className={style.entry} onChange={onChangeId} placeholder='아이디를 입력해주세요' />
        <input type="password" className={style.entry} onChange={onChangePw} placeholder='비밀번호를 입력해주세요' />
      </div>
      <div className={style.btn_contain}>
        <button className={style.btn} onClick={getLogin}>
          <img className={style.logo} src={logo} alt=""/>
          <div className={style.text}>로그인</div>
        </button>
        <div className={style.undertext}><Link className={style.tologin} to={'/signup'}>가입된 계정</Link>이 아직 없나요?</div>
      </div>
    </div>
  )
}

export default LoginPage