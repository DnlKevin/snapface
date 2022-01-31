import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 51,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    },
    {
      id: 2,
      title: 'Chat',
      description: 'Un chat très beau.',
      createdDate: new Date(),
      snaps: 145,
      imageUrl:
        'https://pixabay.com/get/g2e3f6f21654d8c7b5bd44a41c39181e83253f5960e23d1217e1d9e8e8b4e4ffe7901ddea4ae7773ce789c1f7cff81c2e98ec13e121660f4a88d56c5fd0b34db1a1a8bd9f97617bcc29553e03e2b291c9_1920.jpg',
      location: 'Paris',
    },
    {
      id: 3,
      title: 'Montagne',
      description: 'Des montagnes et des chèvres.',
      createdDate: new Date(),
      snaps: 250,
      imageUrl:
        'https://pixabay.com/get/g30486c4704c88c2b57374ee122b315c7a71ae28cc8467660108f525c8c56013947dda54e5e522f1751f760b7862d0e1da5f6a7a552e098de07ab65a290796c98b3f65489b0b27a0d957ecc76adff3cbd_1920.jpg',
      location: 'La montagne',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found !');
    } else {
      return faceSnap;
    }
  }

  // on cherche un facesnap par son id dans le tableau faceSnaps avec la fonction find()
  // si le facesnap existe, on lui incrémente ses snaps, sinon on throw une erreur
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
