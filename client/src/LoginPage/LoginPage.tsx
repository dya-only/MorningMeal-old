import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import style from './LoginPage.module.css'

const LoginPage = (): JSX.Element => {
  return (
    <div className={style.outer}>
      <input type="text" className={style.entry} placeholder='아이디를 입력해주세요' />
      <input type="password" className={style.entry} placeholder='비밀번호를 입력해주세요' />
      <Link className={style.btn} to={'/index'}>
        <div className={style.text}>로그인</div>
        <FontAwesomeIcon className={style.icon} icon={faArrowRight} />
      </Link>
    </div>
  )
}

export default LoginPage