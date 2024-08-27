document.body.style.overflow = "auto"

if (a = document.getElementsByClassName("modal_backdrop")[0]) {
    a.style.display = "none";
}

var tab = document.getElementsByTagName('div');
for(var i = 0;i < tab.length;i++)   
   if (tab[i].id.substring(0, 13) == 'modal-portal-') {
       document.getElementById(tab[i].id).style.display = "none";
}