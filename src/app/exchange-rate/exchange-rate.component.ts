import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GotHttpService} from '../service/got-http.service';
import { Location } from '@angular/common';
import { Pipe, PipeTransform} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';


@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
 
  constructor( ) { }

  ngOnInit(): void {
    // this.gotHttpService.getDetails().subscribe(
    //   data =>{
    //     let tmpAllKeys = Object.keys(data.data);
    //     let tmpArray = [];

    //     for(let prop of tmpAllKeys){
    //       tmpArray.push(data.data[prop]);
    //     }
    //     this.details = tmpArray;
    //   },
    //   error => {
    //     console.log(error);
    //   }

    // )
  }
}
