import { AlertService } from './../alert.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {
 @Input() delay=3000;
 text:string;
 type="success";

   constructor(private alertservice:AlertService) { }

  ngOnInit() {
    this.alertservice.alert$.subscribe(alert=>{
      this.text=alert.text, this.type=alert.type

      const timeout=setTimeout(()=>{
        clearTimeout(timeout)
        this.text=''
      },this.delay)
    })
  }

}
