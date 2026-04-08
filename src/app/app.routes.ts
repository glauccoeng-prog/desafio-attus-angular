import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/layout/shell/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/users/components/user-list/user-list.component').then(
            (m) => m.UserListComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
