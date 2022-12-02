import Head from 'next/head'
import style from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Phone from '../public/phone.jpg'
import Logo from '../public/dress.jpg'
import Shop from '../public/shop.jpg'
import { useRouter } from "next/router";


const  MainConteiner = ({children}) => {
  const router = useRouter();


  return(
  <>
    <div>
        <Head>
            <title>Womazing</title>
        </Head>
        <div className={style.body}>
          <div className={style.wrapper}>
            <div className={style.conteiner}>
              
              <div className={style.navbar}>
                <div className={style.navbar__cont}>
                  <div className={style.logo}>
                    <Link href='/'>
                      <Image src={Logo} alt="logo" />
                      <h2>Womazing</h2>
                    </Link>
                  </div>
                  <div className={style.navigation}>
                    <ul> 
                      <li className={router.pathname == "/" ? 'active': ""}>
                        <Link href="/">Главная</Link>
                      </li>
                      <li className={router.pathname == "/shop" ? "active" : ""}>
                        <Link href="/shop">Магазин</Link>
                      </li>
                      <li className={router.pathname == "/about" ? 'active' : ""}>
                        <Link href="/about">О бренде</Link>
                      </li>
                      <li className={router.pathname == "/contact" ? "active" : ""}>
                        <Link href="/contact">Контакты</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={style.rightnav}>
                      <div className={style.phone}>
                          <a href='tel:+380441234567'><Image className={style.phoneimg} src={Phone} alt='phone'/> +38 (044) 123-45-67</a>
                      </div>
                      <Link href="/basket"><Image src={Shop} alt="shop" /></Link>
                  </div>
                </div>
              </div>


            <div className={style.main}>{children}</div>

            </div>
            

          <div className={style.footer__conteiner}>
            <div className={style.footer}>
              <div className={style.first__block}>
                <div className={style.logo}>
                    <Image src={Logo} alt="logo" />
                    <h2>Womazing</h2>
                </div>
                <div className={style.policy}>
                  <p>© Все права защищены</p>
                  <p>Политика конфиденциальности</p>
                  <p>Публичная оферта</p>
                </div>
              </div>

              <div className={style.second__block}>
                  <p>Пальто</p>
                  <p>Свитшоты</p>
                  <p>Кардиганы</p>
                  <p>Толстовки</p>
              </div>

              <div className={style.therd__block}>
                <div className={style.email__phone}>
                    <a className={style.phone__footer} href='tel:+380441234567'>+38 (044) 123-45-67</a>
                    <a href="">hello@womazing.com</a>
                </div>
                <div className={style.social__media}>
                  {/* <a href=""><Image src={}/></a>
                  <a href=""><Image src={}/></a>
                <a href=""><Image src={}/></a> */}
                </div>
                <div className={style.payments}>
                  {/* <a href=""><Image src={}/></a>
                  <a href=""><Image src={}/></a> */}
                </div>
              </div>
          </div>
        </div>
                  </div>
      </div>
    </div>
  </>
)}
export default MainConteiner