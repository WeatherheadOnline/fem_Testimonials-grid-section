const testimonialsWrapper = document.getElementById("testimonials");

window.addEventListener("load", loadContents);


function loadContents() {
    let i = 0;
    while (i < testimonialContents.length) {
        buildCard(testimonialContents[i]);
        i++;
    }
}

function buildCard(object) {
    const box = `
        <div class="box">
            <div class="box-author-wrapper">
                <div class="box-author-image" style="background-image: url('images/${object.image}')"></div>
                <div class="box-author-text">
                    <div class="box-author-name"><p>${object.name}</p></div>
                    <div class="box-author-note"><p>${object.note}</p></div>
                </div>
            </div>
            <div class="box-quote-first"><p>${object.quoteFirst}<p></div>
            <div class="box-quote-expound"><p>${object.quoteExpound}<p></div>
        </div>
    `;  
    testimonialsWrapper.innerHTML += box;         
}