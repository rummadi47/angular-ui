import { Component, OnInit } from '@angular/core';
import { CustomerReportModel } from '../models/customer-report.model';
import { KvpValuesApiService } from '../services/kvp-values-api.service';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { getParseErrors } from '@angular/compiler';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.scss']
})
export class CustomerReportComponent implements OnInit {
  loadingSpinner: boolean = false;
  successMark: boolean = false;
  successMessage: string = '';
  kvpValuesApiService: KvpValuesApiService;
  customerReport: CustomerReportModel;
  customerReportForm = new FormGroup({
    contactInfo: new FormControl('',
      [Validators.required]),
    channel: new FormControl('',
      [Validators.required]),
    region: new FormControl('',
      [Validators.required]),
    contactOption: new FormControl('',
      [Validators.required]),
    dsIDCountry: new FormControl('',
      [Validators.required]),
    dsIDLang: new FormControl('',
      [Validators.required]),
    geo: new FormControl('',
      [Validators.required]),
    caseID: new FormControl('',
      [Validators.required]),
    agentStation: new FormControl('',
      [Validators.required]),
    loggedInSwitchName: new FormControl('',
      [Validators.required]),
    loggedInSwitchLocation: new FormControl('',
      [Validators.required]),
    emailID: new FormControl('',
      [Validators.required,
      Validators.email]),
    advisorDsID: new FormControl('',
      [Validators.required]),
    reasonCode: new FormControl('',
      [Validators.required]),
    reasonDesc: new FormControl('',
      [Validators.required]),
    comments: new FormControl('',
      [Validators.required]),
    commitmentID: new FormControl('',
      [Validators.required]),
    obcInitiatedTs: new FormControl(0,
      [Validators.required]),
    server: new FormControl(0,
      [Validators.required])
  });
  
  constructor(kvpValuesApiService: KvpValuesApiService) {
    this.kvpValuesApiService = kvpValuesApiService;
    this.customerReport = {
      contactInfo: '',
      channel: '',
      region: '',
      contactOption: '',
      dsIDCountry: '',
      dsIDLang: '',
      geo: '',
      caseID: '',
      agentStation: '',
      loggedInSwitchName: '',
      loggedInSwitchLocation: '',
      emailID: '',
      advisorDsID: '',
      reasonCode: '',
      reasonDesc: '',
      comments: '',
      commitmentID: '',
      obcInitiatedTs: 0,
      server: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.loadingSpinner = true;
    this.successMark = false;
    this.customerReport = this.customerReportForm.value;
    this.kvpValuesApiService.submitCustomerReport(this.customerReport).subscribe((data) => {
      this.loadingSpinner = false;
      this.successMark = true;
      this.successMessage = data.message;
    });
  }
  
  get contactInfo() { return this.customerReportForm.get('contactInfo'); }

  get channel() { return this.customerReportForm.get('channel'); }

  get region() { return this.customerReportForm.get('region'); }

  get contactOption() { return this.customerReportForm.get('contactOption'); }

  get dsIDCountry() { return this.customerReportForm.get('dsIDCountry'); }

  get dsIDLang() { return this.customerReportForm.get('dsIDLang'); }

  get geo() { return this.customerReportForm.get('geo'); }

  get caseID() { return this.customerReportForm.get('caseID'); }

  get agentStation() { return this.customerReportForm.get('agentStation'); }

  get loggedInSwitchName() { return this.customerReportForm.get('loggedInSwitchName'); }

  get loggedInSwitchLocation() { return this.customerReportForm.get('loggedInSwitchLocation'); }

  get emailID() { return this.customerReportForm.get('emailID'); }

  get advisorDsID() { return this.customerReportForm.get('advisorDsID'); }

  get reasonCode() { return this.customerReportForm.get('reasonDesc'); }

  get reasonDesc() { return this.customerReportForm.get('reasonDesc'); }

  get comments() { return this.customerReportForm.get('comments'); }

  get commitmentID() { return this.customerReportForm.get('commitmentID'); }

  get obcInitiatedTs() { return this.customerReportForm.get('obcInitiatedTs'); }

  get server() { return this.customerReportForm.get('server'); }

  formDisabled() {
    return this.contactInfo?.errors?.required ||
    this.caseID?.errors?.required ||
    this.contactOption?.errors?.required ||
    this.contactInfo?.errors?.required ||
    this.channel?.errors?.required ||
    this.emailID?.errors?.required ||
    this.emailID?.errors?.email ||
    this.region?.errors?.required ||
    this.contactOption?.errors?.required ||
    this.dsIDCountry?.errors?.required ||
    this.dsIDLang?.errors?.required ||
    this.geo?.errors?.required ||
    this.caseID?.errors?.required ||
    this.agentStation?.errors?.required ||
    this.loggedInSwitchName?.errors?.required ||
    this.loggedInSwitchLocation?.errors?.required ||
    this.advisorDsID?.errors?.required ||
    this.reasonCode?.errors?.required ||
    this.reasonDesc?.errors?.required ||
    this.comments?.errors?.required ||
    this.commitmentID?.errors?.required ||
    this.obcInitiatedTs?.errors?.required ||
    this.server?.errors?.required
  }
}
