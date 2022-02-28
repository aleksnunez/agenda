export default class Objective {
    constructor(root) {
        root.innerHTML = Objective.getHTML();

        this.el = {
            add: root.querySelector(".add-objective-btn"),
            obj: root.querySelector(".objective-text")
            
        }
        this.interval = null;
        this.objectiveInput = ""

        this.el.add.addEventListener("click", () => {
            const inputObj = prompt("enter the lesson objective:")

            let objective = document.createElement("h3")
            objective.appendChild(document.createTextNode(inputObj))

            if(inputObj){
                this.objectiveInput = objective
                this.updateObjective()

            }
        })


    }

    updateObjective(){
        this.el.obj.append(this.objectiveInput)
    }

    


    static getHTML() {
        return`
        <div class="objective-text">
        </div>
        <button class="add-objective-btn">
            <span class="material-icons">
                edit
            </span>
        </button>
        `
    }

}