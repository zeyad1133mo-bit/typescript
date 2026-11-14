import type { NoteBook } from "./NoteBook.js";

export class User {
    public id: number;
    public name: string;
    protected email: string;
    private password: string;
    public phone: string;
    private age: number;

    public notebooks: NoteBook[] = [];

    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number
    ) {
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }

        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }

    public displayInfo(): void {
        console.log("User Information:");
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Age: ${this.age}`);
    }

    public addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }
}