import React from 'react'
import './WelcomeBack.css'
import BurnaBoy from '../../assets/burna boy.svg'
import AdekunleGold from '../../assets/adekunle gold.svg'
import Koffee from '../../assets/koffee.svg'

const WelcomeBack = (className) => {
  return (
    <div className={className}>
        <h3>Welcome Back!</h3>
        <div className='welcome__img__group'>
            <img src={BurnaBoy} alt="" />
            <img src={AdekunleGold} alt="" />
            <img src={Koffee} alt="" />
            <img src={AdekunleGold} alt="" />
            <img src={AdekunleGold} alt="" />
            <img src={Koffee} alt="" />
        </div>

    </div>
  )
}

export default WelcomeBack