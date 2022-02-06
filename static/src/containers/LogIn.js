import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/actions/productActions";

export const LogIn = ({ setToken }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUserName(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && password) {
      axios
        .post("http://localhost:5423/auth", {
          username: userName,
          password: password,
        })
        .then((res) => {
          console.log(res);
          dispatch(logIn({ token: res.data.token }));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setUserName("");
    setPassword("");
  };

  return (
    <div>
      <form className="ui form" onSubmit={handleSubmit}>
        <div class="field">
          <label>
            Name:
            <input
              type="text"
              value={userName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div class="field">
          <label>
            Email:
            <input
              type="password"
              value={password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <input className="ui button green" type="submit" value="Submit" />
      </form>
    </div>
  );
};
