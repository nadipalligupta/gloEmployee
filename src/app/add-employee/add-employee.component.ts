import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
    addEmpForm: FormGroup;
    submitted = false;
    selectable = true;
    removable = true;
    skills:any;
    project:any;
    prevproject:any;
    bloods: any = ["A+", "B+", "O+", "AB+","A-", "B-", "O-", "AB-", "others"]

    constructor(private formBuilder: FormBuilder,  private _router: Router) { }

    ngOnInit() {
        this.addEmpForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            id: ['', Validators.required],
            ldap: ['', Validators.required],
            seatno: ['', Validators.required],
            assetid: ['', Validators.required],
            vendi: ['', Validators.required],
            bloodgroup: ['', Validators.required],
            skillset: this.formBuilder.array([]),
            projects: this.formBuilder.array([]),
            previousprojects: this.formBuilder.array([]),
            teamlead: ['', Validators.required],
            managers: this.formBuilder.group({
              manager: ['', Validators.required],
              areahead: ['', Validators.required]
            }),
            mail: this.formBuilder.group({
              gemail: ['', Validators.required],
              gloemail: ['', Validators.required]
            }),
            contactinfo: this.formBuilder.group({
              phone: ['', Validators.required],
              emergencyphone: ['', Validators.required],
              address: this.formBuilder.group({
                residential: this.formBuilder.group({
                  houseno: ['', Validators.required],
                  landmark: ['', Validators.required],
                  area: ['', Validators.required],
                  pin: ['', Validators.required],
                  location: ['', Validators.required],
                  zilla: ['', Validators.required],
                  state: ['', Validators.required],
                }),
                permanent: this.formBuilder.group({
                  houseno: ['', Validators.required],
                  landmark: ['', Validators.required],
                  area: ['', Validators.required],
                  pin: ['', Validators.required],
                  location: ['', Validators.required],
                  zilla: ['', Validators.required],
                  state: ['', Validators.required],
                }),

              })
            })

        })
    }

    // adding skills
    addSkill(event, skill) {
      event.stopPropagation();
      event.preventDefault();
      if(skill['value'] !==  " "){
      this.skills = this.addEmpForm.controls.skillset as FormArray;
      
      this.skills.push(new FormControl(skill['value']));
      console.log(this.skills.value);
      
      }
      skill['value'] = " ";
    }

    
    //remove skill
    removeSkill(skill): void {
      const index = this.addEmpForm.value.skillset.indexOf(skill);
  
      if (index >= 0) {
        this.addEmpForm.value.skillset.splice(index, 1);
        
      }
    }
    

    //adding project
    addProject(event, project) {
      event.stopPropagation();
      event.preventDefault();
      if(project['value'] !==  " "){
      this.project = this.addEmpForm.controls.projects as FormArray;
      this.project.push(new FormControl(project['value']));
      console.log(this.project.value);
      }
      project['value'] = " ";
    }

    //remove previous project
    removeProject(project): void {
      const index = this.addEmpForm.value.projects.indexOf(project);
  
      if (index >= 0) {
        this.addEmpForm.value.projects.splice(index, 1);
        
      }
    }

    //adding previous project
    addPrevProject(event, prevproject) {
      event.stopPropagation();
      event.preventDefault();
      if(prevproject['value'] !==  " "){
      this.prevproject = this.addEmpForm.controls.previousprojects as FormArray;
      this.prevproject.push(new FormControl(prevproject['value']));
      console.log(this.prevproject.value);
      }
      prevproject['value'] = " ";
    }

    //remove previous project
    removePrevProject(prevproject): void {
      const index = this.addEmpForm.value.previousprojects.indexOf(prevproject);
  
      if (index >= 0) {
        this.addEmpForm.value.previousprojects.splice(index, 1);
        console.log(this.prevproject.value);
        
      }
    }

    changeBlood(eve){
      this.bloodgroup.setValue(eve.target.value)
    }

    get bloodgroup() {
      return this.addEmpForm.get('bloodgroup');
    }
  
    // convenience getter for easy access to form fields
    get f() { return this.addEmpForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.addEmpForm.invalid) {

            return;
        }

        console.log(JSON.stringify(this.addEmpForm.value));
        this.addEmpForm.reset();
        
        
    }
}

