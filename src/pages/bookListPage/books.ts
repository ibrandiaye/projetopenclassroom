import { LendBookPage } from './lendBookPage/lendBook';
import { OeuvreService } from './../services/oeuvre.service';
import { Component } from "@angular/core";
import { Oeuvre } from "../model/Oeuvre";
import { ModalController, MenuController } from 'ionic-angular';

@Component({
    selector : 'page-books-list',
    templateUrl: 'books.html'
})
export class BooksPage{
    books: Oeuvre[];
    constructor(private bookService: OeuvreService,private menuCtrl:MenuController,
        private modalCtrl:ModalController){}

    ionViewWillEnter(){
        this.books = this.bookService.books;
    }
    getBook(i:number){
       let modal =  this.modalCtrl.create(LendBookPage,{index:i});
        modal.present();
    }
    onToggleMenu(){
        this.menuCtrl.open();
    }
}  