import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroDetailComponent }  from './message.detail.component';
import { MessagesService } from './messages.service';
import { HeroRoutingModule } from './messages.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroDetailComponent
  ],
  providers: [ MessagesService ]
})
export class HeroesModule {}