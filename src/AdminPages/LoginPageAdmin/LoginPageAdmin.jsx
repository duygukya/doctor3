import React, { useState } from "react";
import "./login.css";
import { requestWithoutAuth } from "../../helpers/requests";
import { useDispatch } from "react-redux";
import { setLoggedStatus } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { successToast } from "../../helpers/toast";

function LoginPageAdmin() {
    // State to store the input values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const login = async () => {
        // Handle the login logic here
        if (username == "admin" && password == "admin") {

            dispatch(setLoggedStatus(true))
            navigate("/admin")
            successToast("Giriş Yapıldı")

        }
    };

    return (
        <div style={{ height: "70vh" }} className="d-flex w-100 justify-content-center align-items-center">
            <div className="w-25 d-flex flex-column h-100 justify-content-center">
                <input
                    className="logininppp mb-3"
                    type="text"
                    placeholder="Kullanıcı Adı"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="logininppp mb-3"
                    type="password"
                    placeholder="Parola"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="buttonloginn" onClick={login}>
                    Giriş yap
                </button>
            </div>
        </div>
    );
}

export default LoginPageAdmin;
