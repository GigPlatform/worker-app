import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class DataFinder {
	
constructor(private http: Http){
	}

public getJSONDataAsync(filePath: string) : Promise<any> {
	return new Promise((resolve, reject) => {
		this.http.get(filePath)
			.subscribe(
				res => {
					if (!res.ok) {
						reject("failed with status: " + res.status + "\nTrying to find fil at " + filePath);
					}

					var jsonRes = res.json();

					resolve(jsonRes);
				}
			);
	}) 
 }
}