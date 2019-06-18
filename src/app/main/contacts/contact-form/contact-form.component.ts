import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Contact } from 'app/main/contacts/contact.model';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';


import * as _moment from 'moment';

import { Moment } from 'moment';

const moment = _moment;

export const MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};


@Component({
    selector     : 'contacts-contact-form-dialog',
    templateUrl  : './contact-form.component.html',
    styleUrls    : ['./contact-form.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
        // application's root module. We provide it at the component level here, due to limitations of
        // our example generation script.
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ],
}) 
export class ContactsContactFormDialogComponent
{
    date = new FormControl(moment());
    
    action: string;
    contact: Contact;
    contactForm: FormGroup;
    dialogTitle: string;

    hideshow = true;
 
    unidad: string = '';


    cuantitativos = [
        {
            value: 'Falta Injustificada',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'Falta Injustificada'
        },
        {
            value: 'Feriado Trabajado(Horas)',
            tipo: 'cuantitativo',
            unidad: 'horas',
            viewValue: 'Feriado Trabajado(Horas)'
        },
        {
            value: 'Horas Extras 100%',
            tipo: 'cuantitativo',
            unidad: 'horas',
            viewValue: 'Horas Extras 100%'
        },
        {
            value: 'Horas Extras 50%',
            tipo: 'cuantitativo',
            unidad: 'horas',
            viewValue: 'Horas Extras 50%'
        },
        {
            value: 'Lic.Por Enfermedad',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'Lic.Por Enfermedad'
        },
        {
            value: 'Lic.Por Excedencia',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'Lic.Por Excedencia'
        },
        {
            value: 'Lic.Por Fliar Enfermo',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'Lic.Por Fliar Enfermo'
        },
        {
            value: 'Lic.Por Maternidad',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'Lic.Por Maternidad'
        },
        {
            value: 'Lic.Por Matrimonio',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'Lic.Por Matrimonio'
        },
        {
            value: 'Vacaciones(Días)',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'Vacaciones(Días)'
        },
    ];

    cualitativos = [
        {
            value: 'Adicional Caj.Prop. - No Habitual',
            tipo: 'cualitativo',
            viewValue: 'Adicional Caj.Prop. - No Habitual'
        },
        {
            value: 'Adicional Cajero - No Habitual',
            tipo: 'cualitativo',
            viewValue: 'Adicional Cajero - No Habitual'
        },
        {
            value: 'Alta Cuota Sindical',
            tipo: 'cualitativo',
            viewValue: 'Alta Cuota Sindical'
        },
        {
            value: 'Alta Fliar.Adicional Sindicato',
            tipo: 'cualitativo',
            viewValue: 'Alta Fliar.Adicional Sindicato'
        },
        {
            value: 'Baja Cuota Sindical',
            tipo: 'cualitativo',
            viewValue: 'Baja Cuota Sindical'
        },
        {
            value: 'Baja Fliar.Adicional Sindicato',
            tipo: 'cualitativo',
            viewValue: 'Baja Fliar.Adicional Sindicato'
        },
        {
            value: 'Días De Estudio',
            tipo: 'cualitativo',
            viewValue: 'Días De Estudio'
        },
        {
            value: 'Ingreso A Rem.Variable',
            tipo: 'cualitativo',
            viewValue: 'Ingreso A Rem.Variable'
        },
        {
            value: 'Licencias Especiales',
            tipo: 'cualitativo',
            viewValue: 'Licencias Especiales'
        },
        {
            value: 'Plus Asesor Junior Experto',
            tipo: 'cualitativo',
            viewValue: 'Plus Asesor Junior Experto'
        },
        {
            value: 'Plus Master',
            tipo: 'cualitativo',
            viewValue: 'Plus Master'
        },
    ];

    // Conceptos = [
    //     {
    //         value: 'Falta Injustificada',
    //         tipo: 'cuantitativo',
    //         unidad: 'dias',
    //         viewValue: 'Falta Injustificada'
    //     },
    //     { 
    //         value: 'Feriado Trabajado(Horas)',
    //         tipo: 'cuantitativo',
    //         unidad: 'horas',
    //         viewValue: 'Feriado Trabajado(Horas)'
    //     },
    //     { 
    //         value: 'Horas Extras 100%',
    //         tipo: 'cuantitativo',
    //         unidad: 'horas',
    //         viewValue: 'Horas Extras 100%'
    //     },
    //     { 
    //         value: 'Horas Extras 50%',
    //         tipo: 'cuantitativo',
    //         unidad: 'horas',
    //         viewValue: 'Horas Extras 50%'
    //     },
    //     { 
    //         value: 'Lic.Por Enfermedad',
    //         tipo: 'cuantitativo',
    //         unidad: 'dias',
    //         viewValue: 'Lic.Por Enfermedad'
    //     },
    //     { 
    //         value: 'Lic.Por Excedencia',
    //         tipo: 'cuantitativo',
    //         unidad: 'dias',
    //         viewValue: 'Lic.Por Excedencia'
    //     },
    //     { 
    //         value: 'Lic.Por Fliar Enfermo',
    //         tipo: 'cuantitativo',
    //         unidad: 'dias',
    //         viewValue: 'Lic.Por Fliar Enfermo'
    //     },
    //     {   
    //         value: 'Lic.Por Maternidad',
    //         tipo: 'cuantitativo',
    //         unidad: 'dias',
    //         viewValue: 'Lic.Por Maternidad'
    //     },
    //     { 
    //         value: 'Lic.Por Matrimonio',
    //         tipo: 'cuantitativo',
    //         unidad: 'dias',
    //         viewValue: 'Lic.Por Matrimonio'
    //     },
    //     { 
    //         value: 'Vacaciones(Días)',
    //         tipo: 'cuantitativo',
    //         unidad: 'dias',
    //         viewValue: 'Vacaciones(Días)'
    //     },

