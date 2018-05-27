import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { baseURLNew } from '../../shared/constants/base-url';
import { CommonResponse } from '../../shared/models/user';
import { Event, EventListResponse } from './models/event';

@Injectable()
export class EventsService {
  constructor(private httpClient: HttpClient) {
  }

  private createEventUrl =  baseURLNew + 'events/create';
  private getEventsUrl = baseURLNew + 'Events/ViewEvents';
  private deleteEventUrl = baseURLNew + 'Events/DeleteEvents';

  createEvent(event: Event) {
    return this.httpClient
      .post<CommonResponse>(
        this.createEventUrl,
        event
      )
      .map(res => {
        return res;
      });
  }

  getEvents() {
    return this.httpClient
      .get<EventListResponse>(
        this.getEventsUrl
      )
      .map(res => {
        return res;
      });
  }

  deleteEvent(eventId: number) {
    let headers = new HttpHeaders();
    headers = headers
      .set('Event-ID', eventId.toString());
    return this.httpClient
    .get<CommonResponse>(
      this.deleteEventUrl,
      {
        headers: headers
      },
    )
    .map(res => {
      return res;
    });
  }
}
