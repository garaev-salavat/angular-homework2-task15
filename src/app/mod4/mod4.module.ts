import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod5Module } from '../mod5/mod5.module';
import { Mod4comp1Component } from './mod4comp1/mod4comp1.component';
import { Mod4comp2Component } from './mod4comp2/mod4comp2.component';
import { Mod4comp3Component } from './mod4comp3/mod4comp3.component';



@NgModule({
  declarations: [Mod4comp1Component, Mod4comp2Component, Mod4comp3Component],
  imports: [
    CommonModule,
    Mod5Module
  ],
  exports: [Mod4comp1Component, Mod4comp2Component, Mod4comp3Component]
})
export class Mod4Module { }
