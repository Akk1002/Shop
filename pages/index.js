import styles from '../styles/Home.module.css'
import Image from 'next/image';
import MainConteiner from './../components/MainConteiner';
import MainPhoto1 from '../public/1.jpg'
import MainPhoto2 from '../public/2.jpg'
import MainPhoto3 from '../public/3.png'
import Quality from '../public/quality.png'
import Team from '../public/team.png'
import { Card } from './../components/card';
import { Card_1 } from './../components/card_1';
import Link from 'next/link'

export default function Home() {
  return (
    <MainConteiner>
    
      <div className={styles.main}>
        <div className={styles.first__main}>
          <div className={styles.left__main}>
              <h1>Новые поступления в этом сезоне</h1>
              <h4>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</h4>
            <Link href='/shop'><button>Открыть магазин</button></Link>
          </div>
          <div className={styles.right__main}>
              <Image className={styles.Image__2} src={MainPhoto2} alt="" />
              <Image className={styles.Image__1} src={MainPhoto1} alt="" />
              <Image className={styles.Image__3} src={MainPhoto3} alt="" />
          </div>
        </div>


        <div className={styles.second__main}>
          <h3>Новая коллекция</h3>
          <div className={styles.cards}>
            <Card name='Футболка USA' sail='$229' prise='$129'/>
            <Card name='Футболка USA' prise='$229'/>
            <Card name='Футболка USA'  prise='$329'/>
          </div>
             <Link href='/shop'><button >Открыть магазин</button></Link>
        </div>

        <div className={styles.therd__main}>
          <h2>Что для нас важно</h2>
          <div className={styles.cards_1}>
            <Card_1 title='Качество' description='Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества' img={Quality}/>
            <Card_1 title='Качество' description='Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества' img={Quality}/>
            <Card_1 title='Качество' description='Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества' img={Quality}/>
          </div>
        </div>


        <div className={styles.fourth__main}>
            <h2>Команда мечты Womazing</h2>
            <div className={styles.team__member}>
              <Image src={Team} alt="team" />
              <div className={styles.team__title}>
                <h3>Для каждой</h3>
                <h5>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</h5>
                <h5> Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</h5>
                <Link  href="/about">Подробнее о бренде</Link>
              </div>
            </div>
        </div>
      </div>
    </MainConteiner>
  )
}
