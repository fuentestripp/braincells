let contentGridElement = document.getElementById("GridContent")

let jSonDatabase = [
  {
    "background_color" : "#",
    "title" : "my friends and I manipulate girls with niceness and concern in the hope that it will one day result in pity sex or a relationship out of guilt. They'll love us one day",
    "reasons" : "posted by sydthekidd, 3 hours ago"
  },
  {
    "background_color" : "#",
    "title" : "do you put women before yourself?",
    "reasons" : "posted by bigboyadam, 5 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "I would let a girl walk all over me",
    "reasons" : "posted by haileyyhirano, 7 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "I condemn the slander of any woman.",
    "reasons" : "posted by leslienopeee, 10 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "are you always trying to impress girls? because i find that i always am.",
    "reasons" : "posted by joemamma99, 12 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "have you bought belle delphine's bathwater yet???",
    "reasons" : "posted by trippfu, 17 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "have you followed belle delphine on twitter yet?",
    "reasons" : "posted by pootlovato, 17 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "are there instances where you say what a woman wants to hear because you want to be 'that dude?''",
    "reasons" : "posted by chelseabriggs, 20 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "do you praise women for exercising their options when dating but condemn men for doing it?",
    "reasons" : "posted by itzzcindy_, 1 day ago"

  },
  {
    "background_color" : "#",
    "title" : "I've found olivia cowherd on twitter! I think we have a future together?",
    "reasons" : "posted by timheyyy, 1 day ago"

  },
  {
    "background_color" : "#",
    "title" : "I compliment every girl on social media with the expectation of something in return. Nothing's come yet but I'm waiting patiently :)",
    "reasons" : "posted by pablopalko, 1 day ago"

  },
  {
    "background_color" : "#",
    "title" : "would you legitimately physically harm yourself if it meant an attractive girl would give you attention",
    "reasons" : "posted by tomhollandsrealgirlfriend, 1 day ago"

  },
  {
    "background_color" : "#",
    "title" : "I don't care if they condemn me for it, triple texting is very important.",
    "reasons" : "posted by papa_parker0, 2 day ago",

  },
  {
    "background_color" : "#",
    "title" : "simply put: we MUST put the hoes before the bros.",
    "reasons" : "posted by itzandyham, 2 day ago"

  },

]

for (var i=0; i< jSonDatabase.length; i++){
  createtheElement(jSonDatabase[i])
}

function createtheElement(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['background_color']
  newContentElement.classList.add("Items");

  let newContentHeading = document.createElement("H3")
  newContentHeading.classList.add("contentTitle");
  newContentHeading.innerHTML = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);


  let newContentReasons = document.createElement("P");
  newContentReasons.classList.add("reasoning");
  newContentReasons.innerHTML = incomingJSON['reasons'];
  newContentElement.appendChild(newContentReasons);

  contentGridElement.appendChild(newContentElement);
}
