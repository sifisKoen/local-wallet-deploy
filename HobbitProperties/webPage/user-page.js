document.addEventListener('DOMContentLoaded', function() {
    let userName = localStorage.getItem('userName');
    let userAddress = localStorage.getItem('userAddress');
    let userPrivateKey = localStorage.getItem('userPrivateKey');

    document.getElementById('userName').textContent = userName || '[Not Provided]';
    document.getElementById('userAddress').textContent = userAddress || '[Not Provided]';
    document.getElementById('userPrivateKey').textContent = userPrivateKey || '[Not Provided]';

    var addPropertyModal = document.getElementById("addPropertyModal");
    var askPropertyInfoModal = document.getElementById("askPropertyInfoModal");
    var spans = document.getElementsByClassName("close");

    document.getElementById('addPropertyBtn').addEventListener('click', function() {
        addPropertyModal.style.display = "block";
    });

    document.getElementById('askPropertyInfo').addEventListener('click', function() {
        askPropertyInfoModal.style.display = "block";
    });

    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function() {
            this.parentElement.parentElement.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == addPropertyModal) {
            addPropertyModal.style.display = "none";
        }
        if (event.target == askPropertyInfoModal) {
            askPropertyInfoModal.style.display = "none";
        }
    }

    document.getElementById('submitAddProperty').addEventListener('click', function() {
        var propertyAddress = document.getElementById('addPropertyAddress').value;
        var propertyId = document.getElementById('addPropertyId').value;
        
        // Computer IP
        fetch('http://130.229.162.79:5000/addProperty', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userAddress: propertyAddress, propertyId: propertyId, userPrivateKey: userPrivateKey }),
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    });

    document.getElementById('submitAskPropertyInfo').addEventListener('click', function() {
        var propertyAddress = document.getElementById('askPropertyAddress').value;
        var propertyId = document.getElementById('askPropertyId').value;
        
        // Computer IP
        fetch('http://130.229.162.79:5000/askPropertyInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userAddress: propertyAddress, propertyId: propertyId })
        })
        .then(response => response.text())
        .then(data => alert(data))
        .then(error => console.error('Error:', error));
        
    });
})