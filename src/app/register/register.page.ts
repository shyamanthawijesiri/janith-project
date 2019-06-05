import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  
  constructor(private authService: AuthService, private validateService: ValidateService, public toast: ToastController,
    private router: Router) {  }
    
    // Toast message
  
    async presentEmpty() {
      const toast = await this.toast.create({
        message: 'Fill the empty fields',
        color: 'danger',
        duration: 2000
      });
      toast.present();
    }
    async presentEmail() {
      const toast = await this.toast.create({
        message: 'Invalid email',
        color: 'danger',
        duration: 2000
      });
      toast.present();
    }

    async registerUsers() {
      const toast = await this.toast.create({
        message: 'Register successfully',
        color: 'success',
        duration: 2000
      });
      toast.present();
    }
  

  ngOnInit() {
  }

  onRegister(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
    //empty fields
    if(!this.validateService.validateRegister(user)){
       this.presentEmpty();
      console.log('fill the fields');
      return false;
    }

    //validate email
    if(!this.validateService.validateEmail(user.email)){
      this.presentEmail();
      console.log('invalid email');
      return false;
    }
     //regiser user
    this.authService.registerUser(user).subscribe(data => {
      console.log('registered111');
      if(data.success){
        this.registerUsers();
       console.log('registered');
        this.router.navigateByUrl('/login');
      }else{
        console.log('failed register');
       this.router.navigateByUrl('/register');
      }
  });


  }




}