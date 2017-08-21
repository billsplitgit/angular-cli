import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchBoxDirective } from './search-box.directive';
import { SalesDataService } from './sales-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrdersComponent,
    SearchBoxDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [SalesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
