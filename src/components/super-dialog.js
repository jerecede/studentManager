export default class SuperDialog extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.style();
        this.render()
    }

    style(){
        // const style = document.createElement('style');
        // style.innerText = `
        //     .card{
        //         border-radius: 8px;
        //         border: solid 1px #313131;
        //         padding: 8px;
        //         display: flex;
        //         flex-direction: column;
        //         align-items: center;
        //     }
        // `
        // this.shadow.appendChild(style);
    }

    render(){

        const dialog = document.createElement('dialog');
        dialog.setAttribute('id', 'dialog');

        dialog.innerHTML = `
        <form id="form">
            <label for="name">Nome:</label>
            <input type="text" name="name" id="name">
            <label for="yob">Anno di nascita:</label>
            <input type="number" name="yob" id="yob">
        </form>
        <button id="cancel-btn">cancella</button>
        <button id="ok-btn">ok</button>
        `
        this.shadow.appendChild(dialog);
    }

    showModal(){
         const dialog = this.shadowRoot.querySelector('#dialog');
         dialog.showModal()
    }
}

customElements.define('super-dialog', SuperDialog)