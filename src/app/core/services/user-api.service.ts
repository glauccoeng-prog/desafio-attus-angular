import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User, CreateUserDTO, UpdateUserDTO } from '../../features/users/models/user.model';
import { MOCK_USERS } from '../data/mock-users';

/**
 * Infrastructure Layer — User API Service
 * Simula chamadas HTTP com Observable + delay para emular uma API REST real.
 * Em produção, substituir por HttpClient real.
 *
 * Usa Observable ao invés de Promise para compatibilidade com RxJS/Angular.
 */
@Injectable({ providedIn: 'root' })
export class UserApiService {
  private users: User[] = [...MOCK_USERS];

  private simulateDelay<T>(data: T, ms = 600): Observable<T> {
    return timer(ms).pipe(switchMap(() => of(data)));
  }

  getAll(): Observable<readonly User[]> {
    return this.simulateDelay([...this.users]);
  }

  getById(id: string): Observable<User | undefined> {
    const user = this.users.find((u) => u.id === id);
    return this.simulateDelay(user, 300);
  }

  search(query: string): Observable<readonly User[]> {
    const lower = query.toLowerCase();
    const filtered = this.users.filter(
      (u) => u.nome.toLowerCase().includes(lower) || u.email.toLowerCase().includes(lower),
    );
    return this.simulateDelay(filtered, 400);
  }

  create(dto: CreateUserDTO): Observable<User> {
    const newUser: User = { ...dto, id: crypto.randomUUID() };
    this.users = [...this.users, newUser];
    return this.simulateDelay(newUser, 500);
  }

  update(dto: UpdateUserDTO): Observable<User> {
    const index = this.users.findIndex((u) => u.id === dto.id);
    if (index === -1) {
      return throwError(() => new Error('Usuário não encontrado.'));
    }
    const updated: User = { ...this.users[index], ...dto } as User;
    this.users = this.users.map((u) => (u.id === dto.id ? updated : u));
    return this.simulateDelay(updated, 500);
  }

  delete(id: string): Observable<void> {
    this.users = this.users.filter((u) => u.id !== id);
    return this.simulateDelay(undefined as void, 300);
  }
}
