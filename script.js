const btn = document.querySelector('#gridsize')

btn.addEventListener("click",() => {
    const container = document.querySelector('#container')
    $('#container').children('div').each(function () {
        console.log(this.remove()); 
    });
    
    result=prompt('Grid size (if u want 12x12 just type 12):')
    for (let i=0;i<parseInt(result);i++) {
        for (let j=0;j<parseInt(result);j++) {
            const main_div = document.querySelector("#container")
            const new_div = document.createElement("div")
            new_div.setAttribute('style','display:inline-block;background-color:blue;width:20px;height:20px;margin:2px;')
            new_div.setAttribute('id','grid_element')
            new_div.addEventListener("mouseover",() => {
                new_div.style['background-color'] = "black"
            })
            new_div.addEventListener("mouseleave",() => {
                // generate random rgb value
                const r = Math.floor(Math.random()*255)
                const g = Math.floor(Math.random()*255)
                const b = Math.floor(Math.random()*255)
                const rgb = `rgb(${r},${g},${b})`;
                new_div.style['background-color'] = `rgb(${r},${g},${b})`
            })
            main_div.setAttribute('style',`position:absolute;width:${(24)*result};height:${(24)*result}`)
    
            main_div.appendChild(new_div)
        }
        
    }

})



    
