export class ContactInfo {
    name: string
    email: string
    phoneNumber: string
    subject: string
    messageBody: string

    constructor({name, email, phoneNumber, subject, messageBody})  {
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.subject = subject
        this.messageBody = messageBody
    }

    public isValid() {
        return (
            this.name &&
            this.email &&
            this.phoneNumber &&
            this.subject &&
            this.messageBody
        )
    }
}