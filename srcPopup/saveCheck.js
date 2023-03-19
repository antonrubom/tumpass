document.getElementById("checkbox").addEventListener('click', function() {
    if (document.getElementById("checkbox").checked) {
        document.getElementById("checkbox").checked = true;
        chrome.storage.local.set({ 'switch_key': { "checkbox": checkbox } }, function() {
            if (chrome.runtime.error) {
                console.error("An error with local storage was found. If this presists please contact us.");
            }
        });
    } else {
        document.getElementById("checkbox").checked = false;
        chrome.storage.local.set({ 'switch_key': { "checkbox": checkbox } }, function() {
            if (chrome.runtime.error) {
                console.error("An error with local storage was found. If this presists please contact us.");
            }
        });
    }
});

//Add event listner to checkbox to figure out if it is on or off
document.querySelector('.checkbox').addEventListener('click', onclick, false)
    //create a fucntion that allows the checkbox to be modified
function onclick() {
    let checkbox = document.getElementById('checkbox').checked
        // if(checkbox==true){

    location.reload() // reloading so you can see a successful input
        // }

}