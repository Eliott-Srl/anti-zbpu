document.body.style.overflow = "auto"
document.getElementsByClassName("modal_backdrop")[0].style.display = "none"

var tab = document.getElementsByTagName('div');
for(var i = 0;i < tab.length;i++)   
   if (tab[i].id.substring(0, 13) == 'modal-portal-') {
       document.getElementById(tab[i].id).style.display = "none";
}