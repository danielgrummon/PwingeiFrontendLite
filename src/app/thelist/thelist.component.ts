import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Phenotype } from './thelist.model';

@Component({
  selector: 'app-thelist',
  templateUrl: './thelist.component.html',
  styleUrls: ['./thelist.component.css']
})
export class ThelistComponent implements OnInit {

  phenotype : Phenotype[];

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getPhenotypeList();
  }

  getPhenotypeList(){
    console.log("component retrieving list");
    this.apiService.getPhenotypeList().subscribe(
      response => {
        console.log(response);
        this.phenotype = response;
      }
    )
    console.log("component retrieved list");
  }

}
