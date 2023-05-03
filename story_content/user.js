function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6IPZDtxAGuK":
        Script1();
        break;
      case "5n0nZfh0qbi":
        Script2();
        break;
      case "5qYIgDLCQhH":
        Script3();
        break;
      case "6c3Fe6zEljD":
        Script4();
        break;
      case "5vpWshu72OI":
        Script5();
        break;
      case "5cSusCAocjU":
        Script6();
        break;
      case "6SV6j938qyV":
        Script7();
        break;
      case "6hpZNxO9M08":
        Script8();
        break;
      case "5mNEznXVVWH":
        Script9();
        break;
      case "5lBdVF2lUoN":
        Script10();
        break;
      case "6eVzLoxA5k2":
        Script11();
        break;
      case "5vwJ61YoQkT":
        Script12();
        break;
      case "646SfQlj6O6":
        Script13();
        break;
      case "5oP3WSU0PV6":
        Script14();
        break;
      case "681vCcBnEvB":
        Script15();
        break;
      case "6dQVZQRTpRj":
        Script16();
        break;
      case "69cLA1bs1kK":
        Script17();
        break;
      case "67r3phFWSI0":
        Script18();
        break;
      case "6JiGBweYMMl":
        Script19();
        break;
      case "6kGC2rAffp8":
        Script20();
        break;
      case "6fdvPeq5q5y":
        Script21();
        break;
      case "5mqg7hpwidN":
        Script22();
        break;
      case "6mx1nX1g3fc":
        Script23();
        break;
  }
}

function Script1()
{
  var player=GetPlayer();
player.SetVar('ExternalSoundLoaded', true);

var head = document.getElementsByTagName('head')[0];

var HowlerScript = document.createElement('script');
HowlerScript.src = 'story_content/external_files/howler.min.js';
HowlerScript.type = 'text/javascript';
head.appendChild(HowlerScript);

var ExternalSoundScript = document.createElement('script');
ExternalSoundScript.src = 'story_content/external_files/ep1.js';
ExternalSoundScript.type = 'text/javascript';
head.appendChild(ExternalSoundScript);





}

function Script2()
{
  playIntro();
}

function Script3()
{
  playCellule();

}

function Script4()
{
  stopCellule();
stopCouloir();
stopArchives();
stopAdrenalineLong();
}

function Script5()
{
  playCellule();
stopCouloir();
}

function Script6()
{
  stopCellule();
playCouloir();
stopIntro();
playSuspense();
}

function Script7()
{
  stopCellule();
playCouloir();
}

function Script8()
{
  playCellule();
stopCouloir();
}

function Script9()
{
  playCellule();
stopCouloir();
}

function Script10()
{
  playCellule();
stopCouloir();
}

function Script11()
{
  stopCouloir();
playFeu();
}

function Script12()
{
  playAdrenaline();
stopSuspense();
}

function Script13()
{
  stopFeu();
}

function Script14()
{
  stopFeu();
}

function Script15()
{
  stopAdrenaline();
playNostalgie();
}

function Script16()
{
  stopCellule();
stopFeu();
stopAdrenaline();
stopNostalgie();
playCouloir();
playSuspense();
}

function Script17()
{
  stopCellule();
stopCouloir();
stopAdrenaline();
stopSuspense();

}

function Script18()
{
  stopCellule();
stopCouloir();
stopAdrenaline();
stopSuspense();
playArchives();
playPeur();
}

function Script19()
{
  stopCellule();
playCouloir();
stopArchives();
playMinijeu();
stopPeur();
}

function Script20()
{
  stopMinijeu();
playAdrenaline();
}

function Script21()
{
  playMinijeu();
stopPeur();
}

function Script22()
{
  stopMinijeu();
}

function Script23()
{
  stopMinijeu();
playPeur();
}

