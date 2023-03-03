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
  resultArray: any[] = [];
  @Input()
  checkselected: any = [];

  constructor(private api: ApiserviceService) { }

  getProgram_list() {
    this.api.getProgram().subscribe(gram_res => { console.log(gram_res); this.program_list = gram_res; });
    this.api.getProjects().subscribe(pro_res => { console.log(pro_res);  this.project_list = pro_res; });
 
  }
  getProject_list() {
    console.log(this.checkselected);

  }
  checkProgramSelected(id: string) {
    this.checkselected.push(id)
    console.warn('id ', id);
    console.warn('ara', this.checkselected);
    // console.warn(this.project_list);
    
    
    this.project_list.forEach((data) => {
      this.checkselected.forEach((res: any) => {
        if (data.programId == res && this.resultArray
          .findIndex(ap => ap.projectName == data.projectName) == -1) {
          this.resultArray.push(data); 
        }
      })
    })
    console.warn('mit',this.resultArray);

    
  }
  fetchdata() {
    this.api.getProgram().subscribe(gram_res => { console.log(gram_res); });
    this.api.getProjects().subscribe(pro_res => { console.log(pro_res); });;
  }
}
