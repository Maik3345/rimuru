import { LitElement } from 'lit';
declare global {
    interface HTMLElementTagNameMap {
        'lit-styleguide': LitStyleguide;
    }
}
export declare class LitStyleguide extends LitElement {
    static styles: import("lit").CSSResult;
    header: string;
    counter: number;
    __increment(): void;
    render(): import("lit").TemplateResult<1>;
}
