import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { appComponent }  from './app.component';
import { appRoutingModule } from './app.routing.module';
import { HeroesModule }   from './chat/services/heroes.module';

import { appLogin }  from './login/login.component';
import { appChat }  from './chat/chat.component';
import { PageNotFoundComponent }  from './notfound.component';

@NgModule({
  imports:      [ BrowserModule, HeroesModule, HttpModule, appRoutingModule ],
  declarations: [ appComponent, appLogin, appChat, PageNotFoundComponent ],
  bootstrap:    [ appComponent ]
})
export class appModule {}
