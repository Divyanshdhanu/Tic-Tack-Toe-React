import React from "react";
import { FaPen, FaTimes, FaRegCircle } from "react-icons/fa";

function Icon(props) {
  console.log(props.name);
  switch (props.name) {
    case "circle":
      return <FaRegCircle className="icons" />;

    case "cross":
      return <FaTimes className="icons" />;

    default:
      return <FaPen className="icons" />;
  }
}

export default Icon;
