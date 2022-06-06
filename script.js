const btn = document.querySelector('#gridsize')

btn.addEventListener("click",() => {
    result=prompt('Grid size (if u want 12x12 just type 12):')
    for (let i=0;i<parseInt(result);i++) {
        for (let j=0;j<parseInt(result);j++) {
            const main_div = document.querySelector("#container")
            const new_div = document.createElement("div")
            new_div.setAttribute('style','display:inline-block;background-color:blue;width:20px;height:20px;margin:2px;')
            new_div.addEventListener("mouseover",() => {
                new_div.style['background-color'] = "black"
            })
            new_div.addEventListener("mouseleave",() => {
                new_div.style['background-color'] = "white"
            })
            main_div.setAttribute('style',`position:absolute;width:${(24)*result};height:${(24)*result}`)
    
            main_div.appendChild(new_div)
        }
        
    }

})



    
