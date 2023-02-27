import { Component, Input } from '@angular/core';
import { News } from 'src/app/models/News';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  @Input() news!: News;
}
