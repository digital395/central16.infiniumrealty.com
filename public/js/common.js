document.querySelectorAll('.tabs .tab').forEach((x,i)=>{
    x.addEventListener('click', async (m)=>{
        
        document.querySelector('.tabs .tab.selected').classList.remove('selected');
        x.classList.add('selected');
        document.querySelector('.tab-desc.selected').classList.remove('selected');
        document.getElementsByClassName('tab-desc')[i].classList.add('selected');
        
    })
})