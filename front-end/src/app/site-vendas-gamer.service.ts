import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SiteVendasGamerService  {
  userProfile: any;

  constructor() { }
  loginWithGoogle() {
    this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "")
    console.log(this.userProfile.email, this.userProfile.given_name, this.userProfile.family_name, this.userProfile.email,)
    return this.userProfile
  }
}
