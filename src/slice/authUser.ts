
import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit'

interface IObj {
    'username': string,
    'email': string,
    'password': string,
    'course_group': number
}

export const fetchAuthUser = createAsyncThunk(
    'slice/fetchAuthUser',
    async function (obj:IObj, { rejectWithValue }) {
        try {
            const response = await fetch("http://studapi.teachmeskills.by/auth/users/",
                {
                    method: 'POST',
                    body: JSON.stringify(obj),
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                })
            if (!response.ok) {
                throw new Error('ошибка в users')
            }
            const data = await response.json()
            return data
        }

        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)

export const authUser = createSlice({
    name: 'authUser',
    initialState: {
        status: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        //authUser
        builder.addCase(fetchAuthUser.fulfilled, (state: any, { payload }: { payload: any }) => {
            state.status = "resolved";
            state.error = null;
            console.log(payload)
        })

        builder.addCase(fetchAuthUser.rejected, (state: any, { payload }: { payload: any }) => {
            state.status = "rejected";
            state.error = payload;
        })

        builder.addCase(fetchAuthUser.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        })
    }
});

export const { } = authUser.actions

export default authUser.reducer