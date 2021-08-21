import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() type:string 
  @Input() placeholder:string 
  @Input() name:string 
  @Input() req:boolean 

  constructor() { }

  ngOnInit() {}

}
