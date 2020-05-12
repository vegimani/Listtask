import { Component } from '@angular/core';
import {FormsModule, FormBuilder, FormArray,FormControlName, FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public checkboxs;
  public attlist;
  public myForm:FormGroup;
  attForm:FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(){
this.attForm = this.fb.group({
  EcquipmentList :["",Validators.required],
  Directions :["",Validators.required],
  Charges :["",Validators.required],
  optionvalue:['']
})
   this.myForm = this.fb.group({
    Directions:this.fb.array([
      this.addEcquipmentlist()
      ]),
      Charges:this.fb.array([
        this.addCharges()
        ]),
   ecquipmentlist :this.fb.array([
this.addEcquipmentlist()
])
    });
  }
  addChargesbytton(){
    ( <FormArray> this.myForm.get('Charges')).push(this.addCharges())
    
    }
addCharges(): FormGroup{
  return this.fb.group({
    type: ['',Validators.required],
    qty:['',Validators.required],
    unitcost:['',Validators.required],
    extendedCost:['',Validators.required]
  });
}
addDirectionbtn(){ 
  ( <FormArray> this.myForm.get('Directions')).push(this.addDirection())
    
}
  addDirection():FormGroup{
    return this.fb.group({
      action: ['',Validators.required],
      DirectionName:['',Validators.required],
      Sequence:['',Validators.required],
      memo:['',Validators.required]
    });
  }
  addEcquipmentlistbytton(){
    ( <FormArray> this.myForm.get('ecquipmentlist')).push(this.addEcquipmentlist())
    
    }
addEcquipmentlist() : FormGroup{
  return this.fb.group({
    item: ['',Validators.required],
    itemDecsription:['',Validators.required],
    itemClissification:['',Validators.required],
    qty:['',Validators.required]
  });

}
onSubmit(){
 console.log( this.myForm.value);
}
attsubmit(){
  this.checkboxs = false;
  this.attlist =this.attForm.value
  console.log( this.attlist);
  console.log( this.myForm.value);
}
delRow(i){
  ( <FormArray> this.myForm.get('ecquipmentlist')).removeAt(i);
  ( <FormArray> this.myForm.get('Charges')).removeAt(i);
}

 showcheckboxes(){
   this.checkboxs == !this.checkboxs
}
data =[{name:"ASSEMBLE"},{name:"CLEANING"},{name:"DER"},{name:"QC"}]
showattr(){
  let attr =[]
if(this.attlist && this.attlist.EcquipmentList){
attr.push({name:'EcquipmentList',isselected :false})
}
if(this.attlist && this.attlist.Directions){
  attr.push({name:'Directions',isselected :false})
  }
  if(this.attlist && this.attlist.Charges){
    attr.push({name:'Charges',isselected :false})
   }
   return attr;
}
xyz
val
tabclick(value ,index){
 this.xyz =index;
  this.val =this.showattr();
 this.val[index].isselected = true;
 
 console.log(index)

}
};


