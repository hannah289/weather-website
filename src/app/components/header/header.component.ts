import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public selectedNav = 'current'
  constructor() { }

  ngOnInit(): void {
  }

  public onValChange(event: any) {
    this.selectedNav = event.value;
  }

}
