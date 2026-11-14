import { User } from "./User.js";
import type { Note } from "./Note.js";

export class Admin extends User {
    public manageNotes(notes: Note[]): void {
        console.log("Admin is managing notes:");

        notes.forEach((note) => {
            console.log(note.title);
        });
    }
}