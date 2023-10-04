function deleteParty(partyId) {
    const partyElement = document.getElementById(partyId);
    if (partyElement) {
        partyElement.remove();
    }}
    document.addEventListener("DOMContentLoaded", function () {
        const deleteButtons = document.querySelectorAll("button[data-delete-party]");
        deleteButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const partyId = button.getAttribute("data-delete-party");
                deleteParty(partyId);
            });
        });
    });