import {Component} from "@angular/core"
import {User} from "./models/user"

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    message: string = 'Hello';
    users: User[] = [
        { id: 25, name: 'Ninan', username: 'jpninanjohn' },
        { id: 26, name: 'Leo', username: 'leoOrion' },
        { id: 34, name: 'Orion', username: 'lionHunter' }
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser)
    }

    onUserCreated(event) {
        this.users.push(event.user);
    }

    onUserDeleted(event) {
        var index = this.users.indexOf(this.activeUser);
        this.users.splice(index, 1);
        this.activeUser = false;
    }
}
