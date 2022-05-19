document.body.innerHTML=`<div class="container1">
<h1>Find Breweries</h1>

</div>
<input type="text" placeholder="search brewery by name">
<button onclick="search()">Search</button>
<div id="mainContainer" class="container2"></div>
`;





const  getData=async () =>{
    try {
     const data=await fetch("https://api.openbrewerydb.org/breweries");
     const brewerys=await data.json();
      brewerys.forEach((brewery)=>{
      console.log(brewery);
      displayData(brewery);
    })
   } catch (error) {
    console.log(error);
   }
}

getData();





const  search=async () =>{
  try {
   const data=await fetch("https://api.openbrewerydb.org/breweries");
   const brewerys=await data.json();
   let value=document.querySelector("input").value
   document.querySelector(".container2").innerHTML="";
   for(obj of brewerys){
    let param=(obj.name).toLowerCase();
    console.log(param,value)
    if(param.includes(value)){
        
        displayData(obj)
    }
   } 
  }catch (error) {
    console.log(error);
   }
}




const displayData=(obj)=>{
    let name = obj.name;
    let type = obj.brewery_type
    let adress = obj.street;
    let phone = obj.phone;
    let visit = obj.website_url;
    let imc = document.createElement("div");
    imc.setAttribute("class","innermostconatiner");
    imc.innerHTML=`
        <h3>${name}</h3>
        <p>Type:${type}</p>
        <p>Address:${adress}</p>
        <p>Phone:${phone}</p>
        <p>Visit:${visit}</p>
    `
    document.querySelector(".container2").append(imc);
}



