import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatDatepickerModule, MatFormFieldModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';

import { Login2Module } from './main/authentication/login-2/login-2.module';
import { MockDbService } from './mock-db/mock-db.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PerfilModule } from './main/perfil/perfil.module';
import { ContactsModule } from './main/contacts/equipo/contacts.module';
import { NominaModule } from './main/contacts/nomina/nomina.module';

import { ContacFormModule } from './main/contacts/contact-form/contact-form.module';
import { NovedadesModule } from './main/contacts/novedades/novedades.module';


const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'perfil/'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, {useHash : true}),

        TranslateModule.forRoot(),

        InMemoryWebApiModule.forRoot(MockDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        Login2Module,
        PerfilModule,
        ContactsModule,
        NominaModule,
        NovedadesModule,

        ContacFormModule

    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
