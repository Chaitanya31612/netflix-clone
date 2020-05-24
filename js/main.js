const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border 
    this.classList.add('tab-border');
    
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    
    // add show class
    tabContentItem.classList.add('show');

} 
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

// Listen to tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));



