import { Component, OnInit } from '@angular/core';
declare var $: any;
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { errorMessage, successMassage } from 'src/app/common-service/toastr/toastr-message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  submitted: boolean = false;
  reqSubmitted: boolean = false;
  emailForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z ]+'),
      ]),
      email: new FormControl(
        '',
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      ),
      hasPermission: new FormControl(),
      isInterested: new FormControl(),
    });
  }

  stopPropagation(event: any) {
    event.stopPropagation();
  }


}
