import validator from "validator";

export default class Contact{
    private name: string|undefined;
    private firstName: string|undefined;
    private email: string|undefined;
    private message: string|undefined;

    constructor(contact: Contact | undefined) {
        if(contact) {
            this.contactName = contact.contactName;
            this.contactFirstName = contact.contactFirstName;
            this.contactEmail = contact.contactEmail;
            this.contactMessage = contact.contactMessage;
        }
    }


    get contactName(): string | undefined {
        return this.name;
    }

    set contactName(value: string | undefined) {
        this.name = value;
    }

    get contactFirstName(): string | undefined {
        return this.firstName;
    }

    set contactFirstName(value: string | undefined) {
        this.firstName = value;
    }

    get contactEmail(): string | undefined {
        return this.email;
    }

    set contactEmail(value: string | undefined) {
        this.email = value;
    }

    get contactMessage(): string | undefined {
        return this.message;
    }

    set contactMessage(value: string | undefined) {
        this.message = value;
    }
}