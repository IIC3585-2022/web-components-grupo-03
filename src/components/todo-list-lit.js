import { html, css, LitElement } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

class TodoListLit extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      item1: { type: String },
      item2: { type: String },
      item3: { type: String },
      promt: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Todo List';
    this.item1 = '';
    this.item2 = '';
    this.item3 = '';
    this.promt = 'Add Task';
    this.item_count = 4;
  }

  render() {
    return html`
    <div class="container">
    <h1 class=title>
      TODOLIST
    </h1>
    <div class="items">
      <div class="item" id="1-todo">
        <p class="prompt-item">
          FIRST ITEM
        </p>
        <button id="1-todo" class="item-button" type="button">Delete</button>
      </div>
      <div class="item" id="2-todo">
        <p class="prompt-item">
          SECOND ITEM
        </p>
        <button id="2-todo" class="item-button" type="button">Delete</button>
      </div>
      <div class="item" id="3-todo">
        <p class="prompt-item">
          THIRD ITEM
        </p>
        <button id="3-todo" class="item-button" type="button">Delete</button>
      </div>
    </div>
    <div class="add-div">
      <h3 class="prompt-title" >
        NEW ITEM:
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
  }

}

customElements.define('todo-list-lit', TodoListLit);
