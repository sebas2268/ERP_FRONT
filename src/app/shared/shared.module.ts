import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ShareRoutingModule } from './share-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule, 
    HttpClientModule
  ]
})
export class SharedModule { }
