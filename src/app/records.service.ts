import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  private user : User | undefined = undefined;
  private userBehaviourSubject = new BehaviorSubject<User | undefined>(this.user);
  public User = this.userBehaviourSubject.asObservable();

  constructor() { }

  loginOrSignup(username: string, password: string){
    this.user = { name: username, password : password };
  }
}

export type User ={
  name: string;
  password: string;
}
