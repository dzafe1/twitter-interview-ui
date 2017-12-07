import {Component, Input, OnInit} from '@angular/core';
import {TweetModel} from '../../../models/tweet.model';
import {UserInfoModel} from '../../../models/userInfo.model';

@Component({
  selector: 'app-user-tweets-table',
  templateUrl: './user-tweets-table.component.html',
  styleUrls: ['./user-tweets-table.component.css']
})
export class UserTweetsTableComponent {

  @Input() tweets: TweetModel[];
  @Input('userInfo') userInfo: UserInfoModel;
}
