const items = document.querySelectorAll(".item")

console.log("Number of categories:", items.length)

const categories = items.forEach(item =>{
    console.log("Category:", document.querySelector("h2").textContent);
console.log("Elements:", item.querySelectorAll("li").length)})
    
