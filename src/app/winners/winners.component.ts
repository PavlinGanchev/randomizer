import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { WinnerService } from '../winner.service';


@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {

	winners: Array<object> = [];
	countrySelectOptions: Array<string> =[];
	countryChoices=[
		{ name: 'All countries', value:'all'}, 
		{ name:'Chosen country', value: 'chosen'}
	];
	defaultChoice= 'All';
	winnerOfCountryMessage: string = '';


	periodInterval: number;
	amountOfWinners: number;
	country: string = '';
	randomWinnerId: number;
	

	constructor(private winnerService: WinnerService ) {}

	ngOnInit() {
		this.winnerService.getAllCountries().subscribe(
			(countries: Array<string>) => {
				this.countrySelectOptions= countries;	
			}
		);

	}

	onSubmit(form: NgForm){			
		// reset values
		this.winners = [];
		this.country= '';
		this.winnerOfCountryMessage = '';
		//set values
		this.periodInterval= form.value.period*60000;
		this.amountOfWinners= +form.value.number;
		this.country= form.value.country;			
		if (this.country != 'All') {
			this.getWinnersByCountry(this.country);	
		}else{
			this.getWinners();			
		}	
	}

	getWinnersByCountry(country: string){		
		this.winnerService.getWinnersByCountry(country).subscribe(
			(winners: Array<object>) =>{
			console.log(winners);
				
				let index = 0,
					randomize = setInterval(() => {	
						// There is atleast one winner from a country 
		  				this.winners.push(winners[index]);
		  				if (index === winners.length-1) {
		  					clearInterval(randomize);
		  				}else{
		  					index += 1;
		  				}		  							
		  					
		  				if ( winners.length < this.amountOfWinners) {
		  					this.winnerOfCountryMessage = 'There is only '+ winners.length +' winners from ' + country;		  					
		  				}
					}, this.periodInterval);
			},
			(error: Response) => {
	  			console.log(error);
	  		}
		)
	}

	getWinners(){
		this.winnerService.getWinners().subscribe(
		(winners: Array<object>) => {
					let index = 1;
					let randomize = setInterval(() => {						
						this.randomWinnerId = Math.round(Math.random()*100);					
		  				if (index === this.amountOfWinners) {
		  					clearInterval(randomize);
		  				}else{
		  					index += 1;
		  				}
		  				this.winners.push(winners[this.randomWinnerId]);
						
					}, this.periodInterval);	  		
				
	  		},
	  		(error: Response) => {
	  			console.log(error);
	  		}
	  	)
	  }

}
