import {Component} from "@angular/core"

@Component({
    selector: 'my-app',
    template: `
    <div class="jumbotron">
      <h1>Welcome</h1>
    </div>
  `,
    styles: [`
      .jumbotron{
        box-shadow: 0 2px 0 rgba(1,1,1,0.2);
      }
  `]
})
export class AppComponent {

}
