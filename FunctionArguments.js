function Worker(name,age,lang) {
    this.name = name;
    this.age = age;
    this.lang = lang;
    this.work = function () {
        alert("working in process")
    }
}
var worker1 = new Worker("Devendra",20,["telugu","english"])
