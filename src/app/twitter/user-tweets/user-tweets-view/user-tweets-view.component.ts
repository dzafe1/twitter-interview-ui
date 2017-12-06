import {Component, OnInit} from '@angular/core';
import {TweetModel} from "../../../models/tweet.model";
import {TweetService} from "../../../services/tweet/tweet.service";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../services/auth.service";
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-tweets-view',
  templateUrl: './user-tweets-view.component.html',
  styleUrls: ['./user-tweets-view.component.css']
})
export class UserTweetsViewComponent implements OnInit {

  $tweets: Observable<TweetModel[]>;
  $userInfo: any;
  userName: string;

  constructor(private tweetService: TweetService, private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userName = params['username'];
      this.$tweets = this.tweetService.fetchForUser(this.userName);
      this.userService.fetchUserInfo(this.userName).subscribe((res) => this.$userInfo = res);
    });
  }

}
