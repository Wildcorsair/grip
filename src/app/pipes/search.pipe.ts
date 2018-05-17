import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(users, value) {
    if (value === undefined) {
      return users;
    }
    return users.filter(user => {
      return user.name.first.includes(value);
    })
  }
}
