export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector(".minutes"),
            seconds: root.querySelector(".seconds"),
            control: root.querySelector(".timer-control-btn"),
            reset: root.querySelector(".timer-reset-btn")
        };

        this.interval = null;
        this.remainingSeconds = 0;

        this.el.control.addEventListener("click", () => {
            if (this.interval === null){
                this.start();
            } else {
                this.stop();
            }

        })

        this.el.reset.addEventListener("click", () => {
            const inputMinutes = prompt("enter number of minutes: ")
            
            if (inputMinutes) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            }
        })
    }


    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, '0');
        this.el.seconds.textContent = seconds.toString().padStart(2, '0');
    }

    updateInterfaceControls() {
        if(this.interval === null) {
            this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
            this.el.control.classList.add("timer-control-btn-start");
            this.el.control.classList.remove("timer-control-btn-pause");
        } else {
            this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
            this.el.control.classList.add("timer-control-btn-pause");
            this.el.control.classList.remove("timer-control-btn-start");
        }
    }

    start() {
        if (this.remainingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if(this.remainingSeconds === 0) {
                this.stop();
            }
        }, 1000)

        this.updateInterfaceControls();
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.updateInterfaceControls();
    }

    static getHTML() {
        return `
            <span class="minutes">00</span>
            <span class="colon">:</span>
            <span class="seconds">00</span>
            <button type="button" class="timer-control-btn">
                <span class="material-icons">
                    play_arrow
                </span>                            
            </button>
            <button type="button" class="timer-reset-btn">
                <span class="material-icons">
                    timer
                </span>                            
            </button>
        `
    }

}