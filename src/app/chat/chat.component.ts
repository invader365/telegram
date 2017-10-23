import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Http , Response } from '@angular/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { iContacts } from './services/contacts.interface';
import { contactsService } from './services/contacts.service';
import { Message, MessagesService }  from './services/messages.service';

@Component ({
   templateUrl: 'app/chat/chat.component.html',
   styleUrls:  ['app/chat/chat.component.css'],
   providers:  [contactsService, MessagesService]
})

export class appChat implements OnInit {
    icontacts: iContacts[];
    heroes$: Observable<Message[]>;

    private selectedId: number;
    
    constructor(
        private _contactsService: contactsService, 
        public router: Router,
        private service: MessagesService,
        private route: ActivatedRoute
    ) { }
    
    ngOnInit() : void {
        this._contactsService.getContacts()
            .subscribe((contactData) => this.icontacts = contactData);

        this.heroes$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.service.getHeroes();
      });
    }
  }