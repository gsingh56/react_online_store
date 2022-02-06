import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/actions/productActions";

export const OrderForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    mailAddress: "",
    cardInfo: "",
    showMessage: false,
  });

  const dispatch = useDispatch();

  const handleChanges = (event) => {
    const value = event.target.value;

    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const manageMessage = () => {
    setState({ ...state, showMessage: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.name && state.email && state.mailAddress && state.cardInfo) {
      setState({
        name: "",
        email: "",
        mailAddress: "",
        cardInfo: "",
        showMessage: true,
      });
      dispatch(emptyCart());
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="topMargin">
      {state.showMessage && (
        <div class="ui positive message">
          <i class="close icon" name="showMessage" onClick={manageMessage}></i>
          <div class="header">Your order is complete</div>
        </div>
      )}
      <form className="ui form order" onSubmit={handleSubmit}>
        <div class="field">
          <label>
            Name:
            <input
              type="text"
              value={state.name}
              name="name"
              onChange={handleChanges}
            />
          </label>
        </div>
        <div class="field">
          <label>
            Email:
            <input
              type="text"
              value={state.email}
              name="email"
              onChange={handleChanges}
            />
          </label>
        </div>
        <div class="field">
          <label>
            Address:
            <input
              type="text"
              value={state.mailAddress}
              name="mailAddress"
              onChange={handleChanges}
            />
          </label>
        </div>
        <div class="field">
          <label>
            Card Info:
            <input
              type="text"
              value={state.cardInfo}
              name="cardInfo"
              onChange={handleChanges}
            />
          </label>
        </div>
        <input className="ui button green" type="submit" value="Submit" />
      </form>
    </div>
  );
};
