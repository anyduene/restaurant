import { Component, Output, EventEmitter } from '@angular/core';
import { News } from 'src/app/models/News';
import { newslist } from 'src/app/services/news-list';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent {
  list: News[] = newslist;
}
