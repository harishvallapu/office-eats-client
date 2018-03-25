import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { GetCorporatesResponse } from '../models/corporate';
import { baseURL } from '../constants/base-url';

@Injectable()
export class CorporateService {

  constructor(private httpClient: HttpClient) { }

  private getCorporatesUrl = baseURL + 'Users/corporate_info';

  getCorporates() {
    let headers = new HttpHeaders();
    headers = headers.set('Client-Service', 'frontend-client').set('Auth-Key', 'cmsrestapi');
    return this.httpClient
      .get<GetCorporatesResponse>(this.getCorporatesUrl, { headers: headers })
      .map(res => {
        return res;
      });
  }
}
