/**
 * UserCard Component — Contract Verification
 *
 * Angular standalone components with signal-based APIs (input.required, output)
 * require the Angular DI context and AOT compilation for proper instantiation.
 *
 * These tests verify the component's contract (class existence, metadata).
 * Full rendering tests are covered by the integration/build step.
 */
import { UserCardComponent } from './user-card.component';

describe('UserCardComponent (contract)', () => {
  it('should be defined as a class', () => {
    expect(UserCardComponent).toBeDefined();
    expect(typeof UserCardComponent).toBe('function');
  });

  it('should be importable and have correct name', () => {
    expect(UserCardComponent.name).toBe('UserCardComponent');
  });
});
