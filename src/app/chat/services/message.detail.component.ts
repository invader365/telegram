import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Message, MessagesService }  from './messages.service';
import { iContacts } from './contacts.interface';
import { contactsService } from './contacts.service';

@Component({
  templateUrl: 'app/chat/messages.component.html',
  styleUrls:  ['app/chat/chat.component.css'],
  providers:  [ MessagesService, contactsService ]
})
export class HeroDetailComponent implements OnInit {

  user$: Observable<Message>;
  icontacts: iContacts[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MessagesService,
    private _contactsService: contactsService
  ) {}

  ngOnInit() : void {
    this._contactsService.getContacts()
        .subscribe((contactData) => this.icontacts = contactData);

    this.user$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')));
  }

  gotoUsers(user: Message) {
    let userId = user ? user.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['/Chat', { id: userId }]);
  }
}