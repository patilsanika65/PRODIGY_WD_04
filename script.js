let titlelinks = document.querySelector('.title-links');
let  titlecontents = document.querySelector('.title-contents');

function opentab(tabname){
    for( titlelink of titlelinks)
    {
        titlelink.classList.remove("active-link");
    }
    for(titlecontent of titlecontents)
    {
        titlecontent.classList.remove("active-tab");
    }

}