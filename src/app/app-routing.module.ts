import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobInformationComponent } from './pages/job-information/job-information.component';
import { PostulationsComponent } from './pages/postulations/postulations.component';
import {SearchJobsComponent} from "./pages/search-jobs/search-jobs.component";
import {AccountsettingsComponent} from "./pages/accountsettings/accountsettings.component";
import {ProfileStudentComponent} from "./pages/profile-student/profile-student.component";
import {ContratComponent} from "./pages/contrat/contrat.component";
import {InterviewsComponent} from "./pages/interviews/interviews.component";
import {ApprovedPostulantComponent} from "./pages/approved-postulant/approved-postulant.component";
import {MyAccountPostulantComponent} from "./pages/my-account-postulant/my-account-postulant.component";
import {ModifyProfessionalProfileComponent} from "./pages/modify-professional-profile/modify-professional-profile.component";
import {ModifyPersonalInformationComponent} from "./pages/modify-personal-information/modify-personal-information.component";
import {LoginRegisterComponent} from "./pages/login-register/login-register.component";
import {MainNavPostulantComponent} from "./pages/main-nav-postulant/main-nav-postulant.component";
import {ChoosePostulantOrEmployerComponent} from "./pages/choose-postulant-or-employer/choose-postulant-or-employer.component";
import {EmployeerNewComponent} from "./pages/employeer-new/employeer-new.component";
import {PostulantNewComponent} from "./pages/postulant-new/postulant-new.component";
import {MainNavEmployeerComponent} from "./pages/main-nav-employeer/main-nav-employeer.component";


const routes: Routes = [
  {path:'home/:employeerId/jobs', component : SearchJobsComponent},
  {path:'jobs/:id', component: JobInformationComponent},
  {path:'postulation/job/:id', component: PostulationsComponent},
  {path:'account', component: AccountsettingsComponent},
  {path:':id/profile', component: ProfileStudentComponent},
  {path:'contrat', component: ContratComponent},
  {path:'job/interview/:id', component: InterviewsComponent},
  {path:'myaccount', component : MyAccountPostulantComponent},
  {path:'modify-professional-profile/:id', component: ModifyProfessionalProfileComponent},
  {path:'modify-personal-information', component: ModifyPersonalInformationComponent},
  {path:'login', component: LoginRegisterComponent},
  {path:'choosePostulantOrEmployeer', component: ChoosePostulantOrEmployerComponent},
  {path:'employeer/new', component: EmployeerNewComponent},
  {path:'postulant/new', component: PostulantNewComponent},
  {path:'homes/:postulantId', component: MainNavPostulantComponent},
  {path:'home/:employeerId', component: MainNavEmployeerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
