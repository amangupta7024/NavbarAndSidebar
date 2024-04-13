
function method(){
    console.log("heloo");
    let sidebar = document.querySelector(".sidebar");
    let content = document.querySelector(".content");
    
    //write the logic if the side bar sidebar has close class then content.style.width=100%;
    if(sidebar.classList.contains('close')){
        content.style.left='290px'
    }
    else{
        content.style.left='88px';
    }

    //else part

    sidebar.classList.toggle("close");
}