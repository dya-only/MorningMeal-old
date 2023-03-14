import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import style from './LoginPage.module.css'
import logo from '../assets/logo-white.png'

const log = console.log

const LoginPage = (): JSX.Element => {

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  const [typeStatus, setTypeStatus] = useState('none')
  const [typeVisible, setTypeVisible] = useState('hidden')
  const fade = keyframes`
    0% {
      opacity: 0;
      transform: translateY(0px);
    }
    20% {
      opacity: 1;
      transform: translateY(50px);
    }
    80% {
      opacity: 1;
      transform: translateY(50px);
    }
    100% {
      opacity: 0;
      transform: translateY(0px);
    }
  `
  const StyledTyping = styled.div`
    background-color: white;
    padding: 12px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    visibility: ${typeVisible};
    animation-name: ${fade};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  `

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value)
  }

  const getLogin = async () => {
    await fetch(`http://localhost:8080/api/users/auth?id=${ id }&pw=${ pw }`, {
      method: "GET",
    }).then(async (resp) => {
      const data = await resp.json()
      log(data)

      if (data.status == 'success') { 
        localStorage.setItem('account', id)
        localStorage.setItem('name', data.name)
        window.location.href = '/index'
      } else {
        setTypeStatus('fade')
        setTypeVisible('visible')

        setTimeout(() => {
          setTypeStatus('none')
          setTypeVisible('hidden')
        }, 2000)
      }
    })
  }
  
  return (
    <div className={style.outer}>
      <div className={style.ex}>
        <StyledTyping><FontAwesomeIcon className={style.ex_x} icon={faCircleXmark} />아이디 또는 비밀번호를 확인해주세요.</StyledTyping>
      </div>

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