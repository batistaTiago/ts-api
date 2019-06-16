import * as NodeMailer from 'nodemailer'
import { ContactInfo } from './contact.info'
import { BTMailer } from '../../api/managers/mail-manager';

export class ContactService {
    public static async sendEmail(info: ContactInfo): Promise<boolean>  {
        await BTMailer.getInstance().sendMail(info)
        return true
    }
}