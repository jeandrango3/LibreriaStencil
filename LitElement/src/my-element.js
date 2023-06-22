import { LitElement, html } from "lit-element";

export class MyElement extends LitElement{
    render() {
        return html`
        <style>
            .litElement{
                background-color: #1E1E1E;
                text-align: center;
                padding: 10px;
            }
        </style>
        <div class="litElement">
          <h2>LIT-ELEMENT</h2>
          <p>Esto es un componente creado con LitElement</p>
        </div>
        `;
      }
}

customElements.define("my-element", MyElement);