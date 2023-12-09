import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id
    });
  };
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense
    });
  };
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button
          className="rounded-circle"
          style={{
            backgroundColor: "green",
            color: "white",
            size: "2.2em",
            fontWeight: "bold"
          }}
          onClick={(event) => increaseAllocation(props.name)}
        >
          +
        </button>
      </td>
      <td>
        <button
          className="rounded-circle"
          style={{
            backgroundColor: "orange",
            color: "white",
            size: "3.2em",
            fontWeight: "bold"
          }}
          onClick={(event) => decreaseAllocation(props.name)}
        >
          -
        </button>
      </td>
      <td>
        <button
          className="rounded-circle"
          style={{
            backgroundColor: "red"
          }}
          onClick={handleDeleteExpense}
        >
          <TiDelete size="1.5em"></TiDelete>
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
