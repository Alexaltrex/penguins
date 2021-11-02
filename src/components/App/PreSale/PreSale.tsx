import React, {FC, useEffect, useState} from 'react';
import style from './style.module.scss';
import pre_sale_mobile from '../../../assets/img/pre_sale_mobile.png';
import pre_sale_desktop from '../../../assets/img/pre_sale_desktop.png';
import pre_sale_for from '../../../assets/img/pre_sale_for.png'
import sign from '../../../assets/img/sign.png'
import {links} from "../Home/Menu/Menu";
import clsx from "clsx";
import {Modal} from "../../common/Modal/Modal";

const dateEnd = new Date(2021, 10, 4, 5, 55); // дата окончания
const connectedTheWalletFromApi = false; // подключил или нет кошелек

export const convertToTwoDigit = (num: number): string => num > 9 ? String(num) : `0${num}`;

export const getDays = (ms: number) => {
    const days = Math.trunc(ms / (60000 * 60 * 24));
    return days
}
export const getHours = (ms: number) => {
    const min = ms / 60000;
    const days = Math.trunc(min / (60 * 24));
    const hours = Math.trunc(((min - days * 24 * 60)) / 60);
    return hours;
}

export const getMins = (ms: number) => {
    const min = ms / 60000;
    const days = Math.trunc(min / (60 * 24));
    const hours = Math.trunc(((min - days * 24 * 60)) / 60);
    const minutes = Math.trunc(min - days * 24 * 60 - hours * 60)
    return minutes;
}

export interface IPreSale {
    setShowModalHandler: (showModal: boolean) => void
}

export const PreSale: FC<IPreSale> = ({setShowModalHandler}) => {
    const [timeIsOver, setTimeIsOver] = useState(false);
    const [connectedTheWallet, setConnectedTheWallet] = useState(connectedTheWalletFromApi);

    const [time, setTime] = useState(
        0
    )
    const [start, setStart] = useState(false);

    useEffect(() => {
        const time = new Date(dateEnd.getTime() - new Date().getTime()).getTime();
        if (time > 0 && !timeIsOver) {
            setTime(time);
            setStart(true);
        }
    }, []);



    const onClickHandler = () => {
        if (!connectedTheWallet) {
            setConnectedTheWallet(true);
        } else {
            setShowModalHandler(true);
        }
    };

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (start) {
                if (time <= 60000) {
                    setTimeIsOver(true);
                    clearTimeout(timeId);
                } else {
                    setTime(time => time - 60000);
                }
            }
        }, 50);
        return () => {
            clearTimeout(timeId);
        }
    }, [time]);

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
                    {
                        !timeIsOver
                            ? (
                                <div className={style.timeBlock}>
                                    <div className={style.itemBlock}>
                                        <p>{
                                            convertToTwoDigit(getDays(time))}
                                        </p>
                                        <p>DAYS</p>
                                    </div>
                                    <div className={style.divider}/>
                                    <div className={style.itemBlock}>
                                        <p>{convertToTwoDigit(getHours(time))}</p>
                                        <p>hours</p>
                                    </div>
                                    <div className={style.divider}/>
                                    <div className={style.itemBlock}>
                                        <p>{
                                            convertToTwoDigit(getMins(time))
                                        }</p>
                                        <p>mins</p>
                                    </div>
                                </div>
                            )
                            : (
                                <button className={clsx({
                                    [style.button]: true,
                                    [style.button_mint]: connectedTheWallet,
                                    [style.button_connect]: !connectedTheWallet,
                                })}
                                        onClick={onClickHandler}
                                >
                                    {connectedTheWallet ? 'MINT' : 'CONNECT'}
                                </button>
                            )
                    }
                </div>

                <p className={style.description}>1111 penguins are open to mint for whitelisted pre-sale
                    participants
                </p>
            </div>




        </section>
    );
}