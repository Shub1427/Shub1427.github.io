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
  selector: 'app-level-zero',
  templateUrl: './zero.component.html',
  styleUrls: ['./zero.component.scss'],
})
export class ZeroComponent implements OnInit {
  valid = false;
  
  ngOnInit() {
    const self = this;
  }
  
}
