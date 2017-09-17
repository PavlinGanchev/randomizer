import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class WinnerService{
	constructor(private http : Http){}

	getWinners(){		
		return this.http.get('http://laravel.dev/api/users')
		.map(
			(response: Response) => {				
				return response.json();
			}
		);

	}
	getWinnersByCountry(country :string){
		return this.http.get('http://laravel.dev/api/users/' + country)
		.map(
			(response: Response) => {				
				return response.json();
			}
		);
	}

	getWinnersById(id: number){
		return this.http.get('http://laravel.dev/api/user/' + id)
		.map(
			(response: Response) => {				
				return response.json();
			}
		);
	}
	getAllCountries(){
		return this.http.get('http://laravel.dev/api/countries')
		.map(
			(response: Response) => {				
				return response.json();
			}
		);
	}
}