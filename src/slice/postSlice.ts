import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchData = createAsyncThunk(
    'slice/fetchData',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11&offset=100')
            if (!response.ok) {
                throw new Error('error in API')
            }
            const data = await response.json()
            return data
        }
        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)

export const fetchOnePost = createAsyncThunk(
    'slice/fetchOnePost',
    async function (id: string, { rejectWithValue }) {
        try {
            const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)
            if (!response.ok) {
                throw new Error('error in API')
            }
            const data = await response.json()
            return data
        }

        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        status: null,
        error: null,
        posts: [],
        onePost: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state: any, { payload }: { payload: any }) => {
            state.status = "resolved";
            state.error = null;
            state.posts = payload.results
        })

        builder.addCase(fetchData.rejected, (state: any, { payload }: { payload: any }) => {
            state.status = "rejected";
            state.error = payload;
        })

        builder.addCase(fetchData.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        })

        //1Post
        builder.addCase(fetchOnePost.fulfilled, (state: any, { payload }: { payload: any }) => {
            state.status = "resolved";
            state.error = null;
            state.onePost = payload
        })

        builder.addCase(fetchOnePost.rejected, (state: any, { payload }: { payload: any }) => {
            state.status = "rejected";
            state.error = payload;
        })

        builder.addCase(fetchOnePost.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        })
    }
});

export const { } = postSlice.actions

export default postSlice.reducer