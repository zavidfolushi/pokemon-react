import React from 'react';
import './App.scss';
import Logo from './components/logo/Logo';
import { useGetAllPokemonInfoQuery, useLazyGetPokemonDetailQuery } from './store/pokemon/pokemon.api';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { pokemonActions } from './store/pokemon/pokemonSlice';
import PokeBlock from './components/pokeblock/PokeBlock';
import PokeDetail from './components/pokedetail/PokeDetail';
import Loader from './components/loader/Loader';

function App() {
  const { pokemonsShowMore } = pokemonActions;
  const savedPoke = useAppSelector(store => store.pokemonSlice.pokemonsToShow)
  const dispatch = useAppDispatch()

  const { data: PokemonsNameAndUrl, isLoading, isError } = useGetAllPokemonInfoQuery(savedPoke)

  const [fetchInfo, { data: PokemonDetail, isLoading: detailLoading }] = useLazyGetPokemonDetailQuery()


  const clickHandle = (str: string) => {
    fetchInfo(str)
  }



  return (
    <>
      <div className='container mx-auto pb-11'>
        <Logo />

        {isError && <h1 className=' font-bold text-center max-w-full text-white'>Opps... something wrong</h1>}
        <div className="flex justify-between relative pb-11">
          <div className='side__left sm:grid-cols-2  lg:grid-cols-3 grid auto-rows-max grid-cols-1 gap-6'>
            {!isError && PokemonsNameAndUrl?.map(pokemon => (
              <PokeBlock key={pokemon.url} openFullInfo={clickHandle} name={pokemon.name} />
            ))}
            {isLoading && <Loader />}
          </div>
          <div className='side__rigth'>
            {detailLoading && <Loader />}
            {!detailLoading && PokemonDetail && <PokeDetail pokeInfo={PokemonDetail} />}
          </div>
        </div>
        {
          !isError &&
          PokemonsNameAndUrl &&
          <button className='load' onClick={() => dispatch(pokemonsShowMore(12))}>Show more</button>
        }
      </div>
    </>
  );
}

export default App;
