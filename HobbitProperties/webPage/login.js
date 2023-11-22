document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var privateKeys = [
        "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356",
        "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97",
        "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6"
    ];
    // Hash map of addresses and their corresponding private keys
    var addressToKeyMap = {
        "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955": privateKeys[0],
        "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f": privateKeys[1],
        "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720": privateKeys[2]
    };

    if (addressToKeyMap.hasOwnProperty(address)) {
        alert('Login successful!');
        
        localStorage.setItem('userName', name);
        localStorage.setItem('userAddress', address);
        localStorage.setItem('userPrivateKey', addressToKeyMap[address])

        window.location.href = 'user-page.html'
    } else {
        alert('Invalid address. Please try again.');
    }
});
