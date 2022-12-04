/* show selected modal */
function showModal(content) {
    /* get selected modal */
    let modal = document.querySelector("div.modal."+content);
    /* display modal by changing css style */
    modal.style.display = "block";
}

/* hide selected modal */
function hideModal(content) {
    /* get selected modal */
    let modal = document.querySelector("div.modal."+content);
    /* display modal by changing css style */
    modal.style.display = "none";
}

/* fill modal with information */
function populateModal(content) {
    /* get selected modal */
    let modal = document.querySelector("div.modal."+content);
    /* get modal text element */
    let modalText = modal.querySelector("div.modal-content > p");
    /* get bib file contents */
    /*
    let bibContents = 
    modalText.innerHTML
    */
    /* display modal by changing css style */
    modal.style.display = "none";
}
