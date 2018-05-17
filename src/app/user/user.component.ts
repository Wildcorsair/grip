import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})

export class UserComponent {
  @Input() user;

  isMarked: boolean = false;

  markUser(): void {
    console.log('Marked!');
    this.isMarked = true;
  }
}
