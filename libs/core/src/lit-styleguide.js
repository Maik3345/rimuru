var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let LitStyleguide = class LitStyleguide extends LitElement {
    constructor() {
        super(...arguments);
        this.header = 'Hey there, from Lit!';
        this.counter = 5;
    }
    __increment() {
        this.counter += 1;
    }
    render() {
        return html `
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
    }
};
LitStyleguide.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--lit-styleguide-text-color, #000);
    }
  `;
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], LitStyleguide.prototype, "header", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], LitStyleguide.prototype, "counter", void 0);
LitStyleguide = __decorate([
    customElement('lit-styleguide')
], LitStyleguide);
export { LitStyleguide };
//# sourceMappingURL=lit-styleguide.js.map