import * as Express from 'express'
import { ContactInfo } from './contact.info'
import { ResponseManager } from '../../api/managers/response-manager'
import { ContactService } from './contact.service';

export class ContactController {
    public static async validate(request: Express.Request, response: Express.Response) {
        const contactInfo = new ContactInfo(request.body)
    
        if (contactInfo.isValid()) {
            try {
                await ContactService.sendEmail(contactInfo)
                ResponseManager.success(response, 'Contato enviado com sucesso.')
            } catch {
                ResponseManager.error(response, 'Erro ao conectar ao server smtp', 'Ocorreu um erro, por favor tente novamente.')
            }
        } else {
            console.log(contactInfo)
            ResponseManager.error(response, 'Dados invalidos', 'Dados inválidos')
        }
    }
}