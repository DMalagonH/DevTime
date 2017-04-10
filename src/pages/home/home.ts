import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	times = {
		min:	0,
		max:	0,
		pro:	0,
		est:	0
	};

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

	calculateOptimist = ():void => {
		var estimated:number = (+this.times.min + +this.times.max + ( 4 * +this.times.pro)) / 6;

		let alert = this.alertCtrl.create({
			title:		"Tiempo estimado optimista",
			subTitle:	estimated.toString(),
			buttons: 	[ "Aceptar" ]
		});

		alert.present();
	}

	calculatePessimist = ():void => {
		var estimated:number = (+this.times.min + (3 * +this.times.max) + ( 2 * +this.times.pro)) / 6;

		let alert = this.alertCtrl.create({
			title:		"Tiempo estimado pesimista",
			subTitle:	estimated.toString(),
			buttons: 	[ "Aceptar" ]
		});

		alert.present();
	}
}

interface Times{
	min:number,
	max:number,
	pro:number,
	est:number
};
