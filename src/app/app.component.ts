import { Component } from '@angular/core';
import { IpcService } from './core/services/ipc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'files-scanner';

  constructor(private ipcService: IpcService) {
    
  }

  readDownloads() {
    this.ipcService.send('read-downloads');
  }
}