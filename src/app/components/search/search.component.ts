import { Component } from "@angular/core";
import { DatepickerOptions } from "ng2-datepicker";
import * as frLocale from "date-fns/locale/fr";
import * as enLocale from "date-fns/locale/en";

import { SearchService } from "../../services/search.service";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  enddate: Date;
  startdate: Date;
  first_name: any = "";
  second_name: any = "";
  first_lastname: any = "";
  second_lastname: any = "";
  num_id: any = "";
  gender: any = "";
  loader:boolean=false;
  listoffender:any=[];
  options: DatepickerOptions = {
    locale: enLocale
  };
  dropdownListcities = [];
  selectedItemscities = [];
  dropdownSettingscities = {};
  dropdownListcrimes = [];
  selectedItemscrimes = [];
  dropdownSettingscrimes = {};
  constructor(
    private _searchService: SearchService
  ) {
    this.startdate = new Date("1970-01-01");
    this.enddate = new Date();
    this.dropdownSettingscities = {
      singleSelection: false,
      idField: "id",
      textField: "name",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dropdownSettingscrimes = {
      singleSelection: false,
      idField: "id",
      textField: "name",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.getCities();
    this.getCrimes();
  }
  getCities(){
    this._searchService.getCities().subscribe((resp:any) => {
      this.dropdownListcities = resp.data;
      this.dropdownSettingscities["itemsShowLimit"]= resp.data.length;
    },error=>{
      console.log("myerror",error);
    });
   }
   getCrimes(){
    this._searchService.getCrimes().subscribe((resp:any) => {
      this.dropdownListcrimes = resp.data;
      this.dropdownSettingscrimes["itemsShowLimit"]= resp.data.length;
    },error=>{
      console.log("myerror",error);
    });
   }
  search() {
    this.loader = true;
    let data = {
      enddate: this.enddate,
      startdate: this.startdate,
      first_name: this.first_name,
      second_name: this.second_name,
      first_lastname: this.first_lastname,
      second_lastname: this.second_lastname,
      num_id: this.num_id,
      gender: this.gender,
      crimes: this.selectedItemscrimes,
      cities:this.selectedItemscities
    };
    console.log(data);
    this.listoffender=[];
    this._searchService.advancedsearch(data).subscribe(
      (resp: any) => {
        this.loader = false;
        this.listoffender= resp.data;
      },
      error => {
        console.log("myerror", error);
      }
    );
  }
}
