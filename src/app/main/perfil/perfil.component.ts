import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as spanish } from './i18n/es';
import { PerfilService } from './perfil.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from './perfil.model';
import { LoginService } from '../authentication/login-2/login-2.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class PerfilComponent implements OnInit, OnDestroy {
  
  info: any;  
  param: any;
  private roles: any = [];

  isHide: boolean = false;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private _profileService: PerfilService,
    private _fuseSidebarService: FuseSidebarService,
    private _loginService: LoginService,    
    private _activeRouter: ActivatedRoute,
    private _router: Router
  ) {
    this._fuseTranslationLoaderService.loadTranslations(spanish, english);   

    this._unsubscribeAll = new Subject();
   }

  ngOnInit(): void {    
    this._activeRouter.params.subscribe(params => {

      this.param = params.id;

      if (this.param === '' || this.param === null || this.param === ' ') {
        this._router.navigate(['legajo/' + this._loginService.getLocalUser()]); 
      }

    });    

    this._profileService.infoOnChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((info: Perfil) => {
        if (info == null){
          info = new Perfil({});
        }

        this.info = info;
      });

    this._loginService.rolOnChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {        
        if (data == null) {
          data = [];
        }

        this.roles = data;        

        if (this.roles.indexOf('rrhh') > -1) {          
          this.isHide = true;
        }

      });

  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._fuseSidebarService.getSidebar(key).toggleOpen();
  }
}
