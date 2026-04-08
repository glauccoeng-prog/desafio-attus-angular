import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellComponent } from './shell.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  const defaultBreakpointState: BreakpointState = {
    matches: false,
    breakpoints: {
      [Breakpoints.Handset]: false,
      [Breakpoints.TabletPortrait]: false,
    },
  };

  const breakpointSubject = new BehaviorSubject<BreakpointState>(defaultBreakpointState);

  const mockBreakpointObserver = {
    observe: vi.fn(() => breakpointSubject.asObservable()),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellComponent, NoopAnimationsModule],
      providers: [
        provideRouter([]),
        { provide: BreakpointObserver, useValue: mockBreakpointObserver },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve usar o modo "side" para desktop (não é mobile)', () => {
    // defaultBreakpointState mock é false (desktop)
    expect(component.isMobile()).toBe(false);

    const sidenav = component.sidenav;
    expect(sidenav.mode).toBe('side');
    expect(sidenav.opened).toBe(true);
  });

  it('deve usar o modo "over" para mobile', () => {
    // Simula tela pequena
    const mobileState: BreakpointState = {
      matches: true,
      breakpoints: {
        [Breakpoints.Handset]: true,
        [Breakpoints.TabletPortrait]: false,
      },
    };
    breakpointSubject.next(mobileState);
    fixture.detectChanges();

    expect(component.isMobile()).toBe(true);

    const sidenav = component.sidenav;
    expect(sidenav.mode).toBe('over');
    expect(sidenav.opened).toBe(false);
  });

  it('deve chamar toggleSidenav corretamente', () => {
    const toggleSpy = vi.spyOn(component.sidenav, 'toggle');
    component.toggleSidenav();
    expect(toggleSpy).toHaveBeenCalled();
  });
});
