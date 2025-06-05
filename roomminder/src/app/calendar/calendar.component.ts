import { Component, Signal, InputSignal, WritableSignal, computed, signal, input } from '@angular/core';
import { SignalNode } from '@angular/core/primitives/signals';
import { DateTime, Info, Interval } from 'luxon';
import { CommonModule } from '@angular/common';
import { Meetings } from './meetings.interface';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css', 
  standalone: true
})
export class CalendarComponent {
  meetings: InputSignal<Meetings> = input.required();
  today: Signal<DateTime> = signal(DateTime.local());
  firstDayofActiveMonth: WritableSignal<DateTime> = signal(
    this.today().startOf('month'),
  );
  activeDay: WritableSignal<DateTime | null> = signal(null);
  weekDays: Signal<string[]> = signal(Info.weekdays('short'));
  daysOfMonth: Signal<DateTime[]> = computed(() => {
    return Interval.fromDateTimes(
      this.firstDayofActiveMonth().startOf('week'),
      this.firstDayofActiveMonth().endOf('month').endOf('week'),
    )
    .splitBy({day: 1})
    .map((d) => {
      if (d.start === null){
        throw new Error('Wrong dates');
      }
      return d.start;
    });
  });

  DATE_MED = DateTime.DATE_MED;
  activeDayMeetings: Signal<string[]> = computed(() =>{
    const activeDay = this.activeDay()
    if(activeDay === null){
      return[];
    } 
    const activeDayISO = activeDay.toISODate()
    if(!activeDayISO){
      return[];
    }
    return this.meetings()[activeDayISO] ?? [];
  })

  goToPreviousMonth(): void{
    this.firstDayofActiveMonth.set(
      this.firstDayofActiveMonth().minus({month: 1}),
    );
  }

  goToNextMonth(): void{
    this.firstDayofActiveMonth.set(
      this.firstDayofActiveMonth().plus({month: 1}),
    );
  }

  goToToday(): void{
    this.firstDayofActiveMonth.set(
      this.today().startOf('month')
    );
  }
  // constructor(){
  //   console.log(this.daysOfMonth());
  // }
}
