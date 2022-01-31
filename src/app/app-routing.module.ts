import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandindPageComponent } from './landind-page/landind-page.component';

const routes: Routes = [
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: '', component: LandindPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}