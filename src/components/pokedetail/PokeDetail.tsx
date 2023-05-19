import React, { FC } from 'react';
import cn from 'classnames'
import styles from './PokeDetail.module.scss'
import { IPokemonDetail } from '../../models/models';

interface PokeDetailProps {
    pokeInfo: IPokemonDetail
}

const PokeDetail: FC<PokeDetailProps> = ({ pokeInfo }) => {
    return (
        <div className={cn(styles.char__card, 'shadow-md')}>
            <div className={styles.char__img}>
                <img src={pokeInfo?.sprites.other.dream_world.front_default} alt={pokeInfo?.name} />
            </div>
            <div className={styles.char__text_info}>
                <h2 className={styles.char__name}>
                    {pokeInfo?.name}
                </h2>
                <div className={styles.char__types}>
                    <div>
                        {pokeInfo?.types.map(type => (
                            <span key={type.type.url} className={styles[type.type.name]}>{type.type.name}</span>
                        ))}
                    </div>
                </div>
                <div className={styles.char__stats}>
                    {pokeInfo?.stats.map(stat => (
                        <div key={stat.stat.url} className={styles.line}>
                            <h3>{stat.stat.name}</h3>
                            <span>{stat.base_stat}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokeDetail;