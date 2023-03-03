import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Programs } from './apiData/programs.model';
import { Projects } from './apiData/projects.model';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {


  program_list: Programs[] = [];
  project_list: Projects[] = [];

  constructor(private api: ApiserviceService) { }

  gettingDataFromServerApi() {
    this.api.getProgram().subscribe(gram_res => { console.log(gram_res); this.program_list = gram_res; });
    this.api.getProjects().subscribe(pro_res => { console.log(pro_res);  this.project_list = pro_res; });
  }

  fetchdata() {
    this.api.getProgram();
    this.api.getProjects();
  }
}
