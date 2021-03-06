class TodoList extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(todo_list_template.content.cloneNode(true));
    this.title;
    this.item1;
    this.item2;
    this.item3;
    this.prompt;
    this.item_count = 4;
  }

  get observedAttributes() {
    return ['title', 'item1', 'item2', 'item3', 'prompt'];
  }

  connectedCallback() {
    if ((this.title = this.getAttribute('title'))) {
      this.shadowRoot.getElementById('title').innerHTML = this.title;
    }
    if ((this.item1 = this.getAttribute('item1'))) {
      this.shadowRoot.getElementById('item1').innerHTML = this.item1;
    }
    if ((this.item2 = this.getAttribute('item2'))) {
      this.shadowRoot.getElementById('item2').innerHTML = this.item2;
    }
    if ((this.item3 = this.getAttribute('item3'))) {
      this.shadowRoot.getElementById('item3').innerHTML = this.item3;
    }
    if ((this.prompt = this.getAttribute('prompt'))) {
      this.shadowRoot.getElementById('prompt').innerHTML = this.prompt;
    }
    // give delete button delete function
    this.shadowRoot.querySelectorAll('.item-button').forEach(item => {
      item.addEventListener('click', () => {
        this.delete(item.id);
      });
    });

    // add item button
    this.shadowRoot.getElementById('add-item').addEventListener('click', () => {
      this.add_item(this.shadowRoot.querySelector('#new-item').value);
      this.shadowRoot.querySelector('#new-item').value = '';
    });
  }

  delete(id) {
    this.shadowRoot.getElementById(id).remove();
  }

  add_item(text) {
    if (text !== '') {
      // div item container
      this.item = document.createElement('div');
      this.item.classList.add('item');
      this.item.id = `${this.item_count}-todo`;
      // div p item
      this.p = document.createElement('p');
      this.p.classList.add('prompt-item');
      this.p.innerHTML = text;
      // button deleter
      this.button = document.createElement('button');
      this.button.classList.add('item-button');
      this.button.id = `${this.item_count}-todo`;
      this.button.innerHTML = 'Delete';
      this.button.addEventListener('click', () => {
        this.delete(this.button.id);
      });
      // apend nodes
      this.item.appendChild(this.p);
      this.item.appendChild(this.button);
      this.shadowRoot.querySelector('.items').appendChild(this.item);
      // increase item count
      this.item_count++;
    } else { alert('No trates de agregar un item vacio'); }
  }

}

const todo_list_template = document.createElement('template');
todo_list_template.innerHTML = /* html */`
  <div class="container">
    <h1 class=title>
      <slot id="title" name="title">ToDo-List</slot>
    </h1>
    <div class="items">
      <div class="item" id="1-todo">
        <p class="prompt-item">
          <slot id="item1" name="item1">First</slot>
        </p>
        <button id="1-todo" class="item-button" type="button">Delete</button>
      </div>
      <div class="item" id="2-todo">
        <p class="prompt-item">
          <slot id="item2" name="item2">Second</slot>
        </p>
        <button id="2-todo" class="item-button" type="button">Delete</button>
      </div>
      <div class="item" id="3-todo">
        <p class="prompt-item">
          <slot id="item3" name="item3">Third</slot>
        </p>
        <button id="3-todo" class="item-button" type="button">Delete</button>
      </div>
    </div>
    <div class="add-div">
      <h3 class="prompt-title" >
        <slot id="prompt" name="prompt">new-item</slot>:
      </h3>
      <input type="text" id="new-item" placeholder="new-item" class="add-item-input" >
      <button id="add-item" class="add-button" type="button">Add</button>
    </div>
  </div>
  <style>
    .container {
      background-color: white;
      border: 1px solid lightgray;
      border-radius: 8px;
      font-size: 12px;
      margin: 0rem;
      padding: 1em 1em 0.25em;
      transition: 100ms linear;
      width: 60ch;
      height:auto;
      position: relative;
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
    .title {
      font-size: 2em;
      font-weight: bold;
      margin: 0;
      padding: 0.5em;
      word-wrap: break-word;
      padding: 5px;
    }
    .items {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
    }
    .item {
      align-items: center;
      border-bottom: 1px solid lightgray;
      display: flex;
      height:auto;
      justify-content: space-between;
      margin: 0;
      padding: 0.5em;
    }
    .item:hover {
      background-color: lightgray;
    }
    .item:last-child {
      border-bottom: none;
    }
    .prompt-item {
      font-size: 1em;
      margin: 0;
      width: 80%;
      word-wrap: break-word;
      padding: 10px;
    }
    .item-button {
      background-color: lightgray;
      cursor: pointer;
      margin: 0;
      padding: 0;
    }
    .item-button:hover {
      background-color: darkgray;
    }
    .add-div {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 2ch;
      padding: 0.5em;
      bottom: 0;
      position: relative;
    }
    .add-button {
      background-color: lightgray;
      cursor: pointer;
      margin: 0;
      padding: 0;
      width: 20%;
    }
    .add-button:hover {
      background-color: darkgray;
    }
    .add-item-input {
      margin: 2ch;
      padding: 5px;
      width: 60%;
      ord-wrap: break-word;
    }
    .prompt-title {
      margin: 0;
      width: 20%;
      word-wrap: break-word;
    }
  </style>
  `;

customElements.define('todo-list', TodoList);
