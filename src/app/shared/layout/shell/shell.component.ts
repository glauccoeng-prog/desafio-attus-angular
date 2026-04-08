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
  styles: [`
    .shell {
      height: 100%;
    }

    .shell__sidenav {
      width: 280px;
      border-right: 1px solid var(--mat-sys-outline-variant);
      overflow-x: hidden !important;
    }

    .sidenav__header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 24px 16px 16px;
    }

    .sidenav__brand {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .sidenav__title {
      font-size: 22px;
      font-weight: 500;
      color: var(--mat-sys-primary);
      line-height: 1.3;
    }

    .sidenav__subtitle {
      font: var(--mat-sys-body-small);
      color: var(--mat-sys-on-surface-variant);
    }

    .sidenav__item--active {
      background-color: var(--mat-sys-secondary-container) !important;
      border-radius: 28px;
      margin: 0 12px;
    }

    .shell__content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `],
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
