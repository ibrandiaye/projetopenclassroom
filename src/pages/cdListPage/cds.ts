import { LendCd } from './lendCdPage/lendCd';
import { OeuvreService } from './../services/oeuvre.service';
import { Oeuvre } from './../model/Oeuvre';
import { Component, OnInit } from "@angular/core";
import { ModalController, MenuController } from 'ionic-angular';

@Component({
    selector : 'page-cds-list',
    templateUrl: 'cds.html'
})
export class CdsPage{
    cds: Oeuvre[];
    constructor(private cdService: OeuvreService, private menuCtrl:MenuController,
        private modalCtrl:ModalController){}

    ionViewWillEnter(){
        this.cds = this.cdService.cds;
    }
    getCd(i:number){
       let modal =  this.modalCtrl.create(LendCd,{index:i});
        modal.present();
    }
    onToggleMenu(){
        this.menuCtrl.open();
    }
}