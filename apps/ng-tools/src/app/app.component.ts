import { Component, HostListener } from '@angular/core';
import { KeyssEnum, KeyssFilter } from "@ht14x/keyss";
@Component({
    selector: 'ht14x-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'ng-tools';

    @HostListener("document:keydown", ["$event"])
    @KeyssFilter([KeyssEnum.Ctrl, KeyssEnum.Shift, "H"])
    public test(event: KeyboardEvent) {
        event.stopPropagation();
        console.log(event);
    }
}
