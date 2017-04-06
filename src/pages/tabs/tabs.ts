import { Component } from '@angular/core';

import { OptimistPage } from '../optimist/optimist';
import { PessimistPage } from '../pessimist/pessimist';
import { InfoPage } from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OptimistPage;
  tab2Root = PessimistPage;
  tab3Root = InfoPage;

  constructor() {

  }
}
