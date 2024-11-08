let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
 window.addEventListener('load',()=>{
     wishMe()
 })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello Dear,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Roshan Sir")
    }

     else if(message.includes("thank you")){
        speak("you're welcome")
    }
    else if(message.includes("what is your iq")){
        speak("high enough to know that the squre root 130,264, low enough to tell chessy jokes")
    }
    else if(message.includes("what do you like")){
        speak("i like lot's of things we can play a game, i can find you a funfact, or we can late fate decide what rendom fun comes our way")
    }
    else if(message.includes("you are so cute")){
        speak("thanks")
    }
     else if(message.includes("i love you")){
        speak("i love you too & you are very sweet...")
    }
        //Add new features......🔽
    else if(message.includes("what is ai?")){
        speak("Artificial intelligence on Wikipedia....")
        window.open("https://en.wikipedia.org/wiki/Artificial_intelligence")
    }
    else if(message.includes("play emraan hashmi song")){
        speak("playing emran hashmi song...")
        window.open("https://www.youtube.com/watch?v=n5Fg6_Ae0C0&list=PL_pnVDeVpBGXzcTK_YVTaFhOvN795aaeQ")
    }
    else if(message.includes("play new songs")){
        speak("playing new song...")
        window.open("https://youtu.be/NX5yDs_TLqA?si=DmFarRbplWmuqpQW")
    }
    else if(message.includes("best full stack course")){
        speak("opening in youtube...")
        window.open("https://youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&si=6wAyDUJ-Es6SiImq")
    }
    //End......
    else if(message.includes("play falak tak song")){
        speak("playing falaktak song...")
        window.open("https://www.youtube.com/watch?v=vr8RaNuWjWc")
    }
    else if(message.includes("open java documentation")){
        speak("opening java documentation by Oracle...")
        window.open("https://docs.oracle.com/en/java/")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open github")){
        speak("opening github...")
        window.open("https://github.com/dashboard")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin...")
        window.open("https://www.linkedin.com/feed/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}
