import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import style from './SignupSetPage.module.css'

const SignupSetPage = (): JSX.Element => {
  const [studentStatus, setStudentStatus] = useState(['white', 'black'])
  const [parentStatus, setParentStatus] = useState(['white', 'black'])
  const StyledButtonL = styled.button`
    width: 42.5vw;
    height: 50px;
    border-radius: 10px 0px 0px 10px;
    color: ${studentStatus[1]};
    background: ${studentStatus[0]};
    font-weight: 500;
    font-size: 18px;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;

    transition: all .3s;

    outline: 0;
    border: 0;
  `
  const StyledButtonR = styled.button`
    width: 42.5vw;
    height: 50px;
    border-radius: 0px 10px 10px 0px;
    color: ${parentStatus[1]};
    background: ${parentStatus[0]};
    font-weight: 500;
    font-size: 18px;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;

    transition: all .3s;

    outline: 0;
    border: 0;
  `

  const getBtnEvent = (e: string) => {
    if (e === 'student') { setStudentStatus(['#4385F6', 'white']); setParentStatus(['white', 'black']) }
    else { setParentStatus(['#4385F6', 'white']); setStudentStatus(['white', 'black']) }
  }

  return (
    <div className={style.outer}>
      <input type="text" className={style.entry} placeholder='이름을 입력해주세요' />
      <div className={style.entrycontain}>
        <input type="text" className={style.entry} placeholder='학교명을 입력해주세요' />
        <div className={style.notice}>줄임없이 전체명으로 입력해주세요.</div>
      </div>
      <div className={style.btncontain}>
        <StyledButtonL onClick={() => getBtnEvent('student')}>학생</StyledButtonL>
        <StyledButtonR onClick={() => getBtnEvent('parent')}>학부모</StyledButtonR>
      </div>

      <Link className={style.btn} to={'/index'}>
        <div className={style.text}>가입하기</div>
        <FontAwesomeIcon className={style.icon} icon={faArrowRight} />
      </Link>
    </div>
  )
}

export default SignupSetPage