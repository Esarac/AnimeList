import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserWithId } from '../../models/login'

type stateType = {
    actual: UserWithId | null
}

const initialState: stateType = {
    actual: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<UserWithId>) => {
            state.actual = action.payload
        },
        logOut: (state) => {
            state.actual = null;
        },
    },
})

export const userActions = userSlice.actions
export default userSlice.reducer;