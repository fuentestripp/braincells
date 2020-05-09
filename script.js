let contentGridElement = document.getElementById("GridContent")

let jSonDatabase = [
  {
    "background_color" : "#",
    "title" : "i don't care if it sounds dense, women must be solely viewed as sex objects.",
    "reasons" : "posted by iamlegend, 1 hour ago"
  },

  {
    "background_color" : "#",
    "title" : "do you believe you are iredeemably ugly too?",
    "reasons" : "posted by sclumptuuuous, 1 hour ago"

  },
  {
    "background_color" : "#",
    "title" : "I refuse to have sexual or romantic relationships due to my ugliness.",
    "reasons" : "posted by bluesloth_724, 2 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "I don't envy these people, I directly  oppose men who have sex with lots of women while I have none. I don't envy them.",
    "reasons" : "posted by figmaman, 2 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "Women do not have a sense of humor.",
    "reasons" : "posted by slinkydog21, 3 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "I have come to the conclusion after years of research that girls will only date you if you are above 6 feet.",
    "reasons" : "posted by bigtimepanda, 5 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "will girls will only date me if i'm rich?",
    "reasons" : "posted by pigglett4, 7 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "I think it's healthy to spend the entirety of your life online. You get more experiences of life through here.",
    "reasons" : "posted by lyfe, 9 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "I love to direct the hate I have for myself towards women because that's what they told me to do on reddit and 4chan?",
    "reasons" : "posted by damaged_goods49, 12 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "don't listen to anything anyone else tells you, penis size is all that matters in a man.",
    "reasons" : "posted by achensuxx, 18 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "I seek to harm others as a result of your insecurities amplified on reddit and 4chan.",
    "reasons" : "posted by itstreasonthen, 18 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "I have considered committing a serious crime inspired by my feelings towards women.",
    "reasons" : "posted by simp4luigi, 22 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "I am unaware of the fact that I are of the lowest levels of human beings in society.",
    "reasons" : "posted by epicfighter77, 23 hours ago"

  },
  {
    "background_color" : "#",
    "title" : "I will refuse to change out of a misplaced sense of pride for who I am, mixed with anger towards 'the system' that has rigged the game against people like me.",
    "reasons" : "posted by m4d0nn4plzch0k3m3, 1 day ago"

  },
  {
    "background_color" : "#",
    "title" : "have you ever in your life used the word foid?",
    "reasons" : "posted by mareysue, 1 day ago"

  },
  {
    "background_color" : "#",
    "title" : "are you a proponent of politics being out of memes and gaming?",
    "reasons" : "posted by panfried_shrimp, 1 day ago"

  },
  {
    "background_color" : "#",
    "title" : "did you build your political ideaology through meme culture and youtube highlights 'owning liberals?'",
    "reasons" : "posted by shlingshlong127, 1 day ago"

  },
  {
    "background_color" : "#",
    "title" : "do you idolize the joker because he is a toxic human being, because I do. All while purposely ignoring the fact that he both loses and is an outcast from society.",
    "reasons" : "posted by bigspork_gang, 1 day ago"

  },
  {
    "background_color" : "#",
    "title" : "I hide the fact that I am not seeking a mate, but rather full male supremacy as a result of my insecurities.",
    "reasons" : "posted by XXXDeliciousXXX, 1 day ago"

  },
  {
    "background_color" : "#",
    "title" : "even if there was male supremacy I'd still be too much of an introverted piece of shit spewing hate on a computer, hiding in my parents' basement, to ever succeed in any aspect of life. but I don't care. women are trash.",
    "reasons" : "posted by iamKillerxxx, 2 days ago"

  },
  {
    "background_color" : "#",
    "title" : "do you enjoy the witcher 3?",
    "reasons" : "posted by iamKillerxxx, 3 days ago"
  },
  {
    "background_color" : "#",
    "title" : "While being band together by depression, I love that this community refuses to look inward and rather rally behind a sense of entitlement and violence.",
    "reasons" : "posted by kateuptonsleftboob, 4 days ago"
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
