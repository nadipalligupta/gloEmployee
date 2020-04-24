import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
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
    addressChange:boolean = true;
    assets:any;
    assetData:boolean = false;
    assetItems:any = ['Laptop', 'Desktop1', 'Desktop2'];
    bloods: any = ["A+", "B+", "O+", "AB+","A-", "B-", "O-", "AB-", "others"]

    constructor(private formBuilder: FormBuilder,  private _router: Router, public dialogRef: MatDialogRef<AddEmployeeComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,) { }

    ngOnInit() {
        this.addEmpForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            id: ['', Validators.required],
            ldap: ['', Validators.required],
            seatno: ['', Validators.required],
            vendi: ['', Validators.required],
            bloodgroup: ['', Validators.required],
            skillset: this.formBuilder.array([]),
            projects: this.formBuilder.array([]),
            assets: this.formBuilder.array([]),
            teamlead: ['', Validators.required],
            managers: this.formBuilder.group({
              manager: ['', Validators.required],
              director: ['', Validators.required]
            }),
            mail: this.formBuilder.group({
              googlemail: ['', Validators.required],
              glmail: ['', Validators.required]
            }),
            contactinfo: this.formBuilder.group({
              phone: ['', Validators.required],
              emergencyphone: ['', Validators.required],
              address: this.formBuilder.group({
                residential: this.formBuilder.group({
                  addressline1: ['', Validators.required],
                  addressline2: ['', Validators.required],
                  city: ['', Validators.required],
                  zipcode: ['', Validators.required],
                  district: ['', Validators.required],
                  state: ['', Validators.required],
                  country: ['', Validators.required]
                }),
                permanent: this.formBuilder.group({
                  addressline1: ['', Validators.required],
                  addressline2: ['', Validators.required],
                  city: ['', Validators.required],
                  zipcode: ['', Validators.required],
                  district: ['', Validators.required],
                  state: ['', Validators.required],
                  country: ['', Validators.required]
                }),

              })
            })

        })
    }

    //adding assets
    get assetArray(){
      return this.addEmpForm.get('assets') as FormArray;
    }
   
    addAssets(id){
      var type = document.getElementById("selected");
      console.log(type['value']);
      if(id['value'] !== ""){
      this.assetArray.push(this.formBuilder.group({
        assetid: id['value'],
        assettype: type['value']
      }));
      console.log(this.assetArray.value);
      this.assetItems = this.assetItems.filter(function(ele){
        return (type['value'] != ele)
      })
      if(this.assetItems.length < 1){
          this.assetData = true;
      }
      id['value'] = "";
      }
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

    // Blood Group
    changeBlood(eve){
      this.bloodgroup.setValue(eve.target.value)
    }
    get bloodgroup() {
      return this.addEmpForm.get('bloodgroup');
    }

    changeAddress(eve){
      if(eve.target.checked){
        this.addressChange = true;
      }
      else{
        this.addressChange = false;
      }
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
        this.assetItems = ['Laptop', 'Desktop1', 'Desktop2'];
    }
}

