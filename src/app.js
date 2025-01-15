function displayWebNames() {
  let pronouns = ["the", "our", "your"];
  let adjectives = ["great", "big", "small"];
  let nouns = ["jogger", "racoon", "ant"];
  let result = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        let webname = pronouns[i] + adjectives[j] + nouns[k] + ".com";

        result.push(webname);
      }
    }
  }

  let htmlList = "<ul>";
  for (let i = 0; i < result.length; i++) {
    htmlList += "<li>" + result[i] + "</li>";
  }
  htmlList += "</ul>";

  document.getElementById("web").innerHTML = htmlList;
}

displayWebNames();
