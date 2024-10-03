"use strict";

// To do list //

const tasks = function (title) {
  this.title = title;
  this.taskslist = [];
  this.showtasks = function () {
    console.log(`---${this.title}----`);
    this.taskslist.forEach((elem, index) =>
      console.log(`${index + 1}: ${elem}`)
    );
  };
  this.add = function (element) {
    this.taskslist = [element, ...this.taskslist];
  };
};
const myTasks = new tasks("Daily tasks");
myTasks.add(`complete arrays`);
myTasks.add(` sleep for 1 hour`);
myTasks.showtasks();

const shopping = new tasks(" shopping");
shopping.add(`buy jaggery from familyshop`);
shopping.add(` sweater `);
shopping.showtasks();
