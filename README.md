# local-wallet-deploy
This is repository where I have upload a local smart wallet. 

The project is build on a *vyper* smart contract, *javascript* and *pyhon flask* using it as the local server.

## Technology

* I used **Vyper** as my smart contract language.
* Javascript and HTML used for a simple front-end application for the user interaction with the blockchain.
* Python Flask used for a very simple local server so the user will be able to run **cmd** commands in the machine where the server runs.
* Last but not least for the Blockchain infrastraction I used **Foundry** tool chain, and more specifically:
      * **Anvil** so to create the local/test blockchain to our machine.
      * And **cast** command so to deploy our smart contract to our blockchain and to call some functions of our smart contract.

## How to run

* First you need to clone this project to your local machine.
* Then you need to install the foundry tool chain so you will be able to run the commands locally to your machine.
  * Now you are ready to run your local blockchain using the `anvil` command witch will create a local blockchain to your machine.
* After that you can go to `./HobbitProperties/webpage` and from there you can run your index.html.
  * This page includes a QR code which allow the users to scan it and interact with the web frontend.
* After you run the index.html you need to spin up the python flask server that will able us to run commands from the web interface to our local machine.
  * To run the server need to go to `./HobbitProperties/webpage` and here you need to run `python3 main.py`
* Perfect now you have your server running and you started your index.html and you have your anvil blockchain running locally to your machine.
* Now we need to run the automated script witch you can find it under **HobbitProperties** directory you can run it using `./HobbitPropertyManager.sh`.
  * This script it builded to make our life easier for running our commands.
  * For this scenario we will use only the first option (1.) from our script (POSIX compliant).
    * Here the script will ask us to add an address so you need to go back where your anvil blockchain is running and take one of the addresses anvil provides.
* Now that we have deployed our smart contract we are ready to go again to our web interface.
* From our index.html now we can scan the QR code, and then we will move to a page with some addresses you can copy one of the addresses there and click `Login` link.
* Then you will see the log in web page where you can add your name and the copied address from before.
* Now you can see your user page from where you can click to one of the buttons you can see in this page.
* Each button executes different **function** of our smart contract and runs the related cmd command to our server (local machine).