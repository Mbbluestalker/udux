import React from 'react'
import './ShowCase.css'
import ShowcaseImg from '../../assets/showcase_img.svg'

const ShowCase = ({className}) => {
  return (
    <div className={className}>
        <img src={ShowcaseImg} alt="" />
    </div>
  )
}

export default ShowCase