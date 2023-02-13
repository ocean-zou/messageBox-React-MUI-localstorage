import { useEffect, useState } from "react"
import {v4 as uuid} from "uuid"
import Note from "./Note"
import CreateNote from "./CreateNote"
import "../css/Notes.css"

export default function Notes() {
  const[notes,setNotes]=useState([])
  const[inputText,setInputText]=useState("")

  const textHandle=(e) => {
    setInputText(e.target.value)
  }
  const saveHandle=() => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText
      }
    ]
    );
    setInputText("")
  }
  const deleteNote=(id) => {
    const filterNotes = notes.filter(note => 
      note.id !== id
    );
    setNotes(filterNotes)
  }
  
  useEffect(() => {
    const data=JSON.parse(localStorage.getItem("Notes"))
    if (data.length>0) {
      setNotes(data)
    }
  },[]
  )
  useEffect(() => {
    localStorage.setItem("Notes",JSON.stringify(notes))
  },[notes])
  
  return (
    <div className='notes'>
      {notes.map(note => (
        <Note
          key={note.id}
          text={note.text}
          id={note.id}
          deleteNote={deleteNote}
        />
        ))} 
      <CreateNote
        textHandle={textHandle}
        inputText={inputText}
        saveHandle={saveHandle}
      />
    </div>
  ) 
}
