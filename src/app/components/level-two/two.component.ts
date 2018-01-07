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
  selector: 'app-level-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
  valid = false;
  
  ngOnInit() {
    const self = this;
  }
  
}
