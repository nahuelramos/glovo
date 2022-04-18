import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AssessmentComponent } from './assessment.component';
import { AssessmentRoutingModule } from './assessment-routing.module';

@NgModule({
  declarations: [AssessmentComponent],
  imports: [CommonModule, AssessmentRoutingModule],
})
export class AssessmentModule {}
