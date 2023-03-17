import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faUserGroup, faSignOut, faUserGraduate, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import style from './SettingPage.module.css'
const log = console.log

const SettingPage = (): JSX.Element => {
  const [search, setSearch] = useState('')

  const onClickSearch = () => {
    log(search)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className={style.outer}>
      <div className={style.inner}>
        <input className={style.entry} onChange={onChange} type="text" placeholder='학생을 검색해보세요' />
        <button className={style.search_btn} onClick={onClickSearch}>
          <FontAwesomeIcon className={style.search_icon} icon={faMagnifyingGlass} />
        </button>
      </div>

      <div className={style.contain}>

        <div className={style.card}>
          <FontAwesomeIcon className={style.student_icon} icon={faUserGraduate} />
          <div className={style.texts}>
            <div className={style.card_name}>{ localStorage.getItem('name') }</div>
            <div className={style.card_id}>{ localStorage.getItem('account') }</div>
          </div>
        </div>
        <div className={style.card}>
          <FontAwesomeIcon className={style.student_icon} icon={faUserGraduate} />
          <div className={style.texts}>
            <div className={style.card_name}>{ localStorage.getItem('name') }</div>
            <div className={style.card_id}>{ localStorage.getItem('account') }</div>
          </div>
        </div>
        <div className={style.card}>
          <FontAwesomeIcon className={style.student_icon} icon={faUserGraduate} />
          <div className={style.texts}>
            <div className={style.card_name}>{ localStorage.getItem('name') }</div>
            <div className={style.card_id}>{ localStorage.getItem('account') }</div>
          </div>
        </div>
        <div className={style.card}>
          <FontAwesomeIcon className={style.student_icon} icon={faUserGraduate} />
          <div className={style.texts}>
            <div className={style.card_name}>{ localStorage.getItem('name') }</div>
            <div className={style.card_id}>{ localStorage.getItem('account') }</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SettingPage