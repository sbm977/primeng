/**
 * Created by smishra2 on 11/11/2016.
 */
import {Car} from '../domain/car';
import {Injectable} from '@angular/core';
import {CarService} from './carservice';

@Injectable()
export class SharedService {
    constructor(private carserv: CarService) {}
    dataSources:Car[];
    test: string = "hello world";
    errorMessage: string = '';
    isLoading: boolean = true;

    onloading(){
        this.carserv.getAlll()
            .subscribe(
                /* happy path */ p => this.dataSources = p,
                /* error path */ e => this.errorMessage = e,
                /* onComplete */ () => this.isLoading = false);

        console.log("value of function var inside sharedserv" );
        console.log(this.dataSources)
        console.log("value of test---------------");
        console.log(this.isLoading);
    }
}
