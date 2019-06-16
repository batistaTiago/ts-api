import * as NodeMailer from 'nodemailer'
import { ContactInfo } from '../../modules/contact/contact.info';
import { EnvironmentConfig } from '../../config/env/config'

export class BTMailer {
    
    private email = 'python.email.smtp.modules@gmail.com'
    private password = 'testingPythonModules!'
    private settings = EnvironmentConfig.getSettings()
    
    private transporter: NodeMailer.Transporter
    private config = {
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: this.email, // generated ethereal user
            pass: this.password // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    }
    
    
    private static instance: BTMailer
    
    constructor() {
        this.transporter = NodeMailer.createTransport(this.config)
    }
    
    public static getInstance() {
        if (!this.instance) {
            this.instance = new BTMailer()
        }
        return this.instance
    }
    
    
    public async sendMail(data: ContactInfo): Promise<any> {
        try {
            const mailDeliveryResult = await this.transporter.sendMail({
                from: data.email,
                to: 'ekyidag@gmail.com',
                subject: data.subject,
                text: data.messageBody,
                html: null
            });

            console.log(mailDeliveryResult)

            return mailDeliveryResult
        } catch (e) {
            console.log(e)
            return null
        }
    }
    
}
