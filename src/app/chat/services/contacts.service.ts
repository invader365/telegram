import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { iContacts } from './contacts.interface';

@Injectable()
export class contactsService {
   private _url: string = 'app/chat/services/contacts.json';

   constructor(private _http: Http) {}
   
   getContacts(): Observable <iContacts[]> {
      return this._http.get(this._url)
      .map((response: Response) => <iContacts[]>response.json())
   }
}