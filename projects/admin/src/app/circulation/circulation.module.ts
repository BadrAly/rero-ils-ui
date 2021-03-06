/*
 * RERO ILS UI
 * Copyright (C) 2019 RERO
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { NgModule } from '@angular/core';

import { CirculationRoutingModule } from './circulation-routing.module';
import { MainComponent } from './main/main.component';
import { MainRequestComponent } from './main-request/main-request.component';
import { MainCheckinCheckoutComponent } from './main-checkin-checkout/main-checkin-checkout.component';
import { RequestedItemsListComponent } from './requested-items-list/requested-items-list.component';
import { PatronDetailedComponent } from './patron-detailed/patron-detailed.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { RecordModule } from '@rero/ng-core';
import { DataTablesModule } from 'angular-datatables';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent,
    MainRequestComponent,
    MainCheckinCheckoutComponent,
    RequestedItemsListComponent,
    PatronDetailedComponent,
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    CirculationRoutingModule,
    DataTablesModule,
    BsDropdownModule.forRoot(),
    RecordModule
  ]
})
export class CirculationModule { }
