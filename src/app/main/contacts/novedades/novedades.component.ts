import { Component, OnDestroy, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { ContactsService } from 'app/main/contacts/contacts.service';
import { ContactsContactFormDialogComponent } from 'app/main/contacts/contact-form/contact-form.component';
import { ConceptosService } from '../conceptos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector     : 'sector',
    templateUrl  : './novedades.component.html',
    styleUrls    : ['../contacts.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class NovedadesComponent implements OnInit, OnDestroy
{
    dialogRef: any;
    hasSelectedContacts: boolean;
    searchInput: FormControl;

    @Input() hasCheck = true;

    columnas = ['avatar', 'name', 'docket', 'sector', 'concepto', 'monto', 'buttons'];

    componente = 'sector';  //antes era novedades
    sectores = '';

    seleccionado = 'PREMIO VENTAS';

    titulo = "Novedades por Sector";

    param: any;

    // Protected
    protected _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ContactsService} _contactsService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {MatDialog} _matDialog
     * @param {ConceptosService} _conceptosService
     */
    constructor(
        protected _contactsService: ContactsService,
        protected _fuseSidebarService: FuseSidebarService,
        protected _matDialog: MatDialog,
        protected _conceptosService: ConceptosService,
        private _activeRouter: ActivatedRoute,
        private _router: Router
    )
    {
        // Set the defaults
        this.searchInput = new FormControl('');

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        this._activeRouter.params.subscribe(params => {

            this.param = params.id;

            if (this.param == "" || this.param == null || this.param == " ") {
                this._router.navigate(['novedades/sectores/' + 'cajas']);
            }

        });    
        
        this._conceptosService.onConceptosChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(data => {
                console.log(data);
                this.sectores = data;
        });

        this._contactsService.onFilterChanged.next('NOV');

        this._contactsService.onSelectedContactsChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(selectedContacts => {
                this.hasSelectedContacts = selectedContacts.length > 0;
            });

        this.searchInput.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe(searchText => {
                this._contactsService.onSearchTextChanged.next(searchText);
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


}
