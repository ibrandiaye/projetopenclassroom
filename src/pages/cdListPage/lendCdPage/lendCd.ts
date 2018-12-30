import { OeuvreService } from './../../services/oeuvre.service';
import { Oeuvre } from './../../model/Oeuvre';
import { Component, OnInit } from "@angular/core";
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-lend-cd',
    templateUrl: 'lendCd.html'
})
export class LendCd {
    cd: Oeuvre;
    constructor(private cdService:OeuvreService,private navParam:NavParams,
        private viewCtrl:ViewController){}
    ngOnInit(): void {
        this.cd = this.cdService.cds[this.navParam.get("index")];
    }
    modalDissmiss(){
        this.viewCtrl.dismiss();
    }
    changerEtat(){
        this.cd.etat = this.cdService.preterOuRendre(this.cd.etat);
    }

}