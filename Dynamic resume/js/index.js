 function jsonFile(file,callback){
     var ajaxCall=new XMLHttpRequest();
     ajaxCall.overrideMimeType("application/json");
     ajaxCall.open("GET",file,true);
     ajaxCall.onreadystatechange=function(){
         if(ajaxCall.readyState === 4 && ajaxCall.status=="200"){
             callback(ajaxCall.responseText);
         }
     }
     ajaxCall.send(null);
 }

jsonFile("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    details(data.details);
})

var body=document.querySelector("#root");
console.log(body);
var main=document.createElement("section");
main.classList.add("container");
body.appendChild(main);

var art1=document.createElement("article");
art1.setAttribute("class","article1");
main.appendChild(art1);

var image=document.createElement("img");
image.src="images/dowmload1.jpg";
image.alt="Profile Image";
art1.appendChild(image);


function details(mydetails){
    var h2=document.createElement("h2");
    h2.textContent=mydetails.name;
    h2.style.color="red";
    art1.appendChild(h2);
    var mail=document.createElement("h4");
    mail.textContent=mydetails.email;
    art1.appendChild(mail);
    var mobile=document.createElement("h4");
    mobile.textContent=mydetails.num;
    art1.appendChild(mobile);
}

var art2=document.createElement("article");
art2.setAttribute("class","article2");
main.appendChild(art2);



 
 
 
 
 
 
 
 
 /*  (
        function(){
                 function filesGetting(file,callback){
                     var ajaxCall=new XMLHttpRequest();
                     ajaxCall.overrideMimeType("aplication/json");
                     ajaxCall.open("GET",file,true);
                     ajaxCall.onreadystatechange=function(){                
                         if(ajaxCall.readyState===4 && ajaxCall.status=="200"){
                             callback(ajaxCall.responseText);
                             console.log(ajaxCall.status.responseText);
        
                         }
                     }
                     ajaxCall.send(null);
        
                 }
                 filesGetting("data.json",function(jsondata){
                     var data=JSON.parse(jsondata);
                     console.log(data);
                    
        
                 })
             }
         ) */
  
    
    /*var body=document.getElementById("root");
        console.log(body);
        var main=document.createElement("section");
        main.classList.add("main");
        //console.log(main);
        body.appendChild(main);
        var article1=document.createElement("article");
        article1.setAttribute("class","article1");
        //console.log(article1);
        main.appendChild(article1);
        var image=document.createElement("img");
        image.src="images/dowmload1.jpg";
        image.alt="Profile Image";
        article1.appendChild(image);
        article1.appendChild(document.createElement("hr"));
        var name1=document.createElement("h2");
        name1.textContent="Ashika Kintali";
        article1.appendChild(name1);
        var email=document.createElement("h4");
        email.textContent="ashikakrishan1810@gmail.com";
        article1.appendChild(email);
        var phnum=document.createElement("h4");
        phnum.textContent="7075575406";
        article1.appendChild(phnum);*/
        /* this is article2-----------------------------------------
        /*var article2=document.createElement("article");
        article2.setAttribute("class","article2");
        //console.log(article2);
        main.appendChild(article2);
        var name2=document.createElement("h2");
        name2.textContent="Career Objective:";
        article2.appendChild(name2);*/

