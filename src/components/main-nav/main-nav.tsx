import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'main-nav',
  styleUrl: 'main-nav.css',
  shadow: true,
})
export class MainNav {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
