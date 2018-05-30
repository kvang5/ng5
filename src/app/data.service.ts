import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
// used import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'; instead of import { BehaviorSubject } from 'rxjs/BehaviorSubject'; -- due to rxjs not having member of BehaviorSubject

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
