import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WinnerService } from '../../winner.service';


@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

	winner: object={};	 
   
	constructor(private winnersService: WinnerService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				const id= +params['id'];
				this.winnersService.getWinnersById(id).subscribe(
					(winner: object) => {						
						this.winner= winner[0];											
					}
				);
			}
		)
	}

}
