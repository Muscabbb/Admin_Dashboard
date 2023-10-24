document.querySelector(".toggle-btn").addEventListener('click', () => {
    document.querySelector(".icon").classList.toggle("wrong");
    document.querySelector(".toggle-btn").classList.toggle("bg-eee");
    document.querySelector(".toggle-btn").classList.toggle("bg-blue");
    document.querySelector(".icon").classList.toggle("fa-check");
    document.querySelector(".icon").classList.toggle("fa-xmark");
    document.querySelector(".icon").classList.toggle("c-blue");
    document.querySelector(".icon").classList.toggle("c-text");

})





class niga{
    whats;
    niga(){
        this.whats = ["ie","jfa","jsa"];
        for(let i=0;i<this.whats.length;i++){
            console.log(this.whats[i])
        }
    }

}

let tester = new niga();

console.log(tester)