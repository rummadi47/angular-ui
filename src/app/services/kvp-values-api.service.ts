import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerReportModel } from '../models/customer-report.model';
import { CustomerSupportModel } from '../models/customer-support.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KvpValuesApiService {
  httpOptions: HttpHeaders;

  constructor(private http: HttpClient) {
    this.httpOptions = new HttpHeaders(); 
    this.httpOptions.set('Content-Type','application/json').set('Accept', 'application/json').set('Access-Control-Allow-Origin', 'https://localhost:4200');
  }

  submitCustomerSupport(customerSupportModel: CustomerSupportModel): Observable<any> {
    const customerSupportUrl = environment.apiUrl + '/customer-support';
    return this.http.post(customerSupportUrl, customerSupportModel, {headers: this.httpOptions});
  };

  submitCustomerReport(customerReportModel: CustomerReportModel): Observable<any> {
    const customerReportUrl = environment.apiUrl + '/customer-report';
    return this.http.post(customerReportUrl, customerReportModel, {headers: this.httpOptions});
  };
}
