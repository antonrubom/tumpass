document.getElementById("checkbox").addEventListener('click', function() {
    if (checkbox.checked) {
        document.getElementById("checkbox").value = true;
    } else {
        document.getElementById("checkbox").value = false;
    }
});