import { Component, Input } from '@angular/core';
import { Nano } from './nano.model';

@Component({
  selector: 'app-nano',
  templateUrl: './nano.component.html',
  styleUrls: ['./nano.component.css']
})
export class NanoComponent {
  @Input() nano:Nano
}
