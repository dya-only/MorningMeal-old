import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import style from './FirstPage.module.css'

const FirstPage = (): JSX.Element => {
  return (
    <div className={style.outer}>
      {/* <div className={style.bg}></div> */}
      <div className={style.inner}>
        <div className={style.title}><span className={style.colored}>아침급식</span><br/>프로젝트</div>
      </div>
      <div className={style.acts}>
        <Link className={style.btn} to={'/signup'}>
          <div className={style.text}>시작하기</div>
          <FontAwesomeIcon className={style.icon} icon={faArrowRight} />
        </Link>
        <div className={style.undertext}><Link className={style.tologin} to={'/login'}>이미 가입된 계정</Link>이 있나요?</div>
      </div>
    </div>
  )
}

export default FirstPage