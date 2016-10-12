import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppComponent, TimerPipe} from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, TimerPipe],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
