import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobsApiService } from 'src/app/services/jobs-api.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  postulantId!:string
  jobsData:Job;
  jobs:Array<Job>=[];
  constructor(private jobs_service : JobsApiService,private route:ActivatedRoute ) {
    this.jobsData={} as Job;
    this.route.params.subscribe(params=>this.postulantId=params.postulantId)

  }

  ngOnInit(): void {
    this.getAllJobs()
  }

  getAllJobs():void{
    this.jobs_service.getAllJobs().subscribe((response: any)=>{
      this.jobs=response;
    });
  }

}
