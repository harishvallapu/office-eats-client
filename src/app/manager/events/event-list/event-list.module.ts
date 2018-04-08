import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { EventListRoutingModule } from './event-list-routing.module';
import { EventListComponent } from './event-list.component';

import { EventsService } from '../events.service';
import { CommonInterceptor } from '../../../shared/interceptors/common.interceptor';
import { TokenInterceptor } from '../../../shared/interceptors/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    EventListRoutingModule,
    HttpClientModule
  ],
  declarations: [EventListComponent],
  providers: [
    EventsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class EventListModule { }
