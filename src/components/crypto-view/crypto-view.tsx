import { Component, Host, h, Prop, State, Method, Listen } from '@stencil/core';
import { getCryptoData } from '../../utils/utils';
import { CryptoInterface } from './crypto.interface';

@Component({
  tag: 'crypto-view',
  styleUrl: 'crypto-view.css',
  shadow: true,
})
export class CryptoView {
  /**
   * Valid API key obtained from cryptocompare.com
   */
  @Prop() apikey: string;

  @State() cryptoData: CryptoInterface;

  cryptoCurrencies = ['BTC', 'ETH', 'XRP'];

  componentDidLoad() {
    this.fetchData();
  }

  fetchData() {
    getCryptoData(this.apikey).then(data => {
      this.cryptoData = data;
    });
  }

  @Method()
  async refreshCryptoData() {
    this.fetchData();
  }

  @Listen('refreshCryptoData')
  listen(event) {
    console.log(event);
  }

  render() {
    return (
      <Host>
        <b>Crypto data on date: {new Date().toLocaleString()}</b>
        <crypto-table
          cryptoData={this.cryptoData}
          cryptoCurrencies={this.cryptoCurrencies}
        />
        <crypto-refresher onRefreshCryptoData={() => this.fetchData()} />
        <slot></slot>
      </Host>
    );
  }
}
