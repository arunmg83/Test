import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectList: any = [{ name: 'Project 134', id: Date.now(), image: '../../assets/Images/OIP.jfif' }, { name: 'Project 1', id: Date.now(), image: '../../assets/Images/OIP.jfif' }, { name: 'Project 9', id: Date.now(), image: '../../assets/Images/OIP.jfif' }];
  isAddProject: boolean = false;
  form: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      projectName: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }
  saveDetails(form) {
    this.projectList.push({ name: form.value.projectName, image: '../../assets/Images/OIP.jfif' })
    // this.form.setValue({ projectName: '' });
    this.form.reset()

  }

}
