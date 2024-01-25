import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'lit-styleguide': LitStyleguide;
  }
}

@customElement('lit-styleguide')
export class LitStyleguide extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--lit-styleguide-text-color, #000);
    }
  `;

  @property({ type: String }) header = 'Hey there, from Lit!';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
