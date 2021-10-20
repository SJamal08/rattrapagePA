import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { signupUser, userSelector, clearState } from '../../features/user/userSlice';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

import './index.css'

function Register() {

    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const { isFetching, isSuccess, isError, errorMessage } = useSelector(
        userSelector
    );
    const onSubmit = (data) => {
        dispatch(signupUser(data));
    };

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, []);

    useEffect(() => {
        if (isSuccess) {
            dispatch(clearState());
            history.push('/');
        }
        if (isError) {
            toast.error(errorMessage);
            dispatch(clearState());
        }
    }, [isSuccess, isError]);

    return (
        <div className="register">

            <div className="register__container">
                <h2 className="text__page">Register page</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    method="POST">
                    <label>
                        <h5 className="text__page"> Nom d'utilisateur </h5>
                        <input
                            {...register("username")}
                        />
                    </label>
                    <label>
                        <h5 className="text__page"> E-mail </h5>

                        <input
                            {...register("email")}
                            type="email"
                        />
                    </label>
                    <label>
                        <h5 className="text__page"> Mot de passe </h5>
                        <input
                            {...register("password")}
                            type="password"
                        />
                    </label>
                    <input
                        type="submit"
                        value="S'inscrire"
                        className="register__registerButton"
                    />
                </form>

                <h6 className="text__page">Ou</h6>

                 <Link to="login">
                    <button className="register__loginButton">Se connecter</button>
                </Link>

            </div>
        </div>
    )
}

export default Register
