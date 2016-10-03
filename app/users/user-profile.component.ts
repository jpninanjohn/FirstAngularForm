import {Component, Input, Output, EventEmitter} from '@angular/core'
import {User} from '../models/user'

@Component({
    selector: 'profile',
    template: `
          <div class="jumbotron" *ngIf= "user">
            <h2>{{user.name}} <small>({{user.username}})</small></h2>
            <input type ="text" class="form-control" [(ngModel)] = "user.name">
            <button class="btn btn-danger float-right" (click) = "deleteUser()"> Delete User </button>
          </div>
        `,
    styleUrls: ['./app/app.component.css']
})

export class UserProfileComponent {
    @Input() user: User;
    @Output() userDeleted = new EventEmitter();

    deleteUser() {
        this.userDeleted.emit({ deletedUser: this.user })
    }
}
