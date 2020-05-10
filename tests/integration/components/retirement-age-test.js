import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | retirement-age', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RetirementAge />`);

    const form = this.element.querySelector('.input');
    assert.ok(form, 'form for user input');

    const output = this.element.querySelector('.output');
    assert.ok(output, 'output table');

    const labels = this.element.querySelectorAll('label');
    const labelNames = [
      'Current Age:',
      'Current Amount in Retirement Savings:',
      'Estimated Real Return:',
      'Current Annual Spending:',
    ];
    assert.equal(labels.length, labelNames.length, 'correct number of labels');

    const inputs = this.element.querySelectorAll('input');
    const inputIds = [
      'current-age',
      'current-savings',
      'est-return',
      'spending-rate',
    ];
    assert.equal(inputs.length, inputIds.length, 'correct number of inputs');

    for (let i=0; i < labelNames.length; ++i) {
      const actualText = labels[i].innerText;
      assert.equal(actualText, labelNames[i], 'correct label text');
      const forVal = labels[i].getAttribute('for');
      assert.equal(forVal, inputIds[i], 'correct \'for\' value');
      const actualId = inputs[i].id;
      assert.equal(actualId, inputIds[i], 'correct input id');
    }
  });

  test('default values are correct', async function(assert) {
    await render(hbs`<RetirementAge />`);
    const values = {
      '#current-age': '0',
      '#current-savings': '0',
      '#est-return': '7',
      '#spending-rate': '0',
    }

    for (let key in values) {
      let val = this.element.querySelector(key).value;
      assert.equal(val, values[key], `default for ${key} is correct`);
    }
  });
});
