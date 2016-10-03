import {Component, Output, EventEmitter} from '@angular/core'
import {User} from '../models/user'

@Component({
    selector: 'user-form',
    styles: [`
      form{
        padding: 10px;
        background: white;
        border-radius: 3px;
      }
    `],
    template: `
      <form #form='ngForm' (ngSubmit)="onSubmit()" *ngIf ="active">

        <div class="form-group" [ngClass]= "{'has-error': name.invalid && name.touched }">
          <input type= "text" class ="form-control" name="name" placeholder="Name" required
          [(ngModel)]= "newUser.name" #name="ngModel"/>
          <span class="help-block" *ngIf="name.invalid && name.touched">Name is required</span>
        </div>

        <div class="form-group" [ngClass]= "{'has-error': username.invalid && username.touched }">
          <input type="text" class ="form-control" name="UserName" placeholder="Username" required
          [(ngModel)]= "newUser.username" #username="ngModel"/>
          <span class="help-block" *ngIf="username.invalid && username.touched">UserName is required</span>
        </div>

        <button type="submit" class ="btn btn-lg btn-primary btn-block" name="submitButton"
        [disabled]= "form.invalid">
          Create New User
        </button>

      </form>
    `
})
export class UserFormComponent {
    @Output() userCreated = new EventEmitter();
    newUser: User = new User();
    active: boolean = true;

    onSubmit() {
        this.userCreated.emit({ user: this.newUser })
        this.newUser = new User();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
