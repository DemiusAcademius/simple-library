import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/components/app';

import { AppCoreModule } from './core/core.module';
import { AppAdminModule } from './work/pages/admin/admin.module';
import { AppHomeModule } from './work/pages/home/home.module';
import { AppLibrarianModule } from './work/pages/librarian/librarian.module';
import { AppLoginModule } from './work/pages/login/login.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /*** application modules */
    AppCoreModule,
    AppLoginModule,
    AppAdminModule,
    AppHomeModule,
    AppLibrarianModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
