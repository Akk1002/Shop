import Image from 'next/image'
import React from 'react'
import styles from '../styles/card.module.css'

export const Card_1 = ({img,title, description}) => {
  return (
    <div className={styles.card_1}>
        <Image src={img} alt="" />
        <h3>{title}</h3>
        <h5>{description}</h5>
    </div>
  )
}



