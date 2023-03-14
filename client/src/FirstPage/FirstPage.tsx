import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import style from './FirstPage.module.css'

const FirstPage = (): JSX.Element => {
  const onClickStart = () => {
    if (localStorage.getItem('account') !== '' && localStorage.getItem('account') !== null) {
      window.location.href='/index'
    } else {
      window.location.href='/login'
    }
  }

  return (
    <Fragment>

      <div className={style.outer}>
        <img className={style.bg} src='pj_bg.png' alt={''} />
        <div className={style.inner}>
          <div className={style.title}><span className={style.colored}>아침급식</span><br/>프로젝트</div>
        </div>
        <div className={style.acts}>
          <button className={style.btn} onClick={onClickStart}>
            <div className={style.text}>시작하기</div>
            <FontAwesomeIcon className={style.icon} icon={faArrowRight} />
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default FirstPage