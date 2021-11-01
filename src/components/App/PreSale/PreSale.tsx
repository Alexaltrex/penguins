import React, {FC} from 'react';
import style from './style.module.scss';
import pre_sale_mobile from '../../../assets/img/pre_sale_mobile.png';
import pre_sale_desktop from '../../../assets/img/pre_sale_desktop.png';
import {ConnectButton} from "../../common/ConnectButton/ConnectButton";
import pre_sale_for from '../../../assets/img/pre_sale_for.png'
import sign from '../../../assets/img/sign.png'
import {links} from "../Home/Menu/Menu";

export const PreSale: FC = () => {
    return (
        <section className={style.preSale}
                 id={links[0].slug}
        >
            <div className={style.innerWrapper}>
                <div className={style.elipsWrapper}>
                    <div className={style.elips}/>
                </div>

                <img className={style.penguinsMobile}
                     src={pre_sale_mobile}
                     alt=""
                />

                <img className={style.sign}
                    src={sign}
                     alt=""/>

                <img className={style.penguinsDesktop}
                     src={pre_sale_desktop}
                     alt=""
                />

                <div className={style.connectButtonWrapper}>
                    <ConnectButton/>
                </div>

                <h2 className={style.title}>Pre-sale</h2>
                <p className={style.mint}>Mint Your Penguins</p>


                <div className={style.white_for_time_wrapper}>
                    <div className={style.white_for_wrapper}>
                        <p className={style.whitelist}>Whitelist</p>

                        <div className={style.for_wrapper}>
                            <p>For 0.5</p>
                            <img src={pre_sale_for}
                                 alt=""
                            />
                        </div>
                    </div>
                    <div className={style.timeBlock}>
                        <div className={style.itemBlock}>
                            <p>99</p>
                            <p>DAYS</p>
                        </div>
                        <div className={style.divider}/>
                        <div className={style.itemBlock}>
                            <p>12</p>
                            <p>hours</p>
                        </div>
                        <div className={style.divider}/>
                        <div className={style.itemBlock}>
                            <p>46</p>
                            <p>mins</p>
                        </div>
                    </div>
                </div>





                <p className={style.description}>1111 penguins are open to mint for whitelisted pre-sale participants</p>


            </div>

        </section>
    );
}