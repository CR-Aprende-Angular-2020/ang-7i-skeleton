import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';

import { ContactsService } from 'app/main/contacts/contacts.service';
import { OrigenesService } from 'app/main/contacts/origenes.service';
import { OrigenesComponent } from './origenes.component';
import { ConfigurarListModule } from '../lista/configurar-list.module';



const routes: Routes = [
    {
        path     : 'origenes',
        component: OrigenesComponent,
        resolve  : {            
            listOrigenes: OrigenesService
        }
    }
];

@NgModule({
    declarations   : [
        OrigenesComponent
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
        OrigenesService
    ]
})
export class OrigenesModule
{
}
