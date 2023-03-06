import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import style from './SignupPage.module.css'

const LoginPage = (): JSX.Element => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }
    const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value)
    }

    const getNext = () => {
      sessionStorage.setItem('create_id', id)
      sessionStorage.setItem('create_pw', pw)
      window.location.href = '/signup/set'
    }

  return (
    <div className={style.outer}>
      <input type="text" className={style.entry} onChange={onChangeId} placeholder='아이디를 입력해주세요' />
      <input type="password" className={style.entry} onChange={onChangePw} placeholder='비밀번호를 입력해주세요' />
      <button className={style.btn} onClick={getNext}>
        <div className={style.text}>계속하기</div>
        <FontAwesomeIcon className={style.icon} icon={faArrowRight} />
      </button>
    </div>
  )
}

export default LoginPage