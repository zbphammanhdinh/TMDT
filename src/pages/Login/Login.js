import './Login.scss';
import logo from '../../assets/images/logo.png';
import React, { useEffect, useState } from 'react';
import UserService from '../../services/UserService';

function Login(props) {

    let login = props.login;
    let form;

    const [inputData, setInputData] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState()

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        let _data = { ...inputData };
        _data[e.target.id] = e.target.value;
        setInputData(_data);
    }

    const handleValidation = () => {
        let dt = { ...inputData };
        let err = {};
        let formIsValid = true;

        //Name
        if (!dt["username"]) {
            formIsValid = false;
            err["name"] = "Cannot be empty";
        }

        if (typeof dt["name"] !== "undefined") {
            if (!dt["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                err["name"] = "Only letters";
            }
        }

        //Password
        if (!dt["password"]) {
            formIsValid = false;
            err["password"] = "Cannot be empty";
        }

        // //Email
        // if (!dt["email"]) {
        //     formIsValid = false;
        //     err["email"] = "Cannot be empty";
        // }

        // if (typeof dt["email"] !== "undefined") {
        //     let lastAtPos = dt["email"].lastIndexOf("@");
        //     let lastDotPos = dt["email"].lastIndexOf(".");

        //     if (
        //         !(
        //             lastAtPos < lastDotPos &&
        //             lastAtPos > 0 &&
        //             dt["email"].indexOf("@@") == -1 &&
        //             lastDotPos > 2 &&
        //             dt["email"].length - lastDotPos > 2
        //         )
        //     ) {
        //         formIsValid = false;
        //         err["email"] = "Email is not valid";
        //     }
        // }

        setError(err)
        return formIsValid;
    }


    const handleLoginSubmit = (e) => {
        if(handleValidation){
            sessionStorage.setItem('token', '123');
            window.location.reload();
        }
    }

    useEffect(() => {
    })

    login ?
        form = <form className="logreg-form">
            <h3 className="logreg-header">Welcome to TUB OnlineBanking</h3>
            <input id="username" className="logreg-input" type="text" placeholder="Username" onChange={handleInputChange} value={inputData.username} required></input>
            <input id="password" className="logreg-input" type="password" placeholder="Password" onChange={handleInputChange} value={inputData.password} required></input>
            <div className="logreg-inner">
                <button className="logreg-button" type="button" onClick={handleLoginSubmit}>LOGIN</button>
                <a href="register" className="logreg-link">Don't have an account</a>
            </div>
        </form>
        : form = <form className="logreg-form" action="login">
            <h3 className="logreg-header">Creating your online account</h3>
            <input className="logreg-input" type="text" placeholder="Full Name"></input>
            <input className="logreg-input" type="text" placeholder="Phone Number"></input>
            <input className="logreg-input" type="text" placeholder="Address"></input>
            <input className="logreg-input" type="text" placeholder="Citizen Identification"></input>
            <input className="logreg-input" type="text" placeholder="Username"></input>
            <input className="logreg-input" type="password" placeholder="Password"></input>
            <div className="logreg-inner">
                <button className="logreg-button" type="submit">REGISTER</button>
                <a href="login" className="logreg-link">Already have an account</a>
            </div>
        </form>

    return (
        <main className="logreg-main">
            {loading && <div className="loader"></div>}
            <figure className="logo img">
                <img src={logo} alt="" className=""></img>
            </figure>
            <div className="container">
                {form}
            </div>
        </main>
    );
}

export default Login;