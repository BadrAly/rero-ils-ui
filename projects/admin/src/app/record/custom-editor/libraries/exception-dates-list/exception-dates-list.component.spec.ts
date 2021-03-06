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


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionDatesListComponent } from './exception-dates-list.component';
import { RecordModule } from '@rero/ng-core';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('ExceptionDatesListComponent', () => {
  let component: ExceptionDatesListComponent;
  let fixture: ComponentFixture<ExceptionDatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceptionDatesListComponent ],
      imports: [
        CommonModule,
        RecordModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [{provide: LOCALE_ID, useValue: 'en-US' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionDatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
