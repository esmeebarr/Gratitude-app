package com.gratitude.gratitude;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="notes")
public class Note {
    @Id
    @GeneratedValue
    private int id;
    private String firstNote;
    private String secondNote;
    private String thirdNote;

    public Note() {

    }

    public Note(String firstNote, String secondNote, String thirdNote) {
        this.id = id;
        this.firstNote = firstNote;
        this.secondNote = secondNote;
        this.thirdNote = thirdNote;
    }

    public int getId() {
        return id;
    }

    public void setFirstNote(String firstNote) {
        this.firstNote = firstNote;
    }

    public void setSecondNote(String secondNote) {
        this.firstNote = firstNote;
    }

    public void setThirdNote(String firstNote) {
        this.firstNote = firstNote;
    }

}