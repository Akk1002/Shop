import MainConteiner from './../components/MainConteiner';
import style from '../styles/Shop.module.css'
import  Link  from 'next/link';
import Title from './../components/title';

const shop = () => {
  return (
    <MainConteiner>
        <div style={style.shop}>
            <Title title='Магазин'/>
            <div></div>
        </div>

    </MainConteiner>
  )
}

export default shop