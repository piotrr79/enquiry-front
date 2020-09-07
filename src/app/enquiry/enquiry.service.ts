import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { Enquiry } from './enquiry.model';
import { EnvService } from '../env.service';


@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  baseURL: string;

    constructor(private env: EnvService, private httpClient: HttpClient) {
          this.baseURL = this.env.enquiryApi;
    }

    /**
     * Send Enquiry
     * @returns Obcervable
     */
    public sendEnquiry(enquiry: Enquiry): Observable<any> {
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(enquiry);
      // console.log(body);
      return this.httpClient.post(this.baseURL + 'enquiry', body,{'headers':headers})
    }
}
