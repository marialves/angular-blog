import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from "../../data/datafake"

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }
  
  setValuesToComponent(id: string | null){
    console.log("result.photoCover")
    const result = dataFake.filter(article => article.id == id)[0]

    this.photoCover = result.photoCover
    this.contentTitle = result.title
    this.contentDescription = result.description
    
  }
}

