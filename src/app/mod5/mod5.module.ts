import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod5comp1Component } from './mod5comp1/mod5comp1.component';
import { Mod5comp2Component } from './mod5comp2/mod5comp2.component';
import { Mod5comp3Component } from './mod5comp3/mod5comp3.component';
import { Mod5comp4Component } from './mod5comp4/mod5comp4.component';
import { Mod5comp5Component } from './mod5comp5/mod5comp5.component';



@NgModule({
  declarations: [Mod5comp1Component, Mod5comp2Component, Mod5comp3Component, Mod5comp4Component, Mod5comp5Component],
  imports: [
    CommonModule
  ],
  exports: [Mod5comp1Component, Mod5comp2Component, Mod5comp3Component, Mod5comp4Component, Mod5comp5Component]
})
export class Mod5Module { }
