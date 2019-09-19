import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule,
         MatMenuModule, MatRippleModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';

import { OrigenesComponent } from './origenes.component';
import { ConfigurarListModule } from '../lista/configurar-list.module';
import { OrigenesService } from '../origenes.service';
import { AuthGuard } from 'app/main/authentication/auth.guard';



const routes: Routes = [
    {
        path     : 'origenes',
        data: { roles: ['RRHH'] },
        canActivate: [AuthGuard],
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
        OrigenesService
    ]
})
export class OrigenesModule
{
}
