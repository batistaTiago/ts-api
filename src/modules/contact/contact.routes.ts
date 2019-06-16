import * as Express from 'express'
import { ContactController } from './contact.controller';

export class ContactRoutes {

    public newContact = (request: Express.Request, response: Express.Response) => {
        ContactController.validate(request, response)
    }
}