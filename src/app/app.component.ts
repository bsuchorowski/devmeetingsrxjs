import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.messages = db.list('messages').valueChanges();
  }
}
