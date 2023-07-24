const palyerchoice=document.querySelectorAll('.playerchoice');
const output = document.getElementById('demo');
palyerchoice.forEach(button =>{
    button.addEventListener('click', ()=>{
        const choice=button.value;
        output.textContent = `Clicked: ${choice}`;    })
})
