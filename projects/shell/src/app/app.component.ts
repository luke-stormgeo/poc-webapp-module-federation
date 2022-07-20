import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('footer', { read: ViewContainerRef }) footer!: ViewContainerRef;

  title = 'shell';

  constructor(private _vcf: ViewContainerRef) {}

  ngOnInit(): void {
    this.loadFooter();
  }

  async loadFooter(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './FooterComponent',
    });

    const componentRef: ComponentRef<typeof m.FooterComponent> = this.footer.createComponent(
      m.FooterComponent
    );

    componentRef.instance.color = '#CCFFCC';
  }
}
