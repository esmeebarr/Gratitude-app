import React from "react";
import { Switch, Route } from "react-router-dom";
//import NoteList from "../NoteList/NoteList";
import CreateNote from "../CreateNote/CreateNote";

const Routes = () => {
  return (
        <Switch>
      {/* <Route path="/notelist">
        <NoteList />
      </Route> */}
      <Route path="/createnote">
        <CreateNote />
      </Route>
    </Switch>

  )
}

export default Routes;