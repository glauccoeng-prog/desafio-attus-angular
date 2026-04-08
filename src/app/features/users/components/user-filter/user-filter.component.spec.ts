import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFilterComponent } from './user-filter.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UserFilterComponent', () => {
  let fixture: ComponentFixture<UserFilterComponent>;
  let component: UserFilterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFilterComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit valueChange on input', () => {
    let emittedValue: string | undefined;
    component.valueChange.subscribe((val: string) => (emittedValue = val));

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(emittedValue).toBe('test');
  });

  it('should display search input with correct placeholder', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.placeholder).toContain('Pesquisar');
  });
});
