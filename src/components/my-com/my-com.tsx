import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-com',
  styleUrl: 'my-com.css',
  shadow: true,
})
export class MyCom {

  @Prop() name: string;

  connectedCallback() {
    console.log('生命周期：connectedCallback');
  }

  componentWillLoad() {
    console.log('生命周期：componentWillLoad');
  }

  componentWillRender() {
    console.log('生命周期：componentWillRender');
  }
  componentDidRender() {
    console.log('生命周期：componentDidRender');
  }

  componentDidLoad() {
    console.log('生命周期：componentDidLoad');
  }

  componentShouldUpdate() {
    console.log('生命周期：componentShouldUpdate');
  }

  componentWillUpdate() {
    console.log('生命周期：componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('生命周期：componentDidUpdate');
  }

  disconnectedCallback() {
    console.log('生命周期：disconnectedCallback');
  }

  render() {
    return (
      <Host>
        <slot>我是自定义组件{this.name}</slot>
        <input type='text'></input>
      </Host>
    );
  }

}
