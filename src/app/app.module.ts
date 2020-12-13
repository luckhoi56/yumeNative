import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from './test/test.component';
import { LoginComponent } from './pages/login/login.component';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        TestComponent,
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
