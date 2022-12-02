import Cardimg from '../public/card.jpg'
import Image from 'next/image'
import style from '../styles/card.module.css'
import  Link  from 'next/link';

export const Card = ({name,sail,prise}) => {
  return (
    <div className={style.card}>
      <div>
        <div className={style.card_block}>
          <div className={style.card__img}><Image src={Cardimg} alt="Card" /></div>
          <div className={style.card__hover}></div>
        </div>
      </div>
      <div className={style.card__title}>
        <Link href=''>
        <h4>{name}</h4>
        </Link>
        <div className={style.prise}>
            <h6>{sail}</h6>
          <h6>{prise}</h6>
        </div>
      </div>
    </div>
  )
}
