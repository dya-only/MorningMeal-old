import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown'
import Select from 'react-select'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import style from './SignupPage.module.css'
import logo from '../assets/logo-white.png'

const SignupPage = (): JSX.Element => {

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [name, setName] = useState('')
  const [tag, setTag] = useState('')

  const [btnCssL, setBtnCssL] = useState('white')
  const [btnCssR, setBtnCssR] = useState('white')
  const [ColorCssL, setColorCssL] = useState('black')
  const [ColorCssR, setColorCssR] = useState('black')

  const StyledBtnL = styled.button`
    width: 42.5vw;
    background: ${ btnCssL };
    color: ${ ColorCssL };
    border-radius: 12px 0px 0px 12px;
    font-size: 18px;

    border: 0;
    outline: 0;
  `
  const StyledBtnR = styled.button`
    width: 42.5vw;
    background: ${ btnCssR };
    color: ${ ColorCssR };
    border-radius: 0px 12px 12px 0px;

    font-size: 18px;

    border: 0;
    outline: 0;
  `

  const getSignup = async () => {
    await fetch(`http://localhost:8080/api/users/new?id=${ id }&pw=${ pw }&name=${ name }&tag=${ tag }`, {
      method: "GET",
    }).then(async (resp) => { console.log(await resp.json()) })

  }

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value)
  }
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <div className={style.outer}>
      <div className={style.header_contain}>
        <button className={style.homebtn} onClick={() => window.location.href='/'}>
            <FontAwesomeIcon className={style.home} icon={faHome} />
            <span className={style.hometext}>처음으로</span>
        </button>
          <input type="text" className={style.entry} onChange={onChangeId} placeholder='아이디를 입력해주세요' />
          <input type="password" id={style.mb} className={style.entry} onChange={onChangePw} placeholder='비밀번호를 입력해주세요' />
          <input type="text" className={style.entry} onChange={onChangeName} placeholder='이름을 입력해주세요' />
          <div className={style.selcontain}>
            <StyledBtnL className={style.selbtnL} onClick={() => { setBtnCssL('#4385F6'); setBtnCssR('white'); setColorCssL('white'); setColorCssR('black'); setTag('student') }}>학생</StyledBtnL>
            <StyledBtnR className={style.selbtnR} onClick={() => { setBtnCssL('white'); setBtnCssR('#4385F6'); setColorCssL('black'); setColorCssR('white'); setTag('parent') }}>학부모</StyledBtnR>
          </div>
      </div>
      <button className={style.btn} onClick={getSignup}>
        <img className={style.logo} src={logo} alt=""/>
        <div className={style.text}>새로운 시작!</div>
      </button>
    </div>
  )
}

export default SignupPage