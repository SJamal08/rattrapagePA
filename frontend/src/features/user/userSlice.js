import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const signupUser = createAsyncThunk(
    "users/signupUser",
    async ({ username, email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                "http://localhost:8000/api/auth/signup",
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
                //localStorage.setItem("token", data.token)
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


export const userSlice = createSlice({
    name: "user",
    initialState: {
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
        }
    },
})

export const { clearState } = userSlice.actions;

export const userSelector = state => state.user