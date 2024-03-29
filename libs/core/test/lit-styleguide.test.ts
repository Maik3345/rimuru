import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LitStyleguide } from '../src/lit-styleguide/lit-styleguide.js';

window.customElements.define('lit-styleguide', LitStyleguide);

describe('LitStyleguide', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<LitStyleguide>(
      html`<lit-styleguide></lit-styleguide>`
    );

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<LitStyleguide>(
      html`<lit-styleguide></lit-styleguide>`
    );
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<LitStyleguide>(
      html`<lit-styleguide header="attribute header"></lit-styleguide>`
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<LitStyleguide>(
      html`<lit-styleguide></lit-styleguide>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
