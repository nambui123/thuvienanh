import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { AboutModule } from "./about/about.module"
import { HomeModule } from "./home/home.module"


export function loadAboutModule() {
    return AboutModule;
}
export function loadHelpModule() {
    return AboutModule;
}
export function loadHomeModule() {
    return HomeModule;
}



export const routes: Routes = [
    { path: "about", loadChildren: loadAboutModule },
    { path: "help", loadChildren: loadHelpModule },
    { path: "home", loadChildren: loadHomeModule },
    { path: "", pathMatch: "full", redirectTo: "home" }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });
