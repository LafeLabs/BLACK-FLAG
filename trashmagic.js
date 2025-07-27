function colorwheel(angle){
    H = angle;
    z = 255*(1 - Math.abs((H/60)%2 - 1));
    if(H < 60){
        redval = 255;
        greenval = Math.round(z);
        blueval = 0;
    }
    if(H >= 60 && H < 120){
        redval = Math.round(z);
        greenval = 255;
        blueval = 0;
    }
    if(H >= 120 && H < 180){
        redval = 0;
        greenval = 255;
        blueval = Math.round(z);
    }
    if(H >= 180 && H < 240){
        redval = 0;    
        greenval = Math.round(z);
        blueval = 255;
    }
    if(H >= 240 && H < 300){
        redval = Math.round(z);    
        greenval = 0;
        blueval = 255;
    }
    if(H >= 300 && H < 360){
        redval = 255;    
        greenval = 0;
        blueval = Math.round(z);
    }
    
    redstring = redval.toString(16);
    if(redstring.length < 2){
        redstring = "0" + redstring;    
    }
    greenstring = greenval.toString(16);
    if(greenstring.length < 2){
        greenstring = "0" + greenstring; 
    }
    bluestring = blueval.toString(16);
    if(bluestring.length < 2){
        bluestring = "0" + bluestring; 
    }
    color = "#" + redstring + greenstring + bluestring;   
    return(color);
}

function rainbowstring(localelement){
    text = localelement.innerHTML;
    localelement.innerHTML = "";
    n = text.length;
    for(var index = 0; index < n; index++){
        var newspan = document.createElement("SPAN");    
        newspan.innerHTML = text.charAt(index);
    
        H = index*360/n;
        z = 255*(1 - Math.abs((H/60)%2 - 1));
    
        if(H < 60){
            redval = 255;
            greenval = Math.round(z);
            blueval = 0;
        }
        if(H >= 60 && H < 120){
            redval = Math.round(z);
            greenval = 255;
            blueval = 0;
        }
        if(H >= 120 && H < 180){
            redval = 0;
            greenval = 255;
            blueval = Math.round(z);
        }
        if(H >= 180 && H < 240){
            redval = 0;    
            greenval = Math.round(z);
            blueval = 255;
        }
        if(H >= 240 && H < 300){
            redval = Math.round(z);    
            greenval = 0;
            blueval = 255;
        }
        if(H >= 300 && H < 360){
            redval = 255;    
            greenval = 0;
            blueval = Math.round(z);
        }
        
        redstring = redval.toString(16);
        if(redstring.length < 2){
            redstring = "0" + redstring;    
        }
        greenstring = greenval.toString(16);
        if(greenstring.length < 2){
            greenstring = "0" + greenstring; 
        }
        bluestring = blueval.toString(16);
        if(bluestring.length < 2){
            bluestring = "0" + bluestring; 
        }
        color = "#" + redstring + greenstring + bluestring;   
        newspan.style.color = color;
        localelement.appendChild(newspan);
    }
    

}
function rainbow(localarray){
    n = localarray.length;
    theta = 0;
    for(var index = 0;index < n;index++){
    
        H = index*360/n;
        z = 255*(1 - Math.abs((H/60)%2 - 1));
    
        if(H < 60){
            redval = 255;
            greenval = Math.round(z);
            blueval = 0;
        }
        if(H >= 60 && H < 120){
            redval = Math.round(z);
            greenval = 255;
            blueval = 0;
        }
        if(H >= 120 && H < 180){
            redval = 0;
            greenval = 255;
            blueval = Math.round(z);
        }
        if(H >= 180 && H < 240){
            redval = 0;    
            greenval = Math.round(z);
            blueval = 255;
        }
        if(H >= 240 && H < 300){
            redval = Math.round(z);    
            greenval = 0;
            blueval = 255;
        }
        if(H >= 300 && H < 360){
            redval = 255;    
            greenval = 0;
            blueval = Math.round(z);
        }
        
        redstring = redval.toString(16);
        if(redstring.length < 2){
            redstring = "0" + redstring;    
        }
        greenstring = greenval.toString(16);
        if(greenstring.length < 2){
            greenstring = "0" + greenstring; 
        }
        bluestring = blueval.toString(16);
        if(bluestring.length < 2){
            bluestring = "0" + bluestring; 
        }
        color = "#" + redstring + greenstring + bluestring;
        //console.log(color);
        localarray[index].style.backgroundColor = color;// + "80";
        localarray[index].style.borderColor = color;
    }
}