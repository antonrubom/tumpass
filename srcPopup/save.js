document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('moodle_key', function(items) {
        if (!chrome.runtime.error) {
            let username = items.moodle_key.username;
            if (username) {
                document.getElementById('top').innerHTML = '<h1>Hey there,</h1> <b> ' + username + '</b>';
            }
        }
    });

    var dropdownBtn = document.getElementById("dropdown-btn");
    var textDiv = document.getElementById("text");

    textDiv.style.display = "none";
    dropdownBtn.innerHTML = "Show more";

    dropdownBtn.addEventListener("click", function() {
        if (textDiv.style.display === "none") {
            textDiv.style.display = "block";
            dropdownBtn.innerHTML = "Show less";
        } else {
            textDiv.style.display = "none";
            dropdownBtn.innerHTML = "Show more";
        }
    });



    document.querySelector('.save').addEventListener('click', onclick, false)

    function onclick() {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        console.log(username, password)
        chrome.storage.local.set({ 'moodle_key': { "username": username, "password": password } }, function() {
            if (chrome.runtime.error) {
                console.error("An error with local storage was found. If this presists please contact us.");
            }
        });
        location.reload() // reloading so you can see a successful input
    }
})