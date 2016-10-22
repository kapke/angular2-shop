import {DebugElement} from '@angular/core';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import {By} from "@angular/platform-browser";

import {App} from './App';


beforeEach(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

afterEach(() => {
    TestBed.resetTestEnvironment();
});

describe('App', () => {
    let fixture: ComponentFixture<App>;
    let appComponent: App;
    let appDebugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [App]
        });

        fixture = TestBed.createComponent(App);
        appComponent = fixture.componentInstance;
        appDebugElement = fixture.debugElement;
    });

    it('should have title', () => {
        fixture.detectChanges();
        const titleElement = appDebugElement.query(By.css('div'));
        const nativeTitleElement = titleElement.nativeElement;
        expect(nativeTitleElement.textContent.trim()).toEqual('Hello, world!');
    });
});
