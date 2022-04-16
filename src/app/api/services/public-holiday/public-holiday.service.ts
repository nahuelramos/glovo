import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Observable } from 'rxjs';

import { PublicHoliday } from '../../models/public-holiday.model';

@Injectable({
  providedIn: 'root',
})
export class PublicHolidayService {
  constructor(private httpClient: HttpClient) {}

  retrievePublicHolidys(year: string, countryCode: string): Observable<PublicHoliday[]> {
    const headers = new HttpHeaders({ 'X-RapidAPI-Key': environment.apiKey });
    return this.httpClient.get<PublicHoliday[]>(`${environment.publicHolidayApi}/${year}/${countryCode}`, { headers });
  }
}
