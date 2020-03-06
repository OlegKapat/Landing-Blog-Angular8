import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { User } from '../../interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public authservice:AuthService) { }

  ngOnInit() {
  }
    login:User={
      email:'bombastik@ukr.net',
      password:'1q2q3q4q',
      // returnSecureToken:true
    }
    auth(){
      this.authservice.login(this.login).subscribe((res)=>console.log(res)
      )
    }
}
