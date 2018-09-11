import { NgModule } from '@angular/core';
import { MatToolbarModule,MatButtonModule,
    MatIconModule,MatIconRegistry,MatGridListModule  } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';



@NgModule({
imports:[
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatGridListModule 
],
exports:[
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatGridListModule 
	// Component
]
	
})
export class SharedModule{
	
}