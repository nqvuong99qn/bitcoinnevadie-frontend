import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstructionComponent } from './instruction/instruction.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { InvestComponent } from './invest/invest.component';
import { WalletComponent } from './wallet/wallet.component';
import { TradingComponent } from './trading/trading.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'exchange-rate', component: ExchangeRateComponent},
  {path: 'instruction', component: InstructionComponent},
  {path: 'exchange', component: ExchangeComponent},
  {path: 'invest', component: InvestComponent},
  {path: 'wallet', component: WalletComponent},
  {path: 'trading', component: TradingComponent},
  {path: 'knowledge', component: KnowledgeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
