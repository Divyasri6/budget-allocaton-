import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Location = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [selectedOption, setSelectedOption] = useState("");
  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    dispatch({
      type: "CHG_CURRENCY",
      payload: selectedCurrency
    });
  };

  return (
    <div className="alert alert-success">
      <select
        name="hover_color"
        id="currency"
        value={currency}
        onChange={handleCurrencyChange}
        style={{
          backgroundColor: "#33FF49",
          color: "white"
        }}
      >
        <option style={{ color: "black" }} value="$">
          {currency === "$" ? "Currency ($ Dollar)" : "$ Dollar"}
        </option>
        <option style={{ color: "black" }} value="£">
          {currency === "£" ? "Currency (£ Pound)" : "£ Pound"}
        </option>
        <option style={{ color: "black" }} value="€">
          {currency === "€" ? "Currency (€ Euro)" : "€ Euro"}
        </option>
        <option style={{ color: "black" }} value="₹">
          {currency === "₹" ? "Currency (₹ Rupee)" : "₹ Rupee"}
        </option>
      </select>
    </div>
  );
};

export default Location;
