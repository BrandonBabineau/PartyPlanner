const cohortName = "2310-fsa-et-web-pt-sf-b-babineau";
const apiURL =`https://fsa-crud-2aa9294fe819.herokuapp.com/api/${cohortName}/events`;

const form = document.querySelector("#eventForm");
const eventListSection = document.getElementById("eventsSection")

//data from server will be stored 
const state ={
    partyEvents: [],
}

getData(); 

async function getData (){
    const apiCall = await fetch(apiURL);
    const toJson = await apiCall.json();
    state.partyEvents = toJson.data;

    console.log(toJson.data);
}

//function to update DOM w/list of events

function updateDOM(){
    state.partyEvents.forEach(partyEvent =>{
    eventListSection.innerHTML += `${partyEvents.name}`;
    });
}

//function to post data from form to server



//function to delete data from server


