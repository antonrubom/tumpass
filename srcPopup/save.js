document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('moodle_key', function(items) {
        if (!chrome.runtime.error) {
            let user = items.moodle_key.username
            if (user) {
                document.getElementById('title').innerHTML =
                    'Hey there, Antony, email: ' + user + '</b>. ' +
                    'If you want to change it simply enter the new login data.' +
                    ''
                document.getElementById('bod').getElementsByTagName('h1').innerHTML = '<h1>Hey there, Antony<h1>' + ''
            }
        }
    })

    document.querySelector('.save').addEventListener('click', onclick, false)

    function onclick() {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value

        chrome.storage.local.set({ 'moodle_key': { "username": username, "password": password } }, function() {
            if (chrome.runtime.error) {
                console.error("An error with local storage was found. If this presists please contact us.");
            }
        });

        let checkbox = document.getElementById('checkbox').checked
            //set to true or false, we will need to have the checkbox set at the begining of the browser session

        chrome.storage.local.set({ 'check_key': { "checkbox": checkbox } }, function() {
            if (chrome.runtime.error) {
                console.error("An error with local storage was found. If this presists please contact us.");
            }
        });
        location.reload() // reloading so you can see a successful input
    }
})