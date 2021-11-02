import React, {FC} from 'react';
import style from './style.module.scss';
import {links} from "../Home/Menu/Menu";
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import about_background_top_mobile from '../../../assets/img/about_background_top_mobile.png';
import about_background_top_desktop from '../../../assets/img/about_background_top_desktop.png';
import about_divider_mobile from '../../../assets/img/about_divider_mobile.png';
import about_divider_desktop from '../../../assets/img/about_divider_desktop.png';
import about_ice_left from '../../../assets/img/about_ice_left.png';
import about_ice_right from '../../../assets/img/about_ice_right.png';
import about_ice_desktop from '../../../assets/img/about_ice_desktop.png';

export const About: FC = () => {
    return (
        <section className={style.about}
                 id={links[1].slug}
        >
            <div className={style.about_background}>
                <img className={style.about_background_top_mobile}
                     src={about_background_top_mobile}
                     alt=""/>
                <img className={style.about_background_top_desktop}
                     src={about_background_top_desktop}
                     alt=""/>
                <div className={style.about_background_bottom}/>
            </div>

            <img className={style.about_ice_left}
                 src={about_ice_left}
                 alt=""/>
            <img className={style.about_ice_right}
                 src={about_ice_right}
                 alt=""/>
            <img className={style.about_ice_desktop}
                 src={about_ice_desktop}
                 alt=""/>

            <h2 className={style.title}>About</h2>
            <p className={style.description}>
                ..are not only cute. They are considered to be very smart animals, living in the bamboo forests of the
                Himalayan and Heng-Duan Mountains.

                Did you know that there are less than 10.000 red pandas left in the wild? Our squad has a big heart for
                them and decided to put the red pandas into the unlimited crypto space.
            </p>

            <img className={style.about_divider_mobile}
                 src={about_divider_mobile}
                 alt=""/>
            <img className={style.about_divider_desktop}
                 src={about_divider_desktop}
                 alt=""/>

            <div className={style.links}>
                <a href="#">
                    <SvgIcon icon="icon-discord"/>
                </a>
                <a href="#">
                    <SvgIcon icon="icon-twitter"/>
                </a>
            </div>


        </section>
    );
}