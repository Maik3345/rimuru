import { createComponent } from '@lit/react';
import * as React from 'react';
import { LitStyleguide } from '@rimurugroup/core/lit-styleguide.js';

export const LitStyleguideComponent = createComponent({
  tagName: 'lit-styleguide',
  elementClass: LitStyleguide,
  react: React,
});
