import { SettingsPage } from './../pages/settingPage/settings';
import { LendCd } from './../pages/cdListPage/lendCdPage/lendCd';
import { LendBookPage } from './../pages/bookListPage/lendBookPage/lendBook';
import { TabsPage } from './../pages/tabsPage/tabs';
import { BooksPage } from './../pages/bookListPage/books';
import { CdsPage } from './../pages/cdListPage/cds';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OeuvreService } from '../pages/services/oeuvre.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CdsPage,
    BooksPage,
    TabsPage,
    LendBookPage,
    CdsPage,
    LendCd,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CdsPage,
    BooksPage,
    TabsPage,
    LendBookPage,
    CdsPage,
    LendCd,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OeuvreService
  ]
})
export class AppModule {}
