import React, {FC} from 'react';
import style from './style.module.scss';

export const links = [
    {
        title: 'PreSale',
        slug: 'preSale',
    },
    {
        title: 'About',
        slug: 'about',
    },
    {
        title: 'Rarity',
        slug: 'rarity',
    },
    {
        title: 'Roadmap',
        slug: 'roadmap',
    },
];


export const Menu: FC = () => {
    return (
        <div className={style.menu}>
            {
                links.map(
                    link => (
                        <a key={link.slug}
                           href={`#${link.slug}`}
                           className={style.link}
                        >
                            {link.title}
                        </a>
                    )
                )
            }
        </div>
    );
}


