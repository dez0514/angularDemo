import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { UsersComponent } from './users/users.component';
import { HelloComponent } from './hello/hello.component';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'users', component: UsersComponent },
  { path: 'hello', component: HelloComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    UsersComponent,
    HelloComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
