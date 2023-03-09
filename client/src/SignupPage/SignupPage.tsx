import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import style from './SignupPage.module.css'
import logo from '../assets/logo-white.png'

const SignupPage = (): JSX.Element => {
  const options = ['학생', '학부모']

  // const getGBSW = async () => {
  //   await fetch('http://localhost:8080/users/auth', {
  //     method: "GET",
  //   }).then(async (resp) => { console.log(await resp.json()) })
  // }

  const getSignup = async () => {
    await fetch(`http://localhost:8080/api/users/new?id=${ id }&pw=${ pw }`, {
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
      <input type="text" className={style.entry} onChange={onChangeId} placeholder='아이디를 입력해주세요' />
      <input type="password" id={style.mb} className={style.entry} onChange={onChangePw} placeholder='비밀번호를 입력해주세요' />
      <input type="text" className={style.entry} onChange={onChangeId} placeholder='이름을 입력해주세요' />
      {/*<Dropdown options={options} onChange{} value={options[0]} placeholder='선택해주세요' />*/}
      <button className={style.btn} onClick={getSignup}>
        <img className={style.logo} src={logo} alt=""/>
        <div className={style.text}>새로운 시작!</div>
      </button>
    </div>
  )
}

export default SignupPage