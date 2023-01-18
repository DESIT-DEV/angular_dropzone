import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropzone_v1';

  files: File[] = [];  

  constructor(private http: HttpClient) { }  

  onSelect(event:any) {  
    console.log(event);  
    this.files.push(...event.addedFiles);  

    const formData = new FormData();  
  
    for (var i = 0; i < this.files.length; i++) {   
      formData.append("type", "2");  
      formData.append("belongs", "1");  
      formData.append("file", this.files[i]);  
    }  
    
    this.http.post('http://localhost:7800/resources', formData)  
    .subscribe(res => {  
      console.log(res);  
      alert('Uploaded Successfully.'); 
      this.files=[];  
    })  
}  

onRemove(event:any) {  
    console.log(event);  
    this.files.splice(this.files.indexOf(event));  
}  
}
