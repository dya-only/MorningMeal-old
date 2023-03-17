import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faSign, faSignOut } from '@fortawesome/free-solid-svg-icons'

import style from './Loading.module.css'
import logo from '../assets/logo-white.png'
const log = console.log

const Loading = (): JSX.Element => {

    return (
        <div className={style.load_contain}>
            <img className={style.logo} src={logo} alt=""/>
            <div className={style.title}>로딩중이에요!</div>
        </div>
    )
}

export default Loading