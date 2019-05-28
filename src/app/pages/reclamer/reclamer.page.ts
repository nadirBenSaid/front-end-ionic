import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reclamer',
  templateUrl: './reclamer.page.html',
  styleUrls: ['./reclamer.page.scss'],
})
export class ReclamerPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  data: Observable<any>;
postData(){
	var url ="";
	let postData = new FormData();
	postData.append('key','value');
	postData.append('username','info@gmail.com');
	this.data=this.http.post(url, postData);
	this.data.subscribe(data =>{
	console.log(data);
	});
}
}
