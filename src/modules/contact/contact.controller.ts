import * as Express from 'express'
import { ContactInfo } from './contact.info'
import { ResponseManager } from '../../api/managers/response-manager'
import { ContactService } from './contact.service';

export class ContactController {
    public static async validate(request: Express.Request, response: Express.Response) {
        const contactInfo = new ContactInfo(request.body)
    
        if (contactInfo.isValid()) {
            try {
                const sucesso = await ContactService.sendEmail(contactInfo)
                if (sucesso) {
                    ResponseManager.success(response, 'Contato enviado com sucesso.')
                    return
                } else {
                    throw new Error('Erro desconhecido')
                }
            } catch (error) {
                console.log("houve um erro ao enviar o email: ", error)
                ResponseManager.error(response, 'Erro ao conectar ao server smtp', 'Ocorreu um erro, por favor tente novamente.')

            }
        } else {
            console.log(contactInfo)
            ResponseManager.badRequest(response, 'Dados invalidos')
        }
    }
}