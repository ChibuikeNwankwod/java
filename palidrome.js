function palidrome(word) {
  let rev = word.split("").reverse().join("");

  if (word == rev) {
    console.log("word is a palidrome");
  } else {
    console.log("word is not a palidrome");
  }
}

palidrome("raceca");
