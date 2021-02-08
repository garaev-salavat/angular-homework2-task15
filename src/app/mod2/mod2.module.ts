import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod3Module } from '../mod3/mod3.module';
import { Mod2comp1Component } from './mod2comp1/mod2comp1.component';



@NgModule({
  declarations: [Mod2comp1Component],
  imports: [
    CommonModule,
    Mod3Module
  ],
  exports: [Mod2comp1Component]
})
export class Mod2Module { }
