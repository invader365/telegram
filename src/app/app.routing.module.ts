import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { appLogin }               from './login/login.component';
import { appChat }                from './chat/chat.component';
import { PageNotFoundComponent }  from './notfound.component';
 
const appRoutes: Routes = [
    { path: '',   redirectTo: '/Login', pathMatch: 'full' },
    { path: 'Login', component: appLogin },
    { path: 'Chat', component: appChat },
    { path: '**', component: PageNotFoundComponent }
 ];
 
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class appRoutingModule {}