import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class AppService {

    constructor(private http: Http) { }

    getPhotos() {
        return this.http.get('./app/photo.json').map((res: Response) => res.json());
    }

}
