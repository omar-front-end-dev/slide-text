const tabTitle = document.querySelectorAll(".tab");
const tabContent =document.querySelectorAll(".text--tab");


tabTitle.forEach((item) =>{
    item.addEventListener("click", () =>{
        removeClass(tabTitle);
        item.classList.add("active");
        let dataId = item.dataset.id;
        removeClass(tabContent);
        document.getElementById(dataId).classList.add("active");
    });
});

let removeClass = (element) =>{
   element.forEach((el) =>{
    el.classList.remove("active");
   })
};