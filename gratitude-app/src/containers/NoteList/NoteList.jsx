import React from "react";


const NoteList = () => {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/notes")
    .then((response) => response.json())
    .then((jsonResponse) => {
      setNoteList(jsonResponse);
    });
  }, []);

  const getNotes = (notes) => {
    return <Home notes={notes} />
  };

  return (
    <>
    <div className="container">
    <h1>Past Entries</h1>
    {Home.map(getNote)}
    <Notes />
     <button>View</button>
    <button>Delete</button>
    </div>
    </>
  )

  };

export default NoteList;