var playerlist=[]
var hasrun=true
if(hasrun){
  class targetlink{
    constructor(name){
      this.target="Unknown"
      this.name=name
      playerlist.push(this)
    }
  }
  let Abby = new targetlink("Abby");
  let Aixa = new targetlink("Aixa");
  let Alina = new targetlink("Alina");
  let Amber = new targetlink("Amber");
  let Arden = new targetlink("Arden");
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
  let Halsey = new targetlink("Halsey");
  let John = new targetlink("John");
  let Jonah = new targetlink("Jonah");
  let Joshua = new targetlink("Joshua");
  let Lenore = new targetlink("Lenore");
  let Leny = new targetlink("Leny");
  let Linden = new targetlink("Linden");
  let Logan = new targetlink("Logan");
  let Luciano = new targetlink("Luciano");
  let Luella = new targetlink("Luella");
  let Emma = new targetlink("Emma");
  let Madison = new targetlink("Madison");
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
  Abby.target = John;
  Aixa.target = Mhalik;
  Alina.target = Lindin;
  Amber.target = Jonah;
  Arden.target = Tristyn;
  Bella.target = Joshua;
  Bjorn.target = River;
  Chiara.target = Unknown;
  Cielo.target = Chiara;
  Clara.target = Ursula;
  Crenna.target = Crosby;
  Crosby.target = SilasK;
  Fern.target = Marie;
  Frances.target = Teri;
  Gavin.target = Halsey;
  Halsey.target = Lenore;
  John.target = Alina;
  Jonah.target = Luciano;
  Joshua.target = Clara;
  Lenore.target = Unknown;
  Leny.target = Wylder;
  Linden.target = Unknown;
  Logan.target = Crenna;
  Luciano.target = Abby;
  Luella.target = Soren;
  Emma.target = Aixa;
  Madison.target = Unknown;
  Marie.target = Gavin;
  Mhalik.target = SilasL;
  Noah.target = Unknown;
  River.target = Noah;
  SilasK.target = Luella;
  SilasL.target = Silja;
  Silja.target = Unknown;
  Soren.target = Emma;
  Teri.target = Bella;
  Tristyn.target = Amber;
  Ursula.target = Fern;
  Wylder.target = Cielo;
  hasrun=false
}
function isnotin(name, list){
  for (var t = 0; t < list.length; t++) {
    if (list[t]==name){
      return false;
    }
}
return true;
}
var targetlist=[]
var filler="|||||||||||||||||||||||||||||||||||"
function enter(){
  
  var i=0;
  var finished=[];
  var mainfinished=[];
  var pllength=playerlist.length;
  while (i<pllength-1){
      if (playerlist[i].target.name!="Unknown" && isnotin(playerlist[i].name, finished)){
        
        if (isnotin(playerlist[i].target.name, mainfinished)){
          
           
          targetlist.push(playerlist[i].name);
          targetlist.push("-->");
          targetlist.push(playerlist[i].target.name);
          finished.push(playerlist[i].target.name);
          mainfinished.push(playerlist[i].name);
          console.log(targetlist)
        }else{
          targetlist.splice(targetlist.indexOf(playerlist[i].target.name), 0, "-->");
          targetlist.splice(targetlist.indexOf(playerlist[i].target.name)-1, 0, playerlist[i].name);
          mainfinished.push(playerlist[i]).name;
        }
        
      }
      if(!(isnotin(playerlist[i].name, finished))){
        targetlist.splice(targetlist.indexOf(playerlist[i].name) + 1, 0, playerlist[i].target.name);
        targetlist.splice(targetlist.indexOf(playerlist[i].name) + 1, 0, "-->");
        finished.push(playerlist[i].target.name);
      }
      i++;
  }
  for (var c=0;c<targetlist.length; c++){
      if(targetlist[c]!="-->"){
        if (!(c%2==0)){
        targetlist.splice(c,0,filler);
        c++
      } 
      }
  }
  document.getElementById("text").innerText=targetlist;
  console.log(targetlist);


}
enter()
inputvalue=document.getElementById("input");
outputvalue=document.getElementById("output");
outputvalue2=document.getElementById("output2")
document.getElementById("button").addEventListener('click', function(event) {
  for(var i=0; i<playerlist.length; i++){
    if (inputvalue.value==playerlist[i].name){
      var possibleassasin=[];
      //finds the possible assasains
      for(var c=0; c<playerlist.length; c++){
        if (playerlist[c].target.name==inputvalue.value){
          possibleassasin.push(playerlist[c].name)
          c=playerlist.length+10
        }else{
          if(c==playerlist.length-1){
            for(var n=0; n<playerlist.length; n++){
              if(playerlist[n].target.name=="Unknown" && playerlist[n].name!=inputvalue.value){
                possibleassasin.push(playerlist[n].name)
              }
            }
            
            if(playerlist[i].target.name!="Unknown"){
              var firstperson=targetlist.indexOf(inputvalue.value)
              for(var j=0; j<targetlist.length; j++){
                console.log(targetlist[firstperson+j-1])
                if(targetlist[firstperson+j]==filler){
                  possibleassasin.splice(possibleassasin.indexOf(targetlist[firstperson+j-1]),1)
                  j=targetlist.length+10
                }
            }
          }
        }
      }
    }
          i=playerlist.length;
          outputvalue.innerText="possible assasains/confirmed assasain: "+possibleassasin
        /*
      //finds the possible targets
      var possibleassasin=[];
      for(var c=0; c<playerlist.length; c++){
        if (playerlist[c].target.name==inputvalue.value){
          possibleassasin.push(playerlist[c].name)
          c=playerlist.length+10
        }else{
          if(c==playerlist.length-1){
            for(var n=0; n<playerlist.length; n++){
              if(playerlist[n].target.name=="Unknown" && playerlist[n].name!=inputvalue.value){
                possibleassasin.push(playerlist[n].name)
              }
            }
            
            if(playerlist[i].target.name!="Unknown"){
              var firstperson=targetlist.indexOf(inputvalue.value)
              for(var j=0; j<targetlist.length; j++){
                console.log(targetlist[firstperson+j-1])
                if(targetlist[firstperson+j]==filler){
                  possibleassasin.splice(possibleassasin.indexOf(targetlist[firstperson+j-1]),1)
                  j=targetlist.length+10
                }
            }
          }
        }
      }
    }
          i=playerlist.length;
          outputvalue.innerText="possible assasains/confirmed assasain: "+possibleassasin
        
        */
    }else{
      if(i==playerlist.length-1){
      outputvalue.innerText="Enter a correct name, capitalized, not eliminated."
      }
    }
  }
});
