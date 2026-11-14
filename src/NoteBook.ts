import type { Note } from "./Note.js";

export class NoteBook {
    public id: number;
    public title: string;
    private notes: Note[] = [];

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    public addNote(note: Note): void {
        this.notes.push(note);
        console.log("Note added successfully");
    }

    public removeNote(noteId: number): void {
        this.notes = this.notes.filter(
            (note) => note.id !== noteId
        );

        console.log("Note removed successfully");
    }

    public getAllNotes(): Note[] {
        return [...this.notes];
    }
}