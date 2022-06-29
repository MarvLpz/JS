const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="innerCode/king.css" />
    <div class="breed">Breed: <p></p></div>
    <div class="age">Age: <p></p></div>
    <button id="alertID">Alert</button>
`;

class CustomElement extends HTMLElement {
    constructor() {
        super();// The super keyword in JavaScript acts as a reference variable to the parent class. It is mainly used when - 
                        //we want to access a variable, method, or constructor in the base class from the derived class.
        //let shadow = this.attachShadow({mode: 'open'}); //use shadow variable as alternative to this.shadowRoot
        this.attachShadow({mode: 'open'}); // separates inside style to outside style? open means that you can access the shadow DOM using JavaScript written in the main page context
        this.shadowRoot.appendChild(template.content.cloneNode(true)); // get content of that template, clone it and append to our shadow root
    }

    static get observedAttributes() { //this is a builtinmethod. Which attributes to notice change for is specified in a static get observedAttributes method. used for attributechangedcallback
        //probably this method is automatically loaded that why the attributeChangedCallback was triggered?
        return ["name","age"];
    }

    attributeChangedCallback(name, oldValue, newValue) { //called when attribute is modified, added, deleted
        this.shadowRoot.querySelector(".breed p").innerText = this.getAttribute("name");
        this.shadowRoot.querySelector(".age p").innerText = this.getAttribute("age");
    }

    toggleInfo = () => {
        alert("Button Clicked");
    };

    connectedCallback() {//called when everytime element is inserted into DOM. disconnectedCallback() is when removed
        this.shadowRoot.querySelector("#alertID").addEventListener('click', this.toggleInfo);
    }
}

//window.customElements.define('custom-element', CustomElement);

export default CustomElement; //make this js reusable by other js file. should be same name as class