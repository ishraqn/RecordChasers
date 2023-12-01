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
    {name: "patrick123", age: 30, description: "teaches HCI", email: "pat@gmail.com", password: "password-s"},
    {name: "jhonny", age: 600, description: "here's jhonny", email: "jhonnyhere@gmail.com", password: "HERE123-s"},
    {name: "randomcommentor", age: 5, description: "", email: "sfhgsh@gmail.com", password: "youremembersthese"},
  ];

  categories : Category[] = [
    {name: "Food"},
    {name: "Sports"},
    {name: "Human Body"},
    {name: "Animals"}
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
      name: "Most elegant golf swing", 
      category: this.categories[1], 
      published: new Date(), 
      author: this.users[3], 
      description: "done with batterman 353532 golf club", 
      views: 3454353, 
      likes: 10,
      dislikes: 1,
      comments: [
        {comment : "cool", user: this.users[4]},
        {comment : "could be better", user: this.users[2]},
        {comment : "my mom is nice", user: this.users[3]}
      ],
      thumbnailURL: "assets/images/golf_swing.jpg" 
    },
    {
      name: "Fastest 50m sprint", 
      category: this.categories[1], 
      published: new Date(), 
      author: this.users[0], 
      description: "I run fast", 
      views: 5, 
      likes: 0,
      dislikes: 0,
      comments: [
        {comment : "I thought this stuff was supposed to be interesting", user: this.users[1]},
        {comment : "not bad", user: this.users[2]}
      ],
      thumbnailURL: "assets/images/50m.webp" 
    },
    {
      name: "Longest tongue", 
      category: this.categories[2], 
      published: new Date(), 
      author: this.users[4], 
      description: "LOOOOOOONG Tongue", 
      views: 500, 
      likes: 10,
      dislikes: 10,
      comments: [
        {comment : "idk what to think about this", user: this.users[1]}
      ],
      thumbnailURL: "assets/images/long_tongue.webp" 
    },
    {
      name: "Largest watermellon", 
      category: this.categories[0], 
      published: new Date(), 
      author: this.users[0], 
      description: "I collect food", 
      views: 690001, 
      likes: 69,
      dislikes: 70,
      comments: [
        {comment : "no one like/dislike it", user: this.users[1]},
        {comment : "im gonna dislike to ruin it loool", user: this.users[2]}
      ],
      thumbnailURL: "assets/images/watermellon.webp" 
    },
    {
      name: "Scardiest cat", 
      category: this.categories[3], 
      published: new Date(), 
      author: this.users[4], 
      description: "", 
      views: 457474, 
      likes: 44,
      dislikes: 46,
      comments: [
        {comment : "haha", user: this.users[1]},
        {comment : "I like the waterellon one more", user: this.users[4]}
      ],
      thumbnailURL: "assets/images/cat.jpg" 
    },
    {
      name: "Tallest giraffe", 
      category: this.categories[3], 
      published: new Date(), 
      author: this.users[0], 
      description: "I collect food", 
      views: 690001, 
      likes: 69,
      dislikes: 70,
      comments: [
        {comment : "no one like/dislike it", user: this.users[1]},
        {comment : "im gonna dislike to ruin it loool", user: this.users[2]}
      ],
      thumbnailURL: "assets/images/giraffe.webp" 
    },
    {
      name: "Most jacked forearms", 
      category: this.categories[1], 
      published: new Date(), 
      author: this.users[1], 
      description: "skips leg day", 
      views: 50353, 
      likes: 352,
      dislikes: 2,
      comments: [
        {comment : "legs are for losers", user: this.users[1]},
        {comment : "bench >>>>>>", user: this.users[2]}
      ],
      thumbnailURL: "assets/images/Popeye_the_Sailor.png" 
    },
    {
      name: "Farthest field goal", 
      category: this.categories[0], 
      published: new Date(), 
      author: this.users[0], 
      description: "robots cool", 
      views: 34636, 
      likes: 453,
      dislikes: 50,
      comments: [
        {comment : "that's cheating :(", user: this.users[4]}
      ],
      thumbnailURL: "assets/images/MarkRoberFieldGoalRobot.jpg" 
    },
    {
      name: "Bendyiest spine", 
      category: this.categories[1], 
      published: new Date(), 
      author: this.users[4], 
      description: "this is supposed to bend...right", 
      views: 420, 
      likes: 420,
      dislikes: 0,
      comments: [
        {comment : "uh...", user: this.users[4]},
        {comment : "I like my people like my academic career, straight and narrow", user: this.users[3]}
      ],
      thumbnailURL: "assets/images/cursed.png" 
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
