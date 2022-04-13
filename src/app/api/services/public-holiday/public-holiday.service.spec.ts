import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '@environment';

import { PublicHolidayService } from './public-holiday.service';

describe('PublicHolidayService', () => {
  let service: PublicHolidayService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PublicHolidayService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call public holiday api and return 200 ok', () => {
    const publicHolidayDummy = [
      {
        date: '2019-01-01',
        localName: 'New Years Day',
        name: 'New Years Day',
        countryCode: 'US',
        fixed: false,
        global: true,
        counties: null,
        launchYear: null,
        type: 'Public',
      },
    ];

    service.retrievePublicHolidys('2020', 'US').subscribe((publicHolidays) => {
      expect(publicHolidays.length).toHaveLength(1);
      expect(publicHolidays).toEqual(publicHolidayDummy);
    });

    const req = httpMock.expectOne(`${environment.publicHolidayApi}/2020/US`);
    expect(req.request.method).toBe('GET');
    req.flush(publicHolidayDummy);
  });
});
