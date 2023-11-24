import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  users : User[] = [
    {name: "Maxim Omelchenko", age: 22, description: "Best record breaker", email: "record@breaker.me", password: "WOOWOO"},
    {name: "George St. Pierre", age: 40, description: "", email: "gsp@official.com", password: "123454321"},
    {name: "Record Master", age: 51, description: "Mad hater", email: "online@troll.com", password: "1243fddfg213"},
    {name: "stinkyguy75", age: 11, description: "", email: "ggg123@gmail.com", password: "1111111-s"},
  ];

  categories : Category[] = [
    {name: "Food"}
  ];

  records : Record[] = [
    {
      name: "Fastest Goop eater in the west", 
      category: this.categories[0], 
      published: new Date(), 
      author: this.users[0], 
      description: "I eat goop", 
      views: 3454353, 
      likes: 10,
      dislikes: 26543,
      comments: [
        {comment : "worst record ever!", user: this.users[1]},
        {comment : "this sucks!", user: this.users[2]},
        {comment : "bad at the game", user: this.users[3]}
      ],
      thumbnailURL: "assets/images/goop_eater.webp" 
    },
    {
      name: "Fastest Goop eater in the wests", 
      category: this.categories[0], 
      published: new Date(), 
      author: this.users[0], 
      description: "I eat goop", 
      views: 3454353, 
      likes: 10,
      dislikes: 26543,
      comments: [
        {comment : "worst record ever!", user: this.users[1]},
        {comment : "this sucks!", user: this.users[2]},
        {comment : "bad at the game", user: this.users[3]}
      ],
      thumbnailURL: "assets/images/goop_eater.webp" 
    }
  ];

  selectedRecord: Record | undefined;
  selectedUser : User | undefined = this.users[0];

  constructor() { }

}

export type User = {
  name: string;
  age : number;
  description : string;
  email: string;
  password: string;
}

export type Category = {
  name : string;
}

export type Comment = {
  comment : string;
  user : User;
}

export type Record = {
  name: string;
  category : Category;
  published: Date;
  author : User;
  description : string;
  views: number;
  likes: number;
  dislikes: number;
  comments: Comment[];
  thumbnailURL : string;
}
