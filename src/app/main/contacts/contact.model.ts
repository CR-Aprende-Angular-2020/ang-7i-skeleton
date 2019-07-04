import { FuseUtils } from '@fuse/utils';

export class Contact
{
    id: string;
    name: string;
    lastName: string;
    avatar: string;
    nickname: string;
    company: string;
    jobTitle: string;
    email: string;
    phone: string;
    address: string;
    birthday: string;
    notes: string;
    docket: string;
    departament: string;
    workplace: string;
    status: string;
    novedades: string; 
    novedad: string;
    monto: string;
    statusNovedades: string;
    legajo: string;


    /**
     * Constructor
     *
     * @param contact
     */
    constructor(contact)
    {
        {
            this.id = contact.id || FuseUtils.generateGUID();
            this.name = contact.name || '';
            this.lastName = contact.lastName || '';
            this.avatar = contact.avatar || 'assets/images/avatars/profile.jpg';
            this.nickname = contact.nickname || '';
            this.company = contact.company || '';
            this.jobTitle = contact.jobTitle || '';
            this.email = contact.email || '';
            this.phone = contact.phone || '';
            this.address = contact.address || '';
            this.birthday = contact.birthday || '';
            this.notes = contact.notes || '';
            this.docket = contact.docket || '';
            this.departament = contact.departament || '';
            this.workplace = contact.workplace || '';
            this.status = contact.status || '';
            this.novedad = contact.novedad || '';
            this.monto = contact.monto || '$0';
            this.statusNovedades = contact.statusNovedades || '';
            this.legajo = contact.legajo || '';    //esto no se ve utilizado en el front pero seria la idea final por company y docket

            if (contact.novedades) {
                this.novedades = contact.novedades.cantidad || null; 
            }else{
                this.novedades = null ; 
            }

            
        }
    }

    setid(valor: string): void {
        this.id = valor;
    }

    setname(valor: string): void {
        this.name = valor;
    }

    setlastName(valor: string): void {
        this.lastName = valor;
    }

    setavatar(valor: string): void {
        this.avatar = valor;
    }

    setnickname(valor: string): void {
        this.nickname = valor;
    }

    setcompany(valor: string): void {
        this.company = valor;
    }

    setjobTitle(valor: string): void {
        this.jobTitle = valor;
    }

    setemail(valor: string): void {
        this.email = valor;
    }

    setphone(valor: string): void {
        this.phone = valor;
    }

    setaddress(valor: string): void {
        this.address = valor;
    }

    setbirthday(valor: string): void {
        this.birthday = valor;
    }

    setnotes(valor: string): void {
        this.notes = valor;
    }

    setdocket(valor: string): void {
        this.docket = valor;
    }

    setdepartament(valor: string): void {
        this.departament = valor;
    }

    setworkplace(valor: string): void {
        this.workplace = valor;
    }

    setstatus(valor: string): void {
        this.status = valor;
    }

    setnovedades(valor: string): void {
        this.novedades = valor;
    }

    setnovedad(valor: string): void {
        this.novedad = valor;
    }

    setmonto(valor: string): void {
        this.monto = valor;
    }

    setstatusNovedades(valor: string): void {
        this.statusNovedades = valor;
    }

    setlegajo(valor: string): void {
        this.legajo = valor;
    }

}
