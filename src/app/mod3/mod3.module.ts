import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod4Module } from '../mod4/mod4.module';
import { Mod3comp1Component } from './mod3comp1/mod3comp1.component';
import { Mod3comp2Component } from './mod3comp2/mod3comp2.component';



@NgModule({
  declarations: [Mod3comp1Component, Mod3comp2Component],
  imports: [
    CommonModule,
    Mod4Module
  ],
  exports: [Mod3comp1Component, Mod3comp2Component]
})
export class Mod3Module { }
