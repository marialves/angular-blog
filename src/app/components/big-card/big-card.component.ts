import { Component, Input, OnInit } from '@angular/core';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent{
  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";
  @Input()
  Id: string = "0";

}

export const routes: Routes = [];
