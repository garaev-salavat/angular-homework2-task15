import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod2Module } from '../mod2/mod2.module';
import { Mod1comp1Component } from './mod1comp1/mod1comp1.component';



@NgModule({
  declarations: [Mod1comp1Component],
  imports: [
    CommonModule,
    Mod2Module
  ],
  exports: [Mod1comp1Component]
})
export class Mod1Module { }
