import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ComprasPage } from '../compras/compras';
import { FinanceiroPage } from '../financeiro/financeiro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ComprasPage;
  tab3Root = FinanceiroPage;

  constructor() {

  }
}
