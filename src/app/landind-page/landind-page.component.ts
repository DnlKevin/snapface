import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landind-page',
  templateUrl: './landind-page.component.html',
  styleUrls: ['./landind-page.component.scss'],
})
export class LandindPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }
}
