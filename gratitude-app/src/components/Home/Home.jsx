 import React from "react";
import Navigation from "../Navigation/Navigation";
import "../Home.scss";
import Notes from "../Notes/Notes";

const Home = (props) => {
  const {id, firstNote, secondNote, thirdNote} = props.notes;
  return (
    <div className="home">
        <p>{id}<p>
        <p>{firstNote}<p>
        <p>{secondNote}<p>
        <p>{thirdNote}<p>
    </div>
  );
};

export default Home;
