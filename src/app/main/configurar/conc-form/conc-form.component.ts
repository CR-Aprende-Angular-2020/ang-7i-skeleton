import { Component, Inject, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Contact } from 'app/main/contacts/contact.model';
import { Origen } from '../origenes/origen.model';
import { ContactsService } from 'app/main/contacts/contacts.service';
import { ConceptosService } from 'app/main/contacts/conceptos.service';
import { Concepto } from '../conceptos/concepto.model';


@Component({
    selector     : 'conc-form-dialog',
    templateUrl  : './conc-form.component.html',
    styleUrls    : ['./conc-form.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
    
    ],
}) 
export class ConceptosFormDialogComponent implements OnInit
{
    action: string;

    // origen: Origen;

    tipos = ['EXTERNO', 'RECURSOS HUMANOS'];

    isRRHH = false;

    origenesRRHH = null;
    origenesExterno = null;
    
    concepto: Concepto;

    ConceptoForm: FormGroup;
    
    dialogTitle: string;

    // candidatos: any;

    /**
     * Constructor
     *
     * @param {MatDialogRef<ConceptosFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     * @param {ContactsService} _contactsService
     */
    constructor(
        public matDialogRef: MatDialogRef<ConceptosFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder,
        // protected _contactsService: ContactsService,
        protected _conceptosService: ConceptosService
    )
    {

        this.dialogTitle = 'Seleccionar Tipo & Origen';

        // Set the defaults
        // this.action = _data.action;

        this.concepto = _data.concepto;

        if (this.concepto.tipo === 'RECURSOS HUMANOS'){
            this.isRRHH = true;
        }
       
        this.ConceptoForm = this.createConceptoForm();
        
    }


    ngOnInit(): void {
        this.origenesRRHH = this._conceptosService.getOrigenes('rrhh');
        // console.log('origenesRRHH ' + this.origenesRRHH);


        this.origenesExterno = this._conceptosService.getOrigenes('externo');
        // console.log('origenesExterno ' + this.origenesExterno);
    }



    private getCodByNombre(nombre: string): string {
        let arr = this.origenesExterno;

        if (this.isRRHH){
            arr = this.origenesRRHH;
        }

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if ((element.nombre) === nombre) {
                return element.cod;
            }
        }
        
        return '';
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create contact form
     *
     * @returns {FormGroup}
     */
    createConceptoForm(): FormGroup
    {       
        return this._formBuilder.group({
            'nombre': [this.concepto.nombre],
            'cod': [this.concepto.cod],
            'tipo': [this.concepto.tipo],
            'origenCod': [this.concepto.origenCod],
            'origenNombre': [this.concepto.origenNombre],
        });
    }

    verForm(f): void {
        console.log(f);
    }

    onSubmit(): void {
        console.log(this.ConceptoForm);
        this.matDialogRef.close();
    }

    updateCod(e): void {
        // console.log(e.value);
        const cod = this.getCodByNombre(e.value);

        this.ConceptoForm.controls['origenCod'].setValue(cod);
    }

    swithOrigenList(): void {
        this.ConceptoForm.controls['origenCod'].reset();
        this.ConceptoForm.controls['origenNombre'].reset();

        this.isRRHH = !this.isRRHH;
    }

}
