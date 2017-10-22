import { Component, OnInit } from '@angular/core';
import { ContentModel } from '../../models/content.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contents: Array < ContentModel > = [
    { Title: 'Our Unique Culinary Creations', Name: 'Fichipizza', Position: '', Description: 'A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando panado, honey and arugula.' },
    { Title: "This Month's Promotions", Name: 'Weekend Grand Buffet', Position: '', Description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person' },
    { Title: 'Meet our Culinary Specialists', Name: 'Tommy McHugh', Position: 'Executive Chef', Description: 'Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Mediterranean-Italian experiences.' }
  ];

  menu=[{ Title: 'The Sarah', Price: '$5.99', Description: 'A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando panado, honey and arugula.' },
  { Title: "The Italian", Price: '$6.99', Description: 'A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando panado, honey and arugula.' },
  { Title: 'The Big Roy', Price: '$6.99', Description: 'A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando panado, honey and arugula.' },
  { Title: 'Chai Tea', Price: '$1.99', Description: 'A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando panado, honey and arugula.' },
  { Title: "Beers-Local", Price: '$2.99', Description: 'A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando panado, honey and arugula.' },
  { Title: 'Beers-Imported', Price: '$4.99', Description: 'A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando panado, honey and arugula.' },
  { Title: 'Wine Glass', Price: '$4.99', Description: 'A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando panado, honey and arugula.' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
