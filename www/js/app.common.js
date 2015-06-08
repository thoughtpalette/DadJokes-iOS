var sirenButton,
    sirenButtonActive,
    body,
    audioTag,
    audioSrc;

window.onload = function () {
    sirenButton = document.querySelector( ".siren" );
    body = document.querySelector("body");
    audioTag = document.querySelector("audio");

    attachHandlers();
};

function attachHandlers() {

    sirenButton.addEventListener( "click", function () {
        body.setAttribute("class", "active");
        sirenButton.setAttribute("class", "active");
        sirenButtonActive = document.querySelector( "button.active" );

        audioTag.play();

        this.addEventListener("click", function () {
            // Reset all active and delete audio el
            body.setAttribute("class", "");
            sirenButton.setAttribute("class", "");
            audioTag.pause();
            audioTag.currentTime = 0;
            attachHandlers();
        })
    });
}