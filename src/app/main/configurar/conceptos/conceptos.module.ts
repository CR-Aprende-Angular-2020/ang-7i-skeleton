import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';

import { ContactsService } from 'app/main/contacts/contacts.service';
import { ConfigurarListModule } from '../lista/configurar-list.module';
import { ConceptosService } from 'app/main/contacts/conceptos.service';
import { ConceptosComponent } from './conceptos.component';



const routes: Routes = [
    {
        path     : 'conceptos',
        component: ConceptosComponent,
        resolve  : {            
            listConceptos: ConceptosService
        }
    }
];

@NgModule({
    declarations   : [
        ConceptosComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatTableModule,
        MatToolbarModule,
        MatSelectModule,
        MatOptionModule,

        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule,

        ConfigurarListModule

    ],
    providers      : [
        ContactsService,
        ConceptosService
    ]
})
export class ConceptosModule
{
}