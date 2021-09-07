import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecureComponent } from './secure/secure.component';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';

@NgModule({
    declarations: [
        AppComponent,
        SecureComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PublicModule,
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule { }
