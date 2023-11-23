# Local Wallet Deploy

## Introduction
This repository contains a local smart wallet project built with Vyper, JavaScript, and Python Flask. It's designed to interact with a blockchain using a simple front-end and a local server to execute commands.

### Technologies
* Vyper: Smart contract language used for blockchain interaction.
* JavaScript and HTML: For building the user interface.
* Python Flask: To set up a local server for command execution.
* Foundry Toolchain: For blockchain infrastructure, including:
    * Anvil: To create a local/test blockchain.
    * Cast Command: To deploy and interact with the smart contract.

### Pre-requisites
* Foundry Toolchain
* Python 3
* Web browser

### Installation
1. Clone the project: git clone [https://github.com/sifisKoen/local-wallet-deploy.git].
2. Install Foundry Toolchain for local command execution.

### How to Run
1. Start Anvil: Use the anvil command to initiate a local blockchain.
2. Web Frontend:
    * Navigate to ./HobbitProperties/webpage.
    * Open index.html in a web browser.
    This page includes a QR code for easy access.
3. Run Flask Server:
    * Inside ./HobbitProperties/webpage, execute python3 main.py.
4. Execute Script:
    * Navigate to ./HobbitProperties.
    * Run ./HobbitPropertyManager.sh.
    * When prompted, use an address from the Anvil blockchain.
5. Interact with Web Interface:
    * Scan the QR code from index.html.
    * Use the provided addresses to log in.
    * Explore various functionalities through the user interface.

### Contributions
Feel free to contribute to this project! It's beginner-friendly and a great example of integrating different technologies for blockchain interaction.