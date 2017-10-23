import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appComponent }     from '../../app.component';
import { appChat }          from '../chat.component';
import { appLogin }          from '../../login/login.component';
import { HeroDetailComponent }  from './message.detail.component';
import { PageNotFoundComponent } from '../../notfound.component';

const heroesRoutes: Routes = [
    {
      path: 'Chat',
      component: appChat,
      children: [
          {
              path: ':id',
              component: HeroDetailComponent
          },
          {
            path: '',
            component: HeroDetailComponent
          },
          {
            path: '**',
            component: PageNotFoundComponent
          }
      ]
    }
];

@NgModule({
  imports: [ RouterModule.forChild(heroesRoutes) ],
  exports: [ RouterModule ]
})
export class HeroRoutingModule {}