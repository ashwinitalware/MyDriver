import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { $ } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isDisable = false;
  contact_no;
  otp;
  type_otp;
  interval;
  subscribeTimer: any;
  timeLeft: number = 60;
  send_now = false;
  router: any;
  func: any;
  // isShown1: boolean = false;
  // isShown: boolean = false;

  login_hide() {
    this.isShown = false;
    this.isShown1 = true;
  }


  isShown: boolean = true;
  isShown1: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  verify_submit(f: NgForm) {
    console.log(f.value)
    this.type_otp = f.value.a + f.value.b + f.value.c + f.value.d + f.value.e + f.value.f
    if ((f.value.a != " ") && (f.value.b != " ") && (f.value.c != " ") && (f.value.d != " ") && (f.value.e != " ") && (f.value.f != " ")) {
      if (this.type_otp == '123456')
        this.router.navigate(['/meterreading']);
      else {
        f.resetForm();
        this.func.presentToast("Invalid OTP.");
      }
    }
    else {
      this.func.presentToast("Please Fill All Data.");
    }

  }

  move($event, p, c, n) {

    var length = c.value.length;
    var maxlength = c.getAttribute('maxlength');
    // if(length>1)
    if (length == maxlength) {
      if (n != "")
        this.isDisable = false;
      n.focus();
    }
    else if (length > maxlength) {
      this.isDisable = true;
    }
  }

  // moveFocus(event, nextElement, previousElement) {
  //   if (event.keyCode === 8 && previousElement) {
  //     previousElement.setFocus();
  //   } else if (event.keyCode >= 48 && event.keyCode <= 57) {
  //     if (nextElement) {
  //       nextElement.setFocus();
  //     }
  //   } else if (event.keyCode >= 96 && event.keyCode <= 105) {
  //     if (nextElement) {
  //       nextElement.setFocus();
  //     }
  //   } else {
  //     event.path[0].value = '';
  //   }
  // }

}
