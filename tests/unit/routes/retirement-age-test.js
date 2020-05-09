import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | retirement-age', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:retirement-age');
    assert.ok(route);
  });
});
