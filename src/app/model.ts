export class Model {
  user;
  items;

  constructor() {
    this.user = 'Adam';
    this.items = [
      new TodoItem('Buy Flowers', false),
      new TodoItem('Get Shoes', false),
      new TodoItem('Collet Tickets', false),
      new TodoItem('Call Joe', false)];
  }
}

export class TodoItem {
  action;
  done;
  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
