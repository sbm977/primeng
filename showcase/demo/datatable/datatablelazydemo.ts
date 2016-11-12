import {Component,OnInit} from '@angular/core';
import {Car} from '../domain/car';
import {CarService} from '../service/carservice';
import {LazyLoadEvent} from '../../../components/common/api';
import {FilterMetadata} from '../../../components/common/api';
import {SharedService} from "../service/sharedService";

@Component({
    templateUrl: 'showcase/demo/datatable/datatablelazydemo.html',
    providers:[CarService]
})
export class DataTableLazyDemo implements OnInit {


    datasource: Car[];

    cars: Car[];

    totalRecords: number;

    num: number;
    constructor(private carService: CarService, private sharedserv: SharedService) { }

    ngOnInit() {
        //datasource imitation

        this.loadData();


      this.carService.getCarsLageSize().then(lth => {
            this.num = lth;
            console.log(this.num);
            console.log('num print garya');
            return this.num;
        });

        console.log(this.num);

    }

    testData(){

        console.log('------------------------------------------');
        console.log(this.sharedserv.dataSources);
        console.log('-------------------------------------------');
    }

    loadData(){
        this.sharedserv.onloading();
    }

    loadCarsLazy(event: LazyLoadEvent) {
        this.testData();
        this.carService.getAlll()
            .subscribe(
                /* happy path */ p => this.datasource = p,
                // /* error path */ e => this.errorMessage = e,
                // /* onComplete */ () => this.isLoading = false
                );


                console.log('----------------8888888--------------------------');
        console.log(this.sharedserv.dataSources);
        console.log('-------------------88888888------------------------');

        //this.cars = this.datasource.slice(event.first, (event.first + event.rows));



        // console.log("mathi ko value k ho");
        //
        // console.log(this.datasource);
        // console.log("information: ");
        // console.log(event);
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        // //imitate db connection over a network

        // setTimeout(() => {
        //     if(this.datasource) {
        //         this.cars = this.datasource.slice(event.first, (event.first + event.rows));
        //     }
        // }, 250);
    }
}