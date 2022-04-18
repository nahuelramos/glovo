import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
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

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call public holiday api and return 200 ok', fakeAsync(() => {
    const publicHolidayDummy = [
      {
        date: new Date('2019-01-01'),
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

    service.retrievePublicHolidays('2020', 'US').subscribe((publicHolidays) => {
      expect(publicHolidays).toHaveLength(1);
      expect(publicHolidays).toEqual(publicHolidayDummy);
    });

    const req = httpMock.expectOne(`${environment.publicHolidayApi}/2020/US`);
    expect(req.request.method).toBe('GET');
    req.flush(publicHolidayDummy);
    tick();
  }));

  it('should call public with wrong parameters and give error', fakeAsync(() => {
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };

    service.retrievePublicHolidays('wrong1', 'wrong2').subscribe({
      error: (error) => expect(error.status).toEqual(400),
    });

    const req = httpMock.expectOne(`${environment.publicHolidayApi}/wrong1/wrong2`);
    expect(req.request.method).toBe('GET');
    req.flush(null, mockErrorResponse);
    tick();
  }));
});
