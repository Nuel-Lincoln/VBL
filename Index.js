const DigestiveDropDown = document.getElementById("DigestiveDropDown");
const RespiratoryDropDown = document.getElementById("RespiratoryDropDown");



window.addEventListener("load", ()=>{
                    const User = localStorage.getItem("VBLLOGGED")
                    if(User == "Admin"){
                                        document.getElementById("LoggedUser").innerHTML = "Admin Tony Uzoigwe";
                    }else if(User != "Admin"){
                                        document.getElementById("UserImg").src = " ";
                                        document.getElementById("UserImg").alt = `${User}`;
                                        document.getElementById("LoggedUser").innerHTML = `User  ${User}`;
                    }else if(!User){
                                        window.location.href = "/VBL/Index.html"
                    }

                    if(document.getElementById("SubDigestive").style.display == "flex"){
                                        DigestiveDropDown.style.backgroundImage = " linear-gradient(to bottom right , gray, rgb(135, 135, 179), gray )";
                                        document.getElementById("SubDigestive").style.color = "black";
                                        document.getElementById("SubDigestive").style.backgroundColor = "gray";
                    }else{

                    }

                    if(document.getElementById("SubRespiratory").style.display.value == "flex"){
                                        RespiratoryDropDown.style.backgroundColor = " blue";
                                        document.getElementById("SubRespiratory").style.color = "black";
                                        document.getElementById("SubRespiratory").style.backgroundColor = "gray";
                    }else{
                    
                    }
})




DigestiveDropDown.addEventListener("click", ()=>{
                    if(document.getElementById("SubDigestive").style.display == "flex"){
                                        document.getElementById("SubDigestive").style.display = "none";
                                        DigestiveDropDown.style.background = "transparent";
                                        document.getElementById("SubDigestive").style.color = "gainsboro";
                                        document.getElementById("SubDigestive").style.background = "transparent";
                    }else{
                                        document.getElementById("SubDigestive").style.display = "flex";
                                        
                    }
})

RespiratoryDropDown.addEventListener("click", ()=>{
                    if(document.getElementById("SubRespiratory").style.display == "flex"){
                                        document.getElementById("SubRespiratory").style.display = "none";
                                        RespiratoryDropDown.style.background = "transparent";
                                        document.getElementById("SubRespiratory").style.color = "gainsboro";
                                        document.getElementById("SubRespiratory").style.background = "transparent";
                    }else{
                                        document.getElementById("SubRespiratory").style.display = "flex";
                                        
                    }
})

const LogOut = document.getElementById("LogOut");

LogOut.addEventListener("click", ()=>{
                    localStorage.clear("VBLLOGGED");
                    window.location.href = "/VBL/Index.html";
})