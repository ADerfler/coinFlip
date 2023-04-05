let listLength = 30

let ul = document.querySelector("ul")
document.querySelector("button").addEventListener("click", async () => {
    let result = await fetch('/flip')
    const jsonData = await result.json();

    let li = document.createElement("li")
    if (jsonData === "1") {
        li.appendChild(document.createTextNode("heads"))
    }
    else {
        li.appendChild(document.createTextNode("tails"))
    }
    console.log(ul.lastChild)
    if (ul.lastChild) {
        ul.lastChild.style.color = "black"
    }
    ul.appendChild(li)
    li.style.color = "red"

    console.log(Array.from(document.getElementsByTagName("li")))
    if (Array.from(document.getElementsByTagName("li")).length > listLength) {
        ul.removeChild(ul.firstChild)
    }
})