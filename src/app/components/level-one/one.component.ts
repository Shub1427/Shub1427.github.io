import {
    Component,
    OnInit,
    OnDestroy,
    AfterViewInit,
    ElementRef,
    ViewChild,
    ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-level-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  valid = false;
  
  ngOnInit() {
    const self = this;
  }
  
}
