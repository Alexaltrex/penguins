import React, {FC} from 'react';
import style from './style.module.scss';
import {links} from "../Home/Menu/Menu";
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import solanart from '../../../assets/img/solanart.png';
import eggs from '../../../assets/img/eggs.png';

const enabledSteps = [true, true, false, false, false]

export interface IFeature {
    id: number
    icon?: string
    png?: string
    title: string
    subtitle?: string
    checked: boolean
    link?: {
        title: string
        link: string
    }
}

export interface IStep {
    active: boolean
    number: string
    title: string
    features: IFeature[]
}

const steps: IStep[] = [
    {
        active: true,
        number: '01',
        title: 'Launching',
        features: [
            {
                id: 0,
                icon: 'icon-twitter',
                title: 'Campaign',
                checked: true,
            },
            {
                id: 1,
                icon: 'icon-discord',
                title: 'Campaign',
                checked: true,
            },
            {
                id: 2,
                icon: 'icon-discord',
                title: 'Pre-sale',
                subtitle: '1111 penguins are open to mint for whitelisted pre-sale participants',
                checked: false,
            },
            {
                id: 3,
                icon: 'icon-discord',
                title: 'Main-Sale',
                subtitle: 'The remaining 3333 penguins are now open for minting by anyone at 0.8 Sol per penguin',
                checked: false,
            },
        ]
    },
    {
        active: true,
        number: '02',
        title: 'Listing on secondary markets',
        features: [
            {
                id: 0,
                icon: 'icon-digitaleyes',
                title: 'Digitaleyes',
                checked: false,
            },
            {
                id: 1,
                png: solanart,
                title: 'Solanart',
                link: {
                    title: 'Visit',
                    link: '#',
                },
                checked: true,
            },

        ]
    },
    {
        active: false,
        number: '03',
        title: 'Donation',
        features: [
            {
                id: 0,
                title: 'Penguin Conservation Fund',
                subtitle: '10% donation',
                checked: false,
            },
        ]
    },
    {
        active: false,
        number: '04',
        title: 'Competition',
        features: [
            {
                id: 0,
                icon: 'icon-competition',
                title: 'Competition',
                subtitle: 'between penguins holders on Discord',
                checked: false,
            },
        ]
    },
    {
        active: false,
        number: '05',
        title: 'Donation',
        features: [
            {
                id: 0,
                title: 'Wildlife Aid Founfation',
                subtitle: '10% donation',
                checked: false,
            },
        ]
    },
    {
        active: false,
        number: '06',
        title: 'Future Projects',
        features: [
            {
                id: 0,
                png: eggs,
                title: 'Airdrop eggs',
                subtitle: 'for penguin holders',
                checked: false,
            },
        ]
    },
]


export const Roadmap: FC = () => {
    return (
        <section className={style.roadmap}
                 id={links[3].slug}
        >
            <h2 className={style.title}>Roadmap</h2>

            <div className={style.steps}>
                {
                    steps.map(step => (
                        <div className={style.step} key={step.number}>

                            <div className={style.title_block}
                                 style={{
                                     opacity: step.active ? 1 : 0.2
                                 }}
                            >
                                <p className={style.number}>{step.number}</p>
                                <div className={style.title_hr}>
                                    <p className={style.title}>{step.title}</p>
                                    <div className={style.hr}/>
                                </div>
                            </div>
                            <div className={style.mobile_hr}
                                 style={{
                                     opacity: step.active ? 1 : 0.2
                                 }}
                            />

                            <div className={style.features}>
                                {
                                    step.features.map(feature => (
                                        <div className={style.feature_item} key={feature.id}
                                             style={{
                                                 opacity: feature.checked ? 1 : 0.5
                                             }}
                                        >
                                            <div className={style.title_checked_block}>

                                                <div className={style.icon_title_block}>
                                                    {
                                                        feature.icon && <SvgIcon icon={feature.icon}/>
                                                    }
                                                    {
                                                        feature.png && <img src={feature.png} alt=""/>
                                                    }
                                                    <p>{feature.title}</p>
                                                </div>

                                                {
                                                    feature.checked &&
                                                    <div className={style.icon_checked_block}>
                                                        {
                                                            feature.link &&
                                                            <a href={feature.link.link}>{feature.link.title}</a>
                                                        }
                                                        <SvgIcon icon="icon-checked"/>
                                                    </div>
                                                }

                                            </div>

                                            {
                                                feature.subtitle &&
                                                <div className={style.subtitle}>
                                                    {feature.subtitle}
                                                </div>
                                            }


                                        </div>
                                    ))
                                }
                            </div>


                        </div>
                    ))
                }

            </div>


        </section>
    );
}