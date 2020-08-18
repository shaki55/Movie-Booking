
let movieName=document.querySelectorAll('.moves');
let movieDate=document.querySelector('input[type="date"]');
let movieTime=document.querySelector('.show-time');
let amount=document.querySelector('.amount');
let pop=document.querySelector('.pop-up-container');
let print=document.querySelector('.print-preview');
let list=document.querySelectorAll('input[type="radio"]')

let seatBlock=document.querySelector('.seat-arrange')
let film=document.querySelector('.movie-name');
let counts=document.querySelector('.total-seats');
let date=document.querySelector('.show-date');
let dates=document.querySelector('#movie-date');
let clock=document.querySelector('.show-timesss');
let matinee=document.querySelectorAll('.show-time');
let datenow=document.querySelector('.datenow');
let timenow=document.querySelector('.timenow');
let localtime=document.querySelector('.locale');
// let totalseat=selectedSeats.length;
print.addEventListener('click',()=>{
     pop.style.display="flex";
});
pop.addEventListener('click',e=>{
     if(!e.target.classList.contains('pop-up')){
         pop.style.display="none";
     }
})


const price=function(){
     list.forEach((radio)=>{
    radio.addEventListener('click',()=>{
         if(radio.checked){
              let rate=radio.value;
              let movieName=radio.nextElementSibling.innerText;
              film.innerText=`Movie-${movieName}`
           
              console.log(rate);
              console.log(movieName);
              return rate;

              
         }
    })
})
}
price();

const numbers=function(){
     seatBlock.addEventListener('click', e =>{
     if(e.target.classList.contains('available')){
          e.target.classList.toggle('selected');
     let selectedSeats=document.querySelectorAll('.row .seat.selected');
     let totalseat=selectedSeats.length;
        
      counts.innerText=`Seats-${totalseat}`
     
     console.log(totalseat);
     return totalseat;

     }});}





numbers();

matinee.forEach((timess)=>{
     timess.addEventListener('click',()=>{
          let tim=timess.value;
          console.log(tim);
          clock.innerText=`Time-${tim}`;

     })
})


dates.addEventListener('change',()=>{
     let newDate=dates.value;
     date.innerText=`Date-${newDate}`;
})




const nows=new Date();
console.log(nows);
const dat=(nows.toDateString())
const timenows=(nows.toTimeString())
const locale=(nows.toLocaleString())
datenow.innerText=`Date: ${dat}`;
timenow.innerText=`Date: ${timenows}`;
localtime.innerText=`${locale}`;