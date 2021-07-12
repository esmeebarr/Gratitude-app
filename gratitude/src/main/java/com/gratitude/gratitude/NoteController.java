package com.gratitude.gratitude;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class NoteController {

//    //@Autowired
//    public INoteRepository repository;
//
//        // GET NOTES
//    @GetMapping("/notes")
//            public ResponseEntity<Note> getNotes() {
//        return new ResponseEntity(this.repository.findAll(), HttpStatus.OK);
//        }

    List<Note> Notes = new ArrayList<Note>();

    public NoteController() {
        Note Monday = new Note(0, "dog", "friends", "bed");
        notes.add(Monday);
    }

    @GetMapping("/notes")
    public List<Note> getNotes() {
        return this.notes;
    }

    @GetMapping("/notes/{noteId}")
    public Note getNote(@PathVariable String noteId) {
        int idAsInt = Integer.parseInt(noteId);
        return this.notes.get(idAsInt);
    }

    @PostMapping("/note")
    public Note createNote(@RequestBody Note note) {
        this.notes.add(note);

        return note;
    }

    // delete a student by id as well
    @DeleteMapping("/notes/delete")
    public Note deleteNote(@PathVariable String noteId) {
        int idAsInt = Integer.parseInt(noteId);
        return this.notes.remove(idAsInt);
    }
}

    }
