import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	Menu: any = [];
	constructor() { }

	ngOnInit(): void {
		this.Menu = [
			{
				"name": "Home",
				"link": "",
				"Submenu": []
			},
			{
				"name": "About",
				"link": "",
				"Submenu": [
					{
						"name": "About",
						"link": ""
					}
				]
			},
			{
				"name": "Education",
				"link": "",
				"Submenu": [
					{
						"name": "Education",
						"link": ""
					}
				]
			},
			{
				"name": "My Work",
				"link": "",
				"Submenu": [
					{
						"name": "Home",
						"link": ""
					}
				]
			},
			{
				"name": "Contact Us",
				"link": "",
				"Submenu": [
					{
						"name": "Contact Us",
						"link": ""
					}
				]
			}
		]
	}

}
