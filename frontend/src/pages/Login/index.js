import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';


import './index.css'
import { clearState, loginUser, userSelector } from '../../features/user/userSlice';

function Login() {

    const dispatch = useDispatch();
    const history = useHistory();

    const { register, handleSubmit } = useForm();

    const { isFetching, isSuccess, isError, errorMessage } = useSelector(
        userSelector
    );
    const onSubmit = (data) => {
        dispatch(loginUser(data));
    };
    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, []);
    useEffect(() => {
        if (isError) {
            toast.error(errorMessage);
            dispatch(clearState());
        }
        if (isSuccess) {
            //dispatch(clearState());
            history.push('/profile');
        }
    }, [isError, isSuccess]);


    return (
        <div className="login">
            <div className="login__container">
                <h2>Login page</h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    method="POST">
                    <label>
                        <h5>E-mail</h5>
                    </label>
                    <input
                        type="email"
                        {...register("email")}
                    />

                    <label>
                        <h5>Mot de passe</h5>
                    </label>
                    <input
                        type="password"
                        {...register("password")}
                    />
                    <input
                        type="submit"
                        value="Se connecter"
                        className="login__loginButton" />
                </form>

                Ou <Link to="register">
                    <button className="login__loginButton">S'inscrire</button>
                </Link>

            </div>
        </div>
    )
}

export default Login
