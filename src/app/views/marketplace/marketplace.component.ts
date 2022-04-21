import {Component, Input, OnInit} from '@angular/core';
import { LightboxConfig, Lightbox } from 'ngx-lightbox';
import {Router} from "@angular/router";

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  mpItmes = [
    {img: "assets/images/marketplace/nft-mp-1.png", name:"San Diego, 92109" },
    {img: "assets/images/marketplace/nft-mp-1.png", name:"San Diego, 92109" },
    {img: "assets/images/marketplace/nft-mp-1.png", name:"San Diego, 92109" },
  ];

  fnDetails(fnDetails : any){
    this.router.navigate(['/marketplace/details/'+ '12'],
      {});
  }

}
