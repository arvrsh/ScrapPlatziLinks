# Scrap Platzi Links
Obten los enlaces de cada clase en un curso.

> Si deseas aportar puedes utilizar mi referido de platzi: [https://platzi.com/c/arvrsh/](https://platzi.com/c/arvrsh/)

# Uso
Crea un bookmark en tu navegador con el siguiente contenido:
```js
javascript: function download(){var e;if((e=Array.prototype.slice.call(document.getElementsByClassName("MaterialItem-anchor"))).length<=0&&(e=Array.prototype.slice.call(document.getElementsByClassName("Material-link"))).length<=0)return alert("No se encontraron cursos");e=e.join("\n");var t=new Blob([e],{type:"text/plain",endings:"native"}),a=document.createElement("a");url=window.URL.createObjectURL(t),a.href=url,a.download="scrap_platzi.txt",a.click()}download();
```
![](https://i.imgur.com/SoyuMCc.png)

Listo.
