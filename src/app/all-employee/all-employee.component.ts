import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {EmployeeDataService} from '../employee-data.service';
import {Router} from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { MatDialog } from '@angular/material/dialog';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'asset', 'skillset', 'projects', 'clear'];
  dataSource: MatTableDataSource<any>;
  users:any;
  value = '';
  filterValue:any;
  searchValue:any;
  dynamicBox:any;
  elem: HTMLElement;
  elements:any;
  isDataLoading= false;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private empServ: EmployeeDataService, private _router: Router,private elRef:ElementRef,public dialog: MatDialog) {
  }
  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.empServ.getAllEmpData().subscribe(res => {
      this.users = res;
      console.log(this.users);
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  addEmp(){
    //this._router.navigate(['/addEmployee']);
      const dialogRef = this.dialog.open(AddEmployeeComponent);
      dialogRef.afterClosed().subscribe(data => {
        if(data){
          this.isDataLoading = true;
          this.empServ.createEmployee(data).subscribe(data => this.getEmployees());
        }
      });
  }

getAssets(asset){
console.log(asset)
if(asset.laptop && asset.desktop1 && asset.desktop2)
  return asset.laptop+","+asset.desktop1+","+asset.desktop2;
}
  search(ele: Element){
    var searchVal = ele['value'];
    console.log(searchVal);
    console.log(this.users);
    this.elements = this.users.filter(function(hero) {
        return (hero.name.trim().toLowerCase().includes(searchVal)) || (hero.id.includes(searchVal))
        || hero.skillset.toString().trim().toLowerCase().includes(searchVal) || hero.projects.toString().trim().toLowerCase().includes(searchVal);
      }) 
    this.dataSource = this.elements;
  }
  removeEle(eve:Event,delEle) {
    eve.stopPropagation();
    this.empServ.deleteEmployee(delEle.empID);
    // this.users = this.users.filter(function(ele){
    //       return (delEle.id != ele.id)
    // })
    this.dataSource  = this.users;
  }
  empData(empId){

    console.log(empId)
   // this._router.navigate(['/employee', empId]);
    
  }
  closeData(){
    this.value = '';
    this.dataSource = this.users;
  }
  onTableScroll(eve){
    console.log("khbasefjbejkfbjkb");
  }
}


