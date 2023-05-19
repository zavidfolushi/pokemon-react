import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface PokemonState {
    pokemonsToShow: number;
}

const initialState: PokemonState = {
    pokemonsToShow: 12,
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        pokemonsShowMore(state, action: PayloadAction<number>) {
            state.pokemonsToShow += action.payload
        },

    },
    extraReducers: {
    }
})

export default pokemonSlice.reducer;
export const pokemonActions = pokemonSlice.actions