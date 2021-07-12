import React from "react";
import "./CreateNote.scss";

const CreateNote = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const requestBody = {
      firstNote: e.target[0].value,
      secondNote: e.target[1].value,
      thirdNote: e.target[2].value,
    };
    console.log(requestBody);

    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
    fetch("http://localhost:8080/note", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // 4. Show some indication that it's been sent/successful
        alert("Created a new note!");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="noteForm">
        <h3 className="heading">Today I am grateful for:</h3>
        <label>1.</label>
        <textarea type="text"></textarea>
        <label>2.</label>
        <textarea type="text"></textarea>
        <label>3.</label>
        <textarea type="text"></textarea>
        <button className="submitButton" type="submit" value="Submit">
          Add
        </button>
      </form>
    </>
  );
};

export default CreateNote;
