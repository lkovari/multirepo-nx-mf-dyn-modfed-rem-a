import { ChangeDetectionStrategy, Component } from '@angular/core';

const LAST_UPDATE = '2025-03-22 15:43:00';

@Component({
  selector: 'app-remote-a-main',
  imports: [],
  templateUrl: './remote-a-main.html',
  styleUrl: './remote-a-main.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteAMain {
  protected readonly lastUpdate = LAST_UPDATE;
}
