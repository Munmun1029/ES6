function Greetings(GreetingHandler,name){
  GreetingHandler(name);
    
}
function GreetingHandler(name){
    console.log('Good Morning',name)
        
}
const nam = 'Munmun';
Greetings(GreetingHandler,nam)