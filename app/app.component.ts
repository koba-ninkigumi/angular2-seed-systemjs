import {Component, ElementRef} from 'angular2/core';
import {Photo} from './photo/photo.component';

declare var componentHandler;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [Photo]
})
export class AppComponent {
}
