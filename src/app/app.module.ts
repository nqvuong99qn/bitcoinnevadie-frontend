import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';
import { TradingComponent } from './trading/trading.component';
import { NewsComponent } from './news/news.component';
import { InvestComponent } from './invest/invest.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { InstructionComponent } from './instruction/instruction.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WalletComponent,
    TradingComponent,
    NewsComponent,
    InvestComponent,
    ExchangeComponent,
    ExchangeRateComponent,
    InstructionComponent,
    KnowledgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
