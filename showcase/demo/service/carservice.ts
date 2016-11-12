import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Car} from '../domain/car';
import { Observable } from 'rxjs/Observable';
import {SharedService} from './sharedService';
import {map} from "rxjs/operator/map";

@Injectable()
export class CarService {


    cars: Object;
    datasourcees: Car[];
    errorMessage: string = '';
    totalRecords: number;
    isLoading: boolean = true;

   // constructor(private http: Http, private sharedService: SharedService) {}
    constructor(private http: Http) {}


    initialize(){
        // console.log(this.sharedService.test);
        // console.log(this.sharedService.dataSources);
        // this.getAlll()
        //     .subscribe(
        //         /* happy path */ p => this.sharedService.dataSources = p,
        //         /* error path */ e => this.errorMessage = e,
        //         /* onComplete */ () => this.isLoading = false);
        //
        // console.log("value of function var inside construtor initialize" );
        // console.log(this.sharedService.dataSources)
        // console.log("value of test---------------");
        // console.log(this.isLoading);

    }

    getCarsSmall() {
        return this.http.get('showcase/resources/data/cars-small.json')
            .toPromise()
            .then(res => <Car[]> res.json().data)
            .then(data => {
                return data;
            });
    }

    getCarsMedium() {
        return this.http.get('showcase/resources/data/cars-medium.json')
            .toPromise()
            .then(res => <Car[]> res.json().data)
            .then(data => {
                return data;
            });
    }

    getCarsLarge() {
        return this.http.get('showcase/resources/data/cars-large.json')
            .toPromise()
            .then(res => <Car[]> res.json().data)
            .then(data => {
                return data;
            });
    }


    getCarsLageSize() {

        return this.http.get('showcase/resources/data/cars-large.json')
            .toPromise()
            .then(res => <Car[]> res.json().data)
            .then(data => {
                return data.length;
            });
    }

    getAlll(): Observable<Car[]> {
        let people$ = this.http
            .get(`showcase/resources/data/cars-large.json`, {headers: this.getHeaders()})
            .map(mapPersons)
            .catch(handleError);
        return people$;
    }


    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}
    function mapPersons(response:Response): Car[]{
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');

    // The response of the API has a results
    // property with the actual results
    this.datasource = response.json().data.map(toCar);
    console.log("value of function var");
    console.log(this.datasource)
    console.log("value of test");
    return this.datasource;
    }

    function toCar(r:any): Car{
    let car = <Car>({
        vin: r.vin,
        year: r.year,
        brand: r.brand,
        color: r.color
    });
    console.log('Parsed person:', car);

    return car;
}

function handleError (error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
    console.error(errorMsg);

    // throw an application level error
    return Observable.throw(errorMsg);
}


