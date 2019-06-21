
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab

    // Using the custom data attribute get the associated Item element
    this.itemElement =  document.querySelector('.tabs-item[data-tab="' + this.data + '"]')
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;

     this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    // this.itemElement.addEventListener('click', () => { this.select() })
    links[this.data -1].addEventListener('click', () => { this.select() })

  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    const arr = Array.from(links)
     arr.forEach(function(thing,idx) {
      links[idx].classList.remove('tabs-link-selected')
      // links[idx].classList.toggle('tabs-link-selected')
     })
    // Add a class named "tabs-link-selected" to this link
    // this.element
    links[this.data -1].classList.toggle('tabs-link-selected')
    // this.itemElement.classList.toggle('tabs-link-selected')
     // Call the select method on the item associated with this link
this.tabItem.select()
     
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
      this.element = element;
      this.data = element.dataset.tab
    }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    // Remove the class "tabs-item-selected" from each element

    Array.from(items).forEach((thing,idx) => {
      items[idx].classList.remove('tabs-item-selected')
    }
      )

      // Add a class named "tabs-item-selected" to this element
    //this.element;

   items[this.data - 1].classList.toggle('tabs-item-selected')
    // items[this.data - 1].classList.toggle('tabs-link-selected')
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/
const links = document.querySelectorAll(".tabs-link" )
 links.forEach(link => new TabLink(link))
const items = document.querySelectorAll(".tabs-item" )