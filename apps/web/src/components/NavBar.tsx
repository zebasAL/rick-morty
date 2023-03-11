import React, { useState } from "react";
import styles from "../styles/app.module.sass";
export default function Navbar() {
  return (
    <div className="nav">
      <div className="itemList">
        <text className="options">navItem1</text>
        <text className="options">navItem2</text>
        <text className="options">navItem3</text>
      </div>
    </div>
  );
}
