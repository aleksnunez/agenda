export default class Agenda {
    constructor(root) {
        root.innerHTML = Agenda.getHTML();

        this.el = {
            items: root.querySelector(".item-container"),
            add: root.querySelector(".add-item-btn")
        };

        this.listItem = ""

        this.el.add.addEventListener("click", () => {
            const inputItem = prompt("enter agenda item: ")
            
            
            let item = document.createElement('li')
            item.appendChild(document.createTextNode(inputItem))

            if(inputItem){
                this.listItem = item
                this.updateList()
            }
            
        })


    }

    updateList() {
        this.el.items.append(this.listItem);
    }
    

    static getHTML() {
        return `
        <ol class="item-container">
        </ol>
        <button type="button" class="add-item-btn">
        <span class="material-icons">add_circle</span>
        </button>
        `
    }
}