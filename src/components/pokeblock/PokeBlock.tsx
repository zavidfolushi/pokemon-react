import React, { FC } from 'react';
import cn from 'classnames'
import styles from './PokeBlock.module.scss'
import { useGetPokemonDetailQuery } from '../../store/pokemon/pokemon.api';

interface PokeBlockProps {
    name: string
    openFullInfo(name: string): void;
}

const PokeBlock: FC<PokeBlockProps> = ({ name, openFullInfo }) => {

    const { data } = useGetPokemonDetailQuery(name)

    const open = () => {
        openFullInfo(name)
    }

    return (


        <div onClick={open} className={cn(styles.char__card, 'shadow-md')}>
            <div className={styles.char__img}>
                <img src={data?.sprites.other.dream_world.front_default ? data?.sprites.other.dream_world.front_default : data?.sprites.front_default} alt={data?.name} />
            </div>
            <div className={styles.char__text_info}>
                <h2 className={styles.char__name}>
                    {data?.name}
                </h2>
                <div className={styles.char__types}>
                    {data?.types.map(type => (
                        <span key={type.slot} className={styles[type.type.name]}>{type.type.name}</span>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default PokeBlock;