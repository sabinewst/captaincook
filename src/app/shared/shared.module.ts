import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AsideComponent } from './components/aside/aside.component';



@NgModule({
  declarations: [
    NavigationComponent,
    DropdownComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    NavigationComponent,
    AsideComponent
  ]
})
export class SharedModule { }
