var playerlist=[]
class targetlink{
  constructor(name){
    this.target=null
    this.name=name
    playerlist.push(this)
  }
}
let Abby = new targetlink("Abby");
let Aixa = new targetlink("Aixa");
let Alina = new targetlink("Alina");
let Amber = new targetlink("Amber");
let Arden = new targetlink("Arden");
let Asher = new targetlink("Asher");
let Bella = new targetlink("Bella");
let Bjorn = new targetlink("Bjorn");
let Chiara = new targetlink("Chiara");
let Cielo = new targetlink("Cielo");
let Clara = new targetlink("Clara");
let Crenna = new targetlink("Crenna");
let Crosby = new targetlink("Crosby");
let Fern = new targetlink("Fern");
let Frances = new targetlink("Frances");
let Gavin = new targetlink("Gavin");
let Grace = new targetlink("Grace");
let Gracie = new targetlink("Gracie");
let Halsey = new targetlink("Halsey");
let John = new targetlink("John");
let Jonah = new targetlink("Jonah");
let Joshua = new targetlink("Joshua");
let Kaleb = new targetlink("Kaleb");
let Kaydence = new targetlink("Kaydence");
let Kepler = new targetlink("Kepler");
let Lenore = new targetlink("Lenore");
let Leny = new targetlink("Leny");
let Lexi = new targetlink("Lexi");
let Linden = new targetlink("Linden");
let Logan = new targetlink("Logan");
let Luciano = new targetlink("Luciano");
let Luella = new targetlink("Luella");
let Lynn = new targetlink("Lynn");
let Mdison = new targetlink("Mdison");
let Marie = new targetlink("Marie");
let Mhalik = new targetlink("Mhalik");
let Noah = new targetlink("Noah");
let River = new targetlink("River");
let SilasK = new targetlink("SilasK");
let SilasL = new targetlink("SilasL");
let Silja = new targetlink("Silja");
let Soren = new targetlink("Soren");
let Teri = new targetlink("Teri");
let Tristyn = new targetlink("Tristyn");
let Ursula = new targetlink("Ursula");
let Wylder = new targetlink("Wylder");
let Unknown= new targetlink("Unknown")
Abby.target = Unknown;
Aixa.target = Unknown;
Alina.target = Unknown;
Amber.target = Jonah;
Arden.target = Tristyn;
Asher.target = Unknown;
Bella.target = Unknown;
Bjorn.target = River;
Chiara.target = Unknown;
Cielo.target = Chiara;
Clara.target = Unknown;
Crenna.target = Unknown;
Crosby.target = Unknown;
Fern.target = Unknown;
Frances.target = Unknown;
Gavin.target = Grace;
Grace.target = Unknown;
Gracie.target = Unknown;
Halsey.target = Unknown;
John.target = Unknown;
Jonah.target = Unknown;
Joshua.target = Unknown;
Kaleb.target = Unknown;
Kaydence.target = Unknown;
Kepler.target = Unknown;
Lenore.target = Unknown;
Leny.target = Unknown;
Lexi.target = Unknown;
Linden.target = Unknown;
Logan.target = Unknown;
Luciano.target = Unknown;
Luella.target = Unknown;
Lynn.target = Unknown;
Mdison.target = Unknown;
Marie.target = Gavin;
Mhalik.target = Unknown;
Noah.target = Unknown;
River.target = Unknown;
SilasK.target = Unknown;
SilasL.target = Unknown;
Silja.target = Unknown;
Soren.target = Unknown;
Teri.target = Unknown;
Tristyn.target = Amber;
Ursula.target = Unknown;
Wylder.target = Unknown;

function isnotin(name, list){
  for (var t = 0; t < list.length; t++) {
    if (list[t]==name){
      return false;
    }
}
return true;
}
function enter(){
  var targetlist=[]
  var i=0;
  var finished=[];
  var pllength=playerlist.length;
  while (i<pllength-1){
    console.log(targetlist)
      if (playerlist[i].target.name!="Unknown" && isnotin(playerlist[i].name, finished)){

        targetlist.push(playerlist[i].name);
        targetlist.push("-->");
        targetlist.push(playerlist[i].target.name);
        finished.push(playerlist[i].target.name);
      }
      if(!(isnotin(playerlist[i].name, finished))){
        targetlist.splice(targetlist.indexOf(playerlist[i].name) + 1, 0, playerlist[i].target.name);
        targetlist.splice(targetlist.indexOf(playerlist[i].name) + 1, 0, "-->");
      }
      i++;
  }
  document.write(document.getElementById("text").innerHTML)
  console.log(targetlist);
}
enter()
