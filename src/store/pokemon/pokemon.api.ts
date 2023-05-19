 import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IAllPokemon, IPokemon, IPokemonDetail } from '../../models/models'

 export const pokemonApi = createApi({
    reducerPath: 'pockemon/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    endpoints: build => ({
        getAllPokemonInfo: build.query<IPokemon[], number>({
            query: (limit) => ({
                url: `pokemon`,
                params: {
                    limit
                }
            }),
            transformResponse: (response: IAllPokemon<IPokemon>) => response.results
        }),
        getPokemonDetail: build.query<IPokemonDetail, string | null>({
            query: (name: string) => ({
                url: `pokemon/${name}`,
            }),
        }),
    })
 })

 export const {useGetAllPokemonInfoQuery, useLazyGetPokemonDetailQuery, useGetPokemonDetailQuery} = pokemonApi
