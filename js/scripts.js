let anteba = () => {
    
    document.getElementById("natura").src='img/on.png';
    
}

let chakroba = () => {
    document.getElementById("natura").src='img/off.png';
}

let naturismushaoba=()=>{
    let naturaimage = document.getElementById("natura").src;
    
    if(naturaimage.includes("off")){
        document.getElementById("natura").src = "img/on.png"
    }
    else{
        document.getElementById("natura").src = "img/off.png"
    }
    
}

document.getElementById("universalbutton").addEventListener("click", naturismushaoba);