import { Component, OnInit } from '@angular/core';
declare var $: any;
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FaqsService } from './faqs.service';
import { ToastrService } from 'ngx-toastr';
import { errorMessage, successMassage } from 'src/app/common-service/toastr/toastr-message.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  reqSubmitted: boolean = false;
  requestFormModel!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private faqsService: FaqsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.requestFormModel = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z ]+'),
      ]),
      email: new FormControl(
        '',
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      )
    });
  }
  onRequestSubmit() {
    this.reqSubmitted = true;
    if (this.requestFormModel.valid) {
      this.faqsService.saveWhp(this.requestFormModel.value).subscribe(
        (data: any) => {
          this.toastr.success(successMassage.whpSuccess);
        },
        () => {
          this.toastr.error(errorMessage.error);
        }
      );
      window.scroll(0, 0);
      this.reqSubmitted = false;
      this.requestFormModel.reset();
    }
  }

  requestWhitePaperModal(event: any) {
    $(".form-popup").show();
    event.stopPropagation();
  }

  stopPropagation(event: any) {
    event.stopPropagation();
  }
}
