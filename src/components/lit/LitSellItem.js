import { LitElement, html, css } from 'lit';

class LitSellItem extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      imgSrc: { type: String },
      price: { type: Number },
      discount: { type: Number },
      rating: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'hola';
    this.imgSrc = '';
    this.price = '';
    this.discount = '';
    this.rating = '';
  }

  render() {
    return html`
      <div class="container">
      
        <div class="img-container">
          <img id="product-image" src=${this.imgSrc} alt="No Image" />
        </div>
      
        <h4 class=title>
          ${this.title}
        </h4>
      
        <div class="price-box">
          <span>
            <h3 class="sale-price">
              $${(this.price * (100 - this.discount) / 100).toLocaleString()}
            </h3>
            <h4 class="normal-price">
              $${this.price.toLocaleString()}
            </h4>
          </span>
      
          <span class="discount-tag">
            -${this.discount}%
          </span>
        </div>
      
        <span style="display:flex;align-items:center; gap:4px">
          <img class="morty" src="https://styles.redditmedia.com/t5_3bpra/styles/communityIcon_8l6jqwr58eb41.png"
            alt="mortys: " />
          <strong>
            ${this.rating}
          </strong>
        </span>
      
      </div>
    `;
  }

  static get styles() {
    return css`
    .container {
      background-color: white;
      border: 1px solid lightgray;
      border-radius: 8px;
      font-size: 12px;
      min-height: 45ch;
      margin: 0rem;
      padding: 1em 1em 0.25em;
      transition: 100ms linear;
      width: 25ch;
    }
    .container:hover {
      scale: 1.05;
    }
  
    img {
      max-height: 25ch;
      max-width: 30ch;
    }
    .img-container {
      align-items: center;
      display: flex;
      height: 25ch;
      justify-content: center;
      max-width: 100%;
    }
  
    .morty {
      height: 2em;
      margin: 0;
      transform: translateY(-2px);
    }
  
    .price-box {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1em;
    }
  
    .sale-price {
      color: tomato;
      margin: 0;
      width: fit-content;
    }
  
    .normal-price {
      color: gray;
      margin: 0;
      text-decoration: line-through;
      width: fit-content;
    }
  
    .discount-tag {
      align-items: center;
      background-color: tomato;
      border-radius: 4px;
      color: white;
      font-weight: bold;
      height: 50%;
      justify-content: center;
      padding: 4px;
      width: fit-content;
    }`;
  }

}

customElements.define('lit-sell-item', LitSellItem);
