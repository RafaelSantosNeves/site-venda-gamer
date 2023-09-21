import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var handleSignout: any;
@Component({
  selector: 'app-home-completo',
  templateUrl: './home-completo.component.html',
  styleUrls: ['./home-completo.component.css']
})
export class HomeCompletoComponent implements OnInit {

userProfile: any

constructor(private router: Router){}

ngOnInit(): void {
this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "")
}

handleSignOut(){
  handleSignout();
  sessionStorage.removeItem("loggedInUser")
  this.router.navigate(["/login"]).then(() => {
    window.location.reload()
  })
}

}
