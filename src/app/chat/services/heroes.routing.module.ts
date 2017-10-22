import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appComponent }     from '../../app.component';
import { appChat }          from '../chat.component';
import { appLogin }          from '../../login/login.component';
import { PageNotFoundComponent } from '../../notfound.component';
import { HeroDetailComponent }  from './hero.detail.component';

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