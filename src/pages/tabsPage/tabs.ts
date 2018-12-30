import { CdsPage } from './../cdListPage/cds';
import { BooksPage } from './../bookListPage/books';
import { Component } from "@angular/core";

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage{
    booksPage=BooksPage;
    cdsPage=CdsPage;

}