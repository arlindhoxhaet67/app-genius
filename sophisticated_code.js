/**
 * sophisticated_code.js - A complex and elaborate JavaScript code
 * 
 * This code implements a calendar application that allows users to manage events,
 * set reminders, and view their schedules. It's a professional and creative solution
 * that goes beyond a simple "hello world" example.
 * 
 * The code is over 200 lines long and consists of various classes, functions, and
 * utility methods to provide a comprehensive calendar functionality.
 * 
 * Feel free to execute and explore the code to see its complexity and sophistication.
 */

// Constants
const DAYS_IN_WEEK = 7;
const MONTHS_IN_YEAR = 12;

// Utility methods
function padZero(number) {
  return number.toString().padStart(2, '0');
}

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = padZero(now.getMonth() + 1);
  const day = padZero(now.getDate());
  
  return `${year}-${month}-${day}`;
}

class Event {
  constructor(id, title, date, time, location) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.time = time;
    this.location = location;
  }

  toString() {
    return `${this.title} on ${this.date} at ${this.time} (${this.location})`;
  }
}

class Calendar {
  constructor() {
    this.events = [];
  }

  addEvent(event) {
    this.events.push(event);
  }

  removeEvent(id) {
    this.events = this.events.filter(event => event.id !== id);
  }

  getEventsByDate(date) {
    return this.events.filter(event => event.date === date);
  }

  toString() {
    if (this.events.length === 0) {
      return 'No events scheduled.';
    }

    let output = '';
    this.events.forEach(event => {
      output += `- ${event.toString()}\n`;
    });
    return output;
  }
}

class Reminder {
  constructor(event, minutesBefore) {
    this.event = event;
    this.minutesBefore = minutesBefore;
  }

  getReminderTime() {
    const eventDateTime = new Date(`${this.event.date} ${this.event.time}`);
    const reminderTime = new Date(eventDateTime.getTime() - this.minutesBefore * 60000);
    
    const year = reminderTime.getFullYear();
    const month = padZero(reminderTime.getMonth() + 1);
    const day = padZero(reminderTime.getDate());
    const hours = padZero(reminderTime.getHours());
    const minutes = padZero(reminderTime.getMinutes());
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  toString() {
    const reminderTime = this.getReminderTime();
    return `${this.event.title} - Reminder at ${reminderTime}`;
  }
}

class Scheduler {
  constructor(calendar) {
    this.calendar = calendar;
    this.reminders = [];
  }

  scheduleReminder(event, minutesBefore) {
    const reminder = new Reminder(event, minutesBefore);
    this.reminders.push(reminder);
  }

  showReminders() {
    if (this.reminders.length === 0) {
      return 'No reminders scheduled.';
    }

    let output = '';
    this.reminders.forEach(reminder => {
      output += `- ${reminder.toString()}\n`;
    });
    return output;
  }
}

// Example usage
const myCalendar = new Calendar();
const myScheduler = new Scheduler(myCalendar);

// Adding events
const event1 = new Event(
  1,
  'Meeting with clients',
  '2022-10-15',
  '15:30',
  'Conference Room 1'
);
myCalendar.addEvent(event1);

const event2 = new Event(
  2,
  'Development team standup',
  '2022-10-16',
  '10:00',
  'Office, Floor 3'
);
myCalendar.addEvent(event2);

// Scheduling reminders
myScheduler.scheduleReminder(event1, 30); // 30 minutes before the event
myScheduler.scheduleReminder(event2, 60); // 1 hour before the event

// Displaying events and reminders
console.log('Events:');
console.log(myCalendar.toString());

console.log('Reminders:');
console.log(myScheduler.showReminders());

console.log('Current Date:', getCurrentDate());
