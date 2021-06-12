import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/actions/productActions";

export const OrderForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [cardInfo, setCardInfo] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const dispatch = useDispatch();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleAddress = (event) => {
    setMailAddress(event.target.value);
  };
  const handleCard = (event) => {
    setCardInfo(event.target.value);
  };

  const manageMessage = () => {
    setShowMessage(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && mailAddress && cardInfo) {
      setName("");
      setEmail("");
      setMailAddress("");
      setCardInfo("");
      setShowMessage(true);
      dispatch(emptyCart());
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div style={{ marginTop: "5rem" }}>
      {showMessage && (
        <div class="ui positive message">
          <i class="close icon" onClick={manageMessage}></i>
          <div class="header">Your order is complete</div>
        </div>
      )}
      <form
        className="ui form"
        onSubmit={handleSubmit}
        style={{ margin: "2rem", marginTop: "5rem", width: "500px" }}
      >
        <div class="field">
          <label>
            Name:
            <input type="text" value={name} onChange={handleName} />
          </label>
        </div>
        <div class="field">
          <label>
            Email:
            <input type="text" value={email} onChange={handleEmail} />
          </label>
        </div>
        <div class="field">
          <label>
            Address:
            <input type="text" value={mailAddress} onChange={handleAddress} />
          </label>
        </div>
        <div class="field">
          <label>
            Card Info:
            <input type="text" value={cardInfo} onChange={handleCard} />
          </label>
        </div>
        <input className="ui button green" type="submit" value="Submit" />
      </form>
    </div>
  );
};
