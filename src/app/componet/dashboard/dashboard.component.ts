
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent  {
  MembDetail !: FormGroup;


}
