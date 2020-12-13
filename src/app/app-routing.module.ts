import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {LoginComponent} from "./pages/login/login.component"
const routes: Routes = [
    //{ path: "", redirectTo: "/home", pathMatch: "full" },
    //{ path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) }
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: LoginComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
