//Kata 01
const congratulate = lenguage => { 
  const result = 
      lenguage == "Español" 
      ? "¡Feliz cumpleaños Pepita!" 
      : lenguage == "English" 
      ? "Happy birthday Pepita!" 
      : lenguage == "German" 
      ? "Alles Gute zum Geburtstag, Pepita" 
      : "🎂" ;
    return result
  }
  console.log(congratulate("Español"));
  console.log(congratulate("English"));
  console.log(congratulate("German"));
  console.log(congratulate("Français"));