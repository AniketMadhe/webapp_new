const nameOfuser=document.getElementById("nameOfuser");
const nameOfbook1=document.getElementById("nameOfbook1");
const nameOfauthor1=document.getElementById("nameOfauthor1");
const nameOfbook2=document.getElementById("nameOfbook2");
const nameOfauthor2=document.getElementById("nameOfauthor2");
const nameOfbook3=document.getElementById("nameOfbook3");
const nameOfauthor3=document.getElementById("nameOfauthor3");
const nameOfbook4=document.getElementById("nameOfbook4");
const nameOfauthor4=document.getElementById("nameOfauthor4");

function handleClick(){

    var CNName=document.getElementById("CName").textContent;
    var B1NName=document.getElementById("B1Name").textContent;
    var B2NName=document.getElementById("B2Name").textContent;
    var B3NName=document.getElementById("B3Name").textContent;
    var B4NName=document.getElementById("B4Name").textContent;
    var A1NName=document.getElementById("A1Name").textContent;
    var A2NName=document.getElementById("A2Name").textContent;
    var A3NName=document.getElementById("A3Name").textContent;
    var A4NName=document.getElementById("A4Name").textContent;
    
    console.log(B1NName);
    console.log(B2NName);
    console.log(B3NName);
    console.log(B4NName);

    nameOfuser.value=CNName;
    nameOfbook1.value=B1NName;
    nameOfbook2.value=B2NName;
    nameOfbook3.value=B3NName;
    nameOfbook4.value=B4NName;
    nameOfauthor1.value=A1NName;
    nameOfauthor2.value=A2NName;
    nameOfauthor3.value=A3NName;
    nameOfauthor4.value=A4NName;
   

    console.log(CNName);
   
    document.getElementById("cartFormSubmit").submit();
    


}