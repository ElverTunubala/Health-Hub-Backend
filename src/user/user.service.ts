import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getData() {
    return [
      {
        id: 1,
        name: 'John',
      },
      {
        id: 2,
        name: 'Mary',
      },
      {
        id: 3,
        name: 'Sally',
      },
    ];
  }
}
