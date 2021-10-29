import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const signupUser = createAsyncThunk(
    "users/signupUser",
    async ({ username, email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                process.env.REACT_APP_BACKEND_URL+"/api/auth/signup",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                    }),
                }
            )
            let data = await response.json()
            console.log("data", data)
            if (response.status === 201) {
                return { ...data, username: username, email: email }
            } else {
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error", e.response.data)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

export const loginUser = createAsyncThunk(
    "users/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                process.env.REACT_APP_BACKEND_URL+"/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            )
            let data = await response.json()
            console.log("response", data)
            if (response.status === 200) {
                localStorage.setItem("token", data.token)
                return data
            } else {
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error", e.response.data)
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


export const userSlice = createSlice({
    name: "user",
    initialState: {
        id: "",
        username: "",
        email: "",
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;

            return state;
        }
    }
    ,
    extraReducers: {
        [signupUser.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            // state.email = payload.user.email;
            // state.username = payload.user.name;
        },
        [signupUser.pending]: (state) => {
            state.isFetching = true;
        },
        [signupUser.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            // state.errorMessage = payload.message;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            //state.email = payload.email;
            //state.username = payload.name;
            state.id = payload._id
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [loginUser.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.error;
        },
        [loginUser.pending]: (state) => {
            state.isFetching = true;
        },
    },
})

export const { clearState } = userSlice.actions;

export const userSelector = state => state.user
