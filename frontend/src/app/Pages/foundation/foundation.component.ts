import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Services/shared.service';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent implements OnInit {

  

  constructor(private shared: SharedService) { }
  fair = true
  dark = true
  mild = true
  tone: string
  title: string
  display = true
  display2 = false

  ngOnInit(): void {
    this.tone = this.shared.getTone()
    if(this.tone == null) {
      this.title = "Foundations"
    }else{
      this.title = "Foundations for You"
      this.display = false
      this.display2 = true
      if(this.tone == "fair") {
        this.dark = false
        this.mild = false
      }else if(this.tone == "mild") {
        this.dark = false
        this.fair = false
      }else if(this.tone == "dark") {
        this.fair = false
        this.mild = false
      }
    }
  }
}
