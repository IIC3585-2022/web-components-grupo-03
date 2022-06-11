class SellItem extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  toggleColor() {
    const hello = this.shadowRoot.querySelector('h1');
    hello.style.color = hello.style.color === 'blue' ? 'red' : 'blue';
  }

  connectedCallback() {
    this.shadowRoot.querySelector('h1').addEventListener('click', () => {
      this.toggleColor();
    });


    if ((this.name = this.getAttribute('name'))) {
      this.shadowRoot.querySelector('#name').innerHTML = this.name;
    }
  }

}
const template = document.createElement('template');
template.innerHTML = `
<h1>
Hola <slot id="name" name="name">Mundo</slot>!
</h1>


<style>
  h1 {
    border: 1px solid lightgray;
  }
</style>
`;



customElements.define('sell-item', SellItem);