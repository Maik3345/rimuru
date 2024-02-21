import { html } from 'lit';
import '../src/lit-styleguide.js';
export default {
    title: 'Lit Web Components',
    component: 'lit-styleguide',
    argTypes: {
        header: { control: 'text' },
        counter: { control: 'number' },
        textColor: { control: 'color' },
    },
};
const Template = ({ header = 'Hello world', counter = 5, textColor, slot, }) => html `
  <lit-styleguide
    style="--lit-styleguide-text-color: ${textColor || 'black'}"
    .header=${header}
    .counter=${counter}
  >
    ${slot}
  </lit-styleguide>
`;
export const Regular = Template.bind({});
export const CustomHeader = Template.bind({});
CustomHeader.args = {
    header: 'My header',
};
export const CustomCounter = Template.bind({});
CustomCounter.args = {
    counter: 123456,
};
export const SlottedContent = Template.bind({});
SlottedContent.args = {
    slot: html `<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
    slot: { table: { disable: true } },
};
//# sourceMappingURL=index.stories.js.map