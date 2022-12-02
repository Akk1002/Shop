import style from '../styles/card.module.css'
import Link from 'next/link'
const Title = ({title}) => {
  return (
    <div className={style.title}>
          <h1>{title}</h1>
          <h5><Link href='/'>Главная</Link> - <span>{title}</span></h5>
        </div>
  )
}

export default Title