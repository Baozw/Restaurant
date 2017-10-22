import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ContentModel } from '../../models/content.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {
  @Input() content: ContentModel;
  @Input() left: boolean;

  constructor() { }

  ngOnInit() {
  }

}
