import React, {FC} from 'react';
import style from './style.module.scss';
import {links} from "../Home/Menu/Menu";
import image1 from '../../../assets/img/penguin_1.png';
import image2 from '../../../assets/img/penguin_2.png';
import image3 from '../../../assets/img/penguin_3.png';
import image4 from '../../../assets/img/penguin_4.png';

const content = [
    {
        name: 'Background',
        value: 10,
    },
    {
        name: 'Face',
        value: 10,
    },
    {
        name: 'Costume',
        value: 15,
    },
    {
        name: 'Left Hand',
        value: 20,
    },
    {
        name: 'Right Hand',
        value: 10,
    },
    {
        name: 'Hat',
        value: 10,
    },
    {
        name: 'Glasses',
        value: 15,
    },
    {
        name: 'Legendary Penguin',
        value: 20,
    },
]


export const Rarity: FC = () => {
    return (
        <section className={style.rarity}
                 id={links[2].slug}
        >
            <div className={style.card}>
                <h2 className={style.title}>Rarity</h2>
                <div className={style.white}>

                    <div className={style.content}>
                        {
                            content.map(el => (
                                <div className={style.item}
                                     key={el.name}
                                >
                                    <p className={style.name}>{el.name}</p>
                                    <p className={style.value}>{el.value}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className={style.total}>
                        <p>Total Penguins</p>
                        <p>4444</p>
                    </div>
                </div>

                <div className={style.images_left_top}>
                    <img src={image1} alt=""/>
                    <img src={image2} alt=""/>
                    <img src={image3} alt=""/>
                </div>

                <div className={style.images_right_bottom}>
                    <img src={image2} alt=""/>
                    <img src={image4} alt=""/>
                    <img src={image1} alt=""/>
                </div>
            </div>


        </section>
    );
}