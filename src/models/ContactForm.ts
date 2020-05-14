import Contact from "@/models/Contact";
import validator from "validator";

export default class ContactForm extends Contact{
    private _nameEmpty = false;
    private _firstNameEmpty = false;
    private _emailEmpty = false;
    private _emailValid = true;
    private _messageEmpty = false;

    constructor() {
        super(undefined);
    }

    get nameEmpty(): boolean {
        return this._nameEmpty;
    }

    get firstNameEmpty(): boolean {
        return this._firstNameEmpty;
    }

    get emailEmpty(): boolean {
        return this._emailEmpty;
    }

    get emailValid(): boolean {
        return this._emailValid;
    }

    get messageEmpty(): boolean {
        return this._messageEmpty;
    }

    checkName(){
        this._nameEmpty = !this.contactName;
    }

    checkFirstName(){
        this._firstNameEmpty = !this.contactFirstName;
    }

    checkEmail(){
        this._emailEmpty = !this.contactEmail;
        this._emailValid = this.contactEmail !== undefined && validator.isEmail(this.contactEmail);
    }

    checkMessage(){
        this._messageEmpty = !this.contactMessage;
    }

    checkContact(){
        this.checkName();
        this.checkFirstName();
        this.checkEmail();
        this.checkMessage();
        return !(this.nameEmpty || this.firstNameEmpty || this.emailEmpty || this.messageEmpty || !this.emailValid);
    }
}