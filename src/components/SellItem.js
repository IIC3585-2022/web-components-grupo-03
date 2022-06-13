class SellItem extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if ((this.imgSrc = this.getAttribute('imgSrc'))) {
      this.shadowRoot.getElementById('product-image').setAttribute('src', this.imgSrc);
    }
    if ((this.title = this.getAttribute('title'))) {
      this.shadowRoot.getElementById('title').innerHTML = this.title;
    }
    if ((this.price = this.getAttribute('price'))) {
      const discount = this.getAttribute('discount') | 0;
      this.shadowRoot.getElementById('sale-price').innerHTML = (this.price * (100 - discount) / 100).toLocaleString();
      this.shadowRoot.getElementById('normal-price').innerHTML = (this.price).toLocaleString();
      this.shadowRoot.getElementById('discount-tag').innerHTML = discount;
    }
    if ((this.rating = this.getAttribute('rating'))) {
      this.shadowRoot.getElementById('rating').innerHTML = this.rating;
    }
  }

}
const template = document.createElement('template');
template.innerHTML = /* html */`
<div class="container">

  <div class="img-container">
    <img id="product-image" alt="No Image" />
  </div>

  <h4 class=title>
    <slot id="title" name="title">Mundo</slot>
  </h4>

  <div class="price-box">
    <span>
      <h3 class="sale-price">
        $<slot id="sale-price" name="salePrice"></slot>
      </h3>
      <h4 class="normal-price">
        $<slot id="normal-price" name="normalPrice"></slot>
      </h4>
    </span>

    <span class="discount-tag">
      -<slot id="discount-tag" name="discountTag">0</slot>%
    </span>
  </div>

  <span style="display:flex;align-items:center; gap:4px">
    <img
      class="morty"
      src="https://styles.redditmedia.com/t5_3bpra/styles/communityIcon_8l6jqwr58eb41.png"
      alt="mortys"
    />
    <strong><slot id="rating" name="rating">0</slot></strong>
  </span>

</div>

<style>
  .container {
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 8px;
    font-size: 12px;
    height: 45ch;
    margin: 0rem;
    overflow-y: scroll;
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
  }

</style>
`;

customElements.define('sell-item', SellItem);
