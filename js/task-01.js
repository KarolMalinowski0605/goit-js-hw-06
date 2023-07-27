
const items = document.querySelectorAll('li.item');
console.log('Number of categories:', items.length);

for (let i = 0; i < items.length; i++){

    const title = items[i].querySelector("h2").textContent;
    console.log( 'Category:' ,title);
    const allItems = items[i].querySelectorAll("li");
    
    const numberElements = allItems.length;
    console.log('Elements:',numberElements);

}