    //     {   
    //         value: 'Adicional Caj.Prop. - No Habitual',
    //         tipo: 'cualitativo', 
    //         viewValue: 'Adicional Caj.Prop. - No Habitual'
    //     },
    //     { 
    //         value: 'Adicional Cajero - No Habitual',
    //         tipo: 'cualitativo',
    //         viewValue: 'Adicional Cajero - No Habitual'
    //     },
    //     { 
    //         value: 'Alta Cuota Sindical', 
    //         tipo: 'cualitativo', 
    //         viewValue: 'Alta Cuota Sindical'
    //     },
    //     { 
    //         value: 'Alta Fliar.Adicional Sindicato', 
    //         tipo: 'cualitativo', 
    //         viewValue: 'Alta Fliar.Adicional Sindicato'
    //     },
    //     { 
    //         value: 'Baja Cuota Sindical', 
    //         tipo: 'cualitativo', 
    //         viewValue: 'Baja Cuota Sindical'
    //     },
    //     { 
    //         value: 'Baja Fliar.Adicional Sindicato', 
    //         tipo: 'cualitativo', 
    //         viewValue: 'Baja Fliar.Adicional Sindicato'
    //     },
    //     { 
    //         value: 'Días De Estudio', 
    //         tipo: 'cualitativo', 
    //         viewValue: 'Días De Estudio'
    //     },
    //     { 
    //         value: 'Ingreso A Rem.Variable', 
    //         tipo: 'cualitativo', 
    //         viewValue: 'Ingreso A Rem.Variable'
    //     },
    //     { 
    //         value: 'Licencias Especiales', 
    //         tipo: 'cualitativo', 
    //         viewValue: 'Licencias Especiales'
    //     },
    //     { 
    //         value: 'Plus Asesor Junior Experto', 
    //         tipo: 'cualitativo', 
    //         viewValue: 'Plus Asesor Junior Experto'
    //     },
    //     { 
    //         value: 'Plus Master', 
    //         tipo: 'cualitativo', 
    //         viewValue: 'Plus Master'
    //     },
                    
    // ];



    /**
     * Constructor
     *
     * @param {MatDialogRef<ContactsContactFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<ContactsContactFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.action = _data.action;

        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Editar Novedad';
            this.contact = _data.contact;
        }
        else
        {
            this.dialogTitle = 'Nueva Novedad';
            this.contact = _data.contact || new Contact({});
            
        }

        this.contactForm = this.createContactForm();
    }

    chosenYearHandler(normalizedYear: Moment): void {
        const ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
    }

    chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>): void {
        const ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonth.month());
        this.date.setValue(ctrlValue);
        datepicker.close();
    }

    switchParam(): void {        
        this.hideshow = !this.hideshow;

        if (this.hideshow){ //cuantitativa
            this.contactForm.controls.cantidad.enable();
            this.contactForm.controls.concepto_cuantitativos.enable();
            this.contactForm.controls.concepto_cualitativos.disable();
        }else{ //cualitativa
            this.contactForm.controls.concepto_cualitativos.enable();
            this.contactForm.controls.cantidad.disable();
            this.contactForm.controls.concepto_cuantitativos.disable();
        }
            
    }


    changeUnidad(e): void {
        // console.log(e);
        this.cuantitativos.forEach(element => {

            if (element.value === e.value){
                this.unidad = element.unidad;                    
            }
            return;            
        });
    }

    verForm(f): void {
        console.log(f);
    }

    onSubmit(): void {
        console.log(this.contactForm);
        this.matDialogRef.close();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create contact form
     *
     * @returns {FormGroup}
     */
    createContactForm(): FormGroup
    {
        return this._formBuilder.group({
            id                       : [this.contact.id],
            name                     : [this.contact.name],
            lastName                 : [this.contact.lastName],
            avatar                   : [this.contact.avatar],
            nickname                 : [this.contact.nickname],
            company                  : [this.contact.company],
            date                     : '',
            cantidad                 : '',
            concepto_cuantitativos   : '',
            concepto_cualitativos    : '',            
        });
    }
}
