import { Component, OnInit } from '@angular/core';
import { Enquiry } from './enquiry.model';
import { EnquiryService } from './enquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

      public enquiry: Enquiry = new Enquiry();
      public errors = {
        name: null,
        mobile: null,
        arrival_date: null,
        airport: null,
        terminal: null,
        flight_number: null
      };
      public airport_checked: boolean;

      constructor(private enquiryService: EnquiryService) {
      }

      ngOnInit(): void { }


      airport_choice = ['Gatwick', 'Heathrow'];
      terminals = ['1', '2', '3', '4', 'Not sure'];

      /**
       * Show terminal field if Heathrow selected
       * @returns boolean
       */
      airportSwitcher(selected): void {
          if (selected === 'Heathrow' ) {
              this.airport_checked = true;
          }

          if (selected === 'Gatwick' ) {
              this.airport_checked = false;
              this.enquiry.terminal = null;
          }
      }

      /**
       * Check errors - validate
       * @returns boolean
       */
       checkErrors(): boolean {
          let err = false;
          this.resetErrors();

          if (!this.enquiry.name) {
              this.errors.name = 'Name is mandatory.';
              err = true;
          }

          if (!this.enquiry.mobile) {
              this.errors.mobile = 'Mobile cannot be empty.';
              err = true;
          }

          let mobileregx = /^(?:\W*\d){11}\W*$/;
          let isValidMobile = mobileregx.test(this.enquiry.mobile);

          if (!isValidMobile) {
              this.errors.mobile = 'Provide valid phone number';
              err = true;
          }

          if (!this.enquiry.arrival_date) {
              this.errors.arrival_date = 'Arrival date cannot be empty.';
              err = true;
          }

          if (!this.enquiry.flight_number) {
              this.errors.flight_number = 'Flight number cannot be empty.';
              err = true;
          }

          let flightregex = /^[A-Z]{2}\d{3,4}$/;
          let isValidFlightNo = flightregex.test(this.enquiry.flight_number);

          if (!isValidFlightNo) {
              this.errors.flight_number = 'Provide valid flight number in format AA123';
              err = true;
          }

          return err;
      }

      /**
       * Save infos - update folder informations
       * @returns void
       */
      public saveInfos(): void {
          /** @internal - validate against errors **/
          if (this.checkErrors() === true) {
              return;
          }

          /** @internal - Send data to API **/
          this.enquiryService.sendEnquiry(this.enquiry).subscribe(
              (enquiry: Enquiry) => {
                  this.resetInput();
                  alert('Enquiry has been saved');

              },
              (error: any) => {
                  console.log(error);
                  alert(error.error.Message);
              }
          );
      }

      /**
       * Reset input
       * @returns void
       */
      private resetInput(): void {
          this.enquiry.name = null;
          this.enquiry.mobile = null;
          this.enquiry.arrival_date = null;
          this.enquiry.airport = null;
          this.enquiry.terminal = null;
          this.enquiry.flight_number = null;
      }

      /**
       * Reset errors
       * @returns void
       */
      private resetErrors(): void {
          this.errors = {
              name: null,
              mobile: null,
              arrival_date: null,
              airport: null,
              terminal: null,
              flight_number: null
          };
      }
}
