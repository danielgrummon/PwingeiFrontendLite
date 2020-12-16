import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Phenotype } from './thelist.model';

@Component({
  selector: 'app-thelist',
  templateUrl: './thelist.component.html',
  styleUrls: ['./thelist.component.css']
})
export class ThelistComponent implements OnInit {

  phenotypes : Phenotype[];
  errorMessage: string;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getPhenotypeList();
  }

  getPhenotypeList(){
    this.apiService.getPhenotypeList().subscribe({
      next: phenotypes => this.phenotypes = phenotypes,
    error: err => this.errorMessage = err
    });
  }

}
