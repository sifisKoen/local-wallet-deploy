#!/bin/bash

echo "Welcome to the Hobbit Properties Management Script"
echo "1. Deploy a New Contract"
echo "2. Assign Property to a Hobbit"
echo "3. Check Property Ownership"
echo "Please select an option: "
read OPTION

RPC_URL="http://localhost:8545"

case $OPTION in
    1)
        # Deploy Contract
        read -p "Enter Deployer's Private Key: " DEPLOYER_PRIVATE_KEY
        CONTRACT_BIN=$(cat HobbitProperties.bin)
        echo "Deploying Contract..."
        cast send --rpc-url $RPC_URL --private-key $DEPLOYER_PRIVATE_KEY --create $CONTRACT_BIN
        ;;
    2)
        # Assign Property to Hobbit
        read -p "Enter Contract Address: " CONTRACT_ADDRESS
        read -p "Enter Hobbit's Private Key: " HOBBIT_PRIVATE_KEY
        read -p "Enter Hobbit's Address: " HOBBIT_ADDRESS
        read -p "Enter Property ID to Assign: " PROPERTY_ID
        echo "Assigning Property..."
        cast send --rpc-url $RPC_URL --private-key $HOBBIT_PRIVATE_KEY $CONTRACT_ADDRESS "assign_property(uint,address)" $PROPERTY_ID $HOBBIT_ADDRESS
        ;;
    3)
        # Check Property Ownership
        read -p "Enter Contract Address: " CONTRACT_ADDRESS
        read -p "Enter Property ID to Check: " CHECK_PROPERTY_ID
        read -p "Enter Hobbit's Address: " HOBBIT_ADDRESS
        echo "Checking Property Ownership..."
        cast call --rpc-url $RPC_URL $CONTRACT_ADDRESS "is_propery_owned(uint256,address)" $CHECK_PROPERTY_ID $HOBBIT_ADDRESS
        ;;
    *)
        echo "Invalid option selected"
        ;;
esac
