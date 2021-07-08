import { Component, OnInit } from '@angular/core';
import { CustomerSupportModel } from '../models/customer-support.model';
import { ResponseModel } from '../models/response-model.model';
import { KvpValuesApiService } from '../services/kvp-values-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss']
})
export class CustomerSupportComponent implements OnInit {
  loadingSpinner: boolean = false;
  successMark: boolean = false;
  successMessage: string = '';
  customerSupport: CustomerSupportModel;
  kvpValuesApiService: KvpValuesApiService;
  customerSupportForm = new FormGroup({
    action: new FormControl(''),
    affectedProduct: new FormControl(''),
    affectedProductId: new FormControl(''),
    agreement: new FormControl(''),
    agreementEndDate: new FormControl(''),
    agreementStartDate: new FormControl(''),
    agreementType: new FormControl(''),
    agreementValid: new FormControl(''),
    applicationID: new FormControl(''),
    callType: new FormControl(''),
    callingList: new FormControl(''),
    campaignName: new FormControl(''),
    caseId: new FormControl(''),
    caseType: new FormControl(''),
    channel: new FormControl(''),
    closingThresholdInMinutes: new FormControl(''),
    component: new FormControl(''),
    componentId: new FormControl('',
      [Validators.required]),
    contactInfo: new FormControl(''),
    contactOption: new FormControl(''),
    createDate: new FormControl(''),
    customerCompanyName: new FormControl(''),
    customerId: new FormControl(''),
    daysForCalls: new FormControl(''),
    daysForCases: new FormControl(''),
    daysForRepairs: new FormControl(''),
    daysForSwitcher: new FormControl(''),
    dialFromTime: new FormControl(''),
    dialScheduledTime: new FormControl(''),
    dialTillTime: new FormControl(''),
    dsIdCountry: new FormControl(''),
    dsIdLang: new FormControl(''),
    eligibleProduct: new FormControl(''),
    eligibleProductId: new FormControl('',
      [Validators.required]),
    exceptionDescription: new FormControl(''),
    exceptionTypeApplied: new FormControl(''),
    firstName: new FormControl(''),
    geo: new FormControl(''),
    ipAddress: new FormControl(''),
    issue: new FormControl(''),
    issueId: new FormControl(''),
    language: new FormControl(''),
    lastName: new FormControl(''),
    maxRemoteAdvisor: new FormControl(''),
    memberName: new FormControl(''),
    multipleCallsLimit: new FormControl(''),
    multipleCasesLimit: new FormControl(''),
    multipleRepairsLimit: new FormControl(''),
    newCustomerIndicator: new FormControl(''),
    numberOfCalls: new FormControl(''),
    numberOfCases: new FormControl(''),
    numberOfRepairs: new FormControl(''),
    overrideIndicator: new FormControl(''),
    platform: new FormControl(''),
    productGroup: new FormControl(''),
    productGroupId: new FormControl('',
      [Validators.required]),
    productType: new FormControl(''),
    purchaseAgreementIndicator: new FormControl(''),
    purchaseDate: new FormControl(''),
    region: new FormControl(''),
    regionTarget: new FormControl(''),
    riskFactor: new FormControl(''),
    safetyIssueIndicator: new FormControl(''),
    scheduleNewContactInfo: new FormControl(''),
    serialNumber: new FormControl(''),
    skipCase: new FormControl(''),
    skipCaseReason: new FormControl(''),
    smsCountryCode: new FormControl(''),
    smsEncryptedCasLink: new FormControl(''),
    smsLocale: new FormControl(''),
    smsMobileNumber: new FormControl(''),
    smsReminderOptIn: new FormControl(''),
    smsSurveyOptIn: new FormControl(''),
    storeId: new FormControl('',
      [Validators.required]),
    supportEntitlement: new FormControl(''),
    timeZoneDatabaseId: new FormControl(''),
    transactionId: new FormControl(''),
    virtualAdvisorGroup: new FormControl(''),
    virtualQueueGroup: new FormControl(''),
    server: new FormControl('')
  });
  constructor(kvpValuesApiService: KvpValuesApiService) { 
    this.kvpValuesApiService = kvpValuesApiService;
    this.customerSupport = {
      action: '',
      affectedProduct: '',
      affectedProductId: '',
      agreement: '',
      agreementEndDate: '',
      agreementStartDate: '',
      agreementType: '',
      agreementValid: '',
      applicationID: '',
      callType: '',
      callingList: '',
      campaignName: '',
      caseId: '',
      caseType: '',
      channel: '',
      closingThresholdInMinutes: '',
      component: '',
      componentId: '',
      contactInfo: '',
      contactOption: '',
      createDate: '',
      customerCompanyName: '',
      customerId: '',
      daysForCalls: '',
      daysForCases: '',
      daysForRepairs: '',
      daysForSwitcher: '',
      dialFromTime: '',
      dialScheduledTime: '',
      dialTillTime: '',
      dsIdCountry: '',
      dsIdLang: '',
      eligibleProduct: '',
      eligibleProductId: '',
      exceptionDescription: '',
      exceptionTypeApplied: '',
      firstName: '',
      geo: '',
      ipAddress: '',
      issue: '',
      issueId: '',
      language: '',
      lastName: '',
      maxRemoteAdvisor: '',
      memberName: '',
      multipleCallsLimit: '',
      multipleCasesLimit: '',
      multipleRepairsLimit: '',
      newCustomerIndicator: '',
      numberOfCalls: '',
      numberOfCases: '',
      numberOfRepairs: '',
      overrideIndicator: '',
      platform: '',
      productGroup: '',
      productGroupId: '',
      productType: '',
      purchaseAgreementIndicator: '',
      purchaseDate: '',
      region: '',
      regionTarget: '',
      riskFactor: '',
      safetyIssueIndicator: '',
      scheduleNewContactInfo: '',
      serialNumber: '',
      skipCase:  '',
      skipCaseReason: '',
      smsCountryCode: '',
      smsEncryptedCasLink:  '',
      smsLocale: '',
      smsMobileNumber:  '',
      smsReminderOptIn: '',
      smsSurveyOptIn: '',
      storeId: '',
      supportEntitlement: '',
      timeZoneDatabaseId: '',
      transactionId: '',
      virtualAdvisorGroup: '',
      virtualQueueGroup: '',
      server: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loadingSpinner = true;
    this.successMark = false;
    this.customerSupport = this.customerSupportForm.value;
    this.kvpValuesApiService.submitCustomerSupport(this.customerSupport).subscribe(data => {
      this.loadingSpinner = false;
      this.successMark = true;
      this.successMessage = data.message;
    });
  }

  get componentId() { return this.customerSupportForm.get('componentId'); }

  get eligibleProductId() { return this.customerSupportForm.get('eligibleProductId'); }

  get storeId() { return this.customerSupportForm.get('storeId'); }

  get productGroupId() { return this.customerSupportForm.get('productGroupId'); }

  formDisabled() {
    return this.componentId?.errors?.required ||
          this.eligibleProductId?.errors?.required ||
          this.storeId?.errors?.required ||
          this.productGroupId?.errors?.required;
  }
}
