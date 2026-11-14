import { User } from "./User.js";
import { Admin } from "./Admin.js";
import { Note } from "./Note.js";
import { NoteBook } from "./NoteBook.js";
import { Storage } from "./Storage.js";


const user1 = new User(
    1,
    "Ahmed",
    "ahmed@gmail.com",
    "123456",
    "01012345678",
    21
);


user1.displayInfo();

const admin1 = new Admin(
    2,
    "Admin",
    "admin@gmail.com",
    "admin123",
    "01098765432",
    30
);

console.log("\n--- Admin ---");
admin1.displayInfo();


const note1 = new Note(
    1,
    "First Note",
    "This is my first note using TypeScript OOP assignment.",
    user1
);

const note2 = new Note(
    2,
    "Second Note",
    "Learning TypeScript and Object Oriented Programming.",
    user1
);

console.log("\n--- Note Preview ---");
console.log(note1.preview());


const notebook1 = new NoteBook(1, "My Notebook");

notebook1.addNote(note1);
notebook1.addNote(note2);

user1.addNotebook(notebook1);

console.log("\n--- Notebook Notes ---");
console.log(notebook1.getAllNotes());


console.log("\n--- Admin Management ---");
admin1.manageNotes(notebook1.getAllNotes());

notebook1.removeNote(1);

console.log("\n--- Notes After Removal ---");
console.log(notebook1.getAllNotes());


const noteStorage = new Storage<Note>();

noteStorage.addItem(note1);
noteStorage.addItem(note2);

console.log("\n--- Storage Items ---");
console.log(noteStorage.getAllItems());

noteStorage.removeItem(note1);

console.log("\n--- Storage After Removal ---");
console.log(noteStorage.getAllItems());