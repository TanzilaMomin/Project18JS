const data=
[
    {
        name:"janvi",
        city:"Hyderabad",
        age:25
    },
    {
        name:"Mohan",
        city:"Pune",
        age:30
    },
    {
        name:"Shyam",
        city:"Hyderabad",
        age:21
    },
    {
        name:"Madhav",
        city:"Mumbai",
        age:25
    },
    {
        name:"Tabish",
        city:"Hyderabad",
        age:27
    },
    {
        name:"Riya",
        city:"Bangalore",
        age:32
    },
    {
        name:"Talha",
        city:"Pune",
        age:29
    },
    {
        name:"Tanvir",
        city:"Hyderabad",
        age:36
    },


];
const mainDiv=document.getElementById("main");

const generateComponent=(curr)=>{
    const divComp=document.createElement("div");
    divComp.setAttribute("class","comp");
    const title = document.createElement("h3");
    title.innerText=curr.name;
    
    const city=document.createElement("h3");
    city.innerText=curr.city;

    const age=document.createElement("h3");
    age.innerText=curr.age;
    
    divComp.appendChild(title);
    divComp.appendChild(city);
    divComp.appendChild(age);

    mainDiv.appendChild(divComp);
}
data.forEach((item)=>{
    generateComponent(item)
})
