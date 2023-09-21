import { Component, OnInit } from '@angular/core';
import { SiteVendasGamerService } from 'src/app/site-vendas-gamer.service';

@Component({
  selector: 'app-home-completo',
  templateUrl: './home-completo.component.html',
  styleUrls: ['./home-completo.component.css']
})
export class HomeCompletoComponent implements OnInit {
userProfile: any


constructor(private conectaService: SiteVendasGamerService){

}


ngOnInit(): void {
 this.userProfile = this.conectaService.loginWithGoogle()
 console.log(this.userProfile.email, this.userProfile.given_name, this.userProfile.family_name, this.userProfile.email,)

}

}
