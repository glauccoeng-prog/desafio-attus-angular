import { Component, ChangeDetectionStrategy, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

/**
 * Shell — Layout principal com sidenav + toolbar.
 * Responsivo: drawer 'over' no mobile, 'side' no desktop.
 */
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./shell.component.scss'],
  template: `
    <mat-sidenav-container class="shell">
      <!-- Sidenav / Drawer -->
      <mat-sidenav
        #sidenav
        [mode]="isMobile() ? 'over' : 'side'"
        [opened]="!isMobile()"
        class="shell__sidenav"
        [fixedInViewport]="isMobile()"
      >
        <div class="sidenav__header">
          <div class="sidenav__brand">
            <span class="sidenav__title">Desafio Attus</span>
            <span class="sidenav__subtitle">Front-End Angular</span>
          </div>
          @if (isMobile()) {
            <button mat-icon-button (click)="sidenav.close()" aria-label="Fechar menu">
              <mat-icon>close</mat-icon>
            </button>
          }
        </div>

        <mat-nav-list>
          <a mat-list-item class="sidenav__item sidenav__item--active">
            <mat-icon matListItemIcon>people</mat-icon>
            <span matListItemTitle>App Usuários</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>

      <!-- Main content -->
      <mat-sidenav-content class="shell__content">
        <router-outlet />
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class ShellComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  private readonly breakpointObserver = inject(BreakpointObserver);

  readonly isMobile = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .pipe(map((result) => result.matches)),
    { initialValue: false },
  );

  toggleSidenav(): void {
    this.sidenav.toggle();
  }
}
