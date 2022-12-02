import MainConteiner from './../components/MainConteiner';
import About1 from '../public/about1.jpg'
import About2 from '../public/about2.jpg'
import Image  from 'next/image';
import styles from '../styles/About.module.css'
import  Link  from 'next/link';
import Title from './../components/title';

export default function About() {
  return (
    <MainConteiner>

      <div className={styles.about}>
        <Title title='О бренде'/>
        <div className={styles.about__view}>
          <Image src={About2} alt="about" />
          <div className={styles.about__description}>
            <h3>Идея и женщина</h3>
            <p>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</p>
            <p>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.</p>
          </div>
        </div>
        <div className={styles.about__view}>
          <div className={styles.about__description}>
            <h3>Магия в деталях</h3>
            <p>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</p>
            <p>Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. </p>
          </div>
          <Image src={About1} alt='about'/>
        </div>
        <div className={styles.about__button}>
          <Link href='/shop'><button>Перейти в магазин</button></Link>
        </div>
      </div>



    </MainConteiner>
  )
}