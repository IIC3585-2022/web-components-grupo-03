class SellItem extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  toggleColor(textElement) {
    textElement.style.color = textElement.style.color === 'blue' ? 'red' : 'blue';
  }

  connectedCallback() {
    const title = this.shadowRoot.querySelector('.title');
    title.addEventListener('click', () => this.toggleColor(title));

    if ((this.img_src = this.getAttribute('img_src'))) {
      this.shadowRoot.querySelector('img').setAttribute('src', this.img_src);
    }
    if ((this.name = this.getAttribute('title'))) {
      this.shadowRoot.querySelector('#title').innerHTML = this.name;
    }
  }

}
const template = document.createElement('template');
template.innerHTML = /* html */`
<div class="container">
  <img alt="Failed to load img" />

  <h4 class=title>
  Hola <slot id="title" name="title">Mundo</slot>!
  </h4>

</div>

<style>
  .container {
    border: 1px solid lightgray;
    border-radius: 8px;
    font-size: 12px;
    margin: 1rem;
    transition: 100ms ease-out;
    width: 30ch;
  }
  .container:hover {
    scale: 1.05;
  }
  img {
    max-width: 30ch;
  }
</style>
`;



customElements.define('sell-item', SellItem);