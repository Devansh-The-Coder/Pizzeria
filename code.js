menu_list_array = ["Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Tikka Pizza", "Deluxe Veggie Pizza", "Veg Extravanza Pizza"]
function getMenu() {
    var htmlData = "<ol class = 'menulist'>"
    menu_list_array.sort()
    for (let index = 0; i < menu_list_array.length; index++) {
       htmlData = htmlData + '<li>' + menu_list_array[i] + '</li>'
        
    }
    htmlData=htmlData+"</ol>"
    document.getElementById("display_menu").innerHTML = htmlData;
}
function addItem() {
    var htmlData ; 
    var item = document.getElementById("add_menu").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmlData = "<section class = 'cards'>"
    for (let index = 0; index < menu_list_array.length; index++) {
        const element = array[index];
        htmlData = htmlData+"<div class='card' img src = 'pizzaIng.png'>+menu_list_array </div>"
    }
    htmlData = htmlData + "</ol>"
    document.getElementById("display added menu").innerHTML = htmlData;
}