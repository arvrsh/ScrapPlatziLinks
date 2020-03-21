function download() {
	var e = Array.prototype.slice
	.call(document.getElementsByClassName('MaterialItem-anchor'));
	if (e.length <= 0) {
		var e = Array.prototype.slice
		.call(document.getElementsByClassName('Material-link'));
		if(e.length <= 0) {
			return alert("No se encontraron cursos");
		}
	};
	e = e.join("\n");
	var textFileAsBlob = new Blob([e], {type:'text/plain', endings:'native'});
  var downloadLink = document.createElement("a");
	url = window.URL.createObjectURL(textFileAsBlob);
	downloadLink.href = url; 
	downloadLink.download = "scrap_platzi.txt";
	downloadLink.click();
}
download();
