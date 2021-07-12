import React from "react";
import "../Notes.scss";

const Notes = () => {
  return (
    <div>
      <h3>Today I am grateful for:</h3>
      <form>
        <label>1.</label>
        <input type="text"></input>
        <label>2.</label>
        <input type="text"></input>
        <label>3.</label>
        <input type="text"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
