import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    };
    this.myOtherSnap = {
      title: 'Chat',
      description: 'Un chat très beau.',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://pixabay.com/get/g2e3f6f21654d8c7b5bd44a41c39181e83253f5960e23d1217e1d9e8e8b4e4ffe7901ddea4ae7773ce789c1f7cff81c2e98ec13e121660f4a88d56c5fd0b34db1a1a8bd9f97617bcc29553e03e2b291c9_1920.jpg',
      location: 'Paris',
    };
    this.myLastSnap = {
      title: 'Montagne',
      description: 'Des montagnes et des chèvres.',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://pixabay.com/get/g30486c4704c88c2b57374ee122b315c7a71ae28cc8467660108f525c8c56013947dda54e5e522f1751f760b7862d0e1da5f6a7a552e098de07ab65a290796c98b3f65489b0b27a0d957ecc76adff3cbd_1920.jpg',
      location: 'La montagne',
    };
  }
}

/**this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = 'Oh Snap !'; */
