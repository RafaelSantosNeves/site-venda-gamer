import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { BannerComponent } from './home/banner/banner.component';
import { MatIconModule } from '@angular/material/icon';
import { ProdutosComponent } from './home/produtos/produtos.component';
import { FooterComponent } from './home/footer/footer.component';
import { SidebarsComponent } from './home/sidebars/sidebars.component';
import { MenuToggleDirective } from './menu-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ProdutosComponent,
    FooterComponent,
    SidebarsComponent,
    MenuToggleDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
