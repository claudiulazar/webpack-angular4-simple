import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { TestComponent } from "./test-component/test-component.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
      TestComponent
    ],
    exports: [
      TestComponent
    ]
}) export class ComponentsModule { }
