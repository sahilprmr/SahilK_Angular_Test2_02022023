import { Component, Input, OnInit } from '@angular/core';
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
  @Input()
  checkselected : any;

  constructor(private api: ApiserviceService) { }

  getProgram_list() {
    this.api.getProgram().subscribe(gram_res => { console.log(gram_res); this.program_list = gram_res; });
  }
  getProject_list(){
    // this.api.getProjects().subscribe(pro_res => { console.log(pro_res);  this.project_list = pro_res; });
    console.log(this.checkselected);
    
  }
  checkProgramSelected(id:string){
          for(let i in this.project_list){
            if(id === this.api.projects[i].projectId) 
            {
              this.checkselected = this.api.projects[i].projectName;
              console.log((this.checkselected));
              
            }
          }
  }
  fetchdata() {
    this.api.getProgram().subscribe(gram_res => { console.log(gram_res); });
    this.api.getProjects().subscribe(pro_res => { console.log(pro_res); });;
  }
}
