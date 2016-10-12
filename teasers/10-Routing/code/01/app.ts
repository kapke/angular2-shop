import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent, AComponent, BComponent } from './app.components';

//6/ This is how router configuration looks like
const appRoutes: Routes = [
    {path: 'a', component: AComponent},
    {path: 'b', component: BComponent},
    {path: '', component: AComponent},
    {path: '**', component: AComponent}
];

@NgModule({
    //We need to declare RouterModule as dependency in a bit different way
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, AComponent, BComponent],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
