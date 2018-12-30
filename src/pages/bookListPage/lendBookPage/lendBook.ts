import { OeuvreService } from './../../services/oeuvre.service';
import { Oeuvre } from './../../model/Oeuvre';
import { Component, OnInit } from "@angular/core";
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-lend-book-page',
    templateUrl: 'lendBook.html'
})
export class LendBookPage implements OnInit{
    book: Oeuvre;
    constructor(private bookService:OeuvreService,private navParam:NavParams,
        private viewCtrl:ViewController){}
    ngOnInit(): void {
        this.book = this.bookService.books[this.navParam.get("index")];
    }
    modalDissmiss(){
        this.viewCtrl.dismiss();
    }
    changerEtat(){
        this.book.etat = this.bookService.preterOuRendre(this.book.etat);
    }
}