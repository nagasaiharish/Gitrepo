fetch("data.json")
    .then((response)=>{
    return response.json();
    })
    .then((data)=>{
    //console.log(data);
    display_info(data.basics);
    })


var bodyElement=document.querySelector("#root");
function display_info(info){
    
    var card=document.createElement("div");
    card.classList.add("card");
    bodyElement.append(card);

    let heading=document.createElement("h1");
    heading.textContent=info.name;
    bodyElement.append(card);
    card.append(heading);

    let line=document.createElement("hr");
    card.append(line);

    let line1=document.createElement("h2");
    line1.textContent=info.role;
    card.append(line1);

    let line2=document.createElement("a");
    line2.href="mailto"+info.Email;
    line2.textContent=info.Email;
    card.append(line2);

    let bk=document.createElement("br");
    card.append(bk);
    let bk1=document.createElement("br");
    card.append(bk1);

    let line3=document.createElement("a");
    line3.href="tel:"+info.mobile
    line3.textContent=info.mobile;
    card.append(line3);

    let line4=document.createElement("h2");
    line4.textContent=info.Education.degree;
    card.append(line4);

    var button=document.createElement("a");
    button.textContent="View profile";
    button.classList.add("btn");
    card.append(button)
}
