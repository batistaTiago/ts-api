import * as NodeMailer from 'nodemailer'
import { ContactInfo } from '../../modules/contact/contact.info';
import { EnvironmentConfig } from '../../config/env/config'

export class BTMailer {
    
    private email = 'python.email.smtp.modules@gmail.com'
    private password = 'test1ngPythonModules!'
    private settings = EnvironmentConfig.getSettings()
    
    private transporter: NodeMailer.Transporter
    private config = {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: this.email,
            pass: this.password
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

        console.log(data)

        try {
            const mailDeliveryResult = await this.transporter.sendMail({
                from: data.email,
                to: 'ekyidag@gmail.com',
                subject: data.subject,
                text: data.messageBody,
                html: `<h2>Nova mensagem de ${data.name} - ${data.email} - ${data.phoneNumber}</h2> <h3>Assunto: ${data.subject}</h3> <p>${data.messageBody}</p>`
            });

            console.log('result: ', mailDeliveryResult)

            return mailDeliveryResult
        } catch (e) {
            console.log(`houve um erro. LOGIN: ${this.email} - SENHA: ${this.password} - TRANSPORTER: ${this.transporter} `)
            return null
        }
    }
    
}
