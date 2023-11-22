property_owners: public(HashMap[uint256, address])
frodos_address: public(address)

@external
def __init__(_frodos_address: address):
    self.frodos_address = _frodos_address

@external
def assign_property(_property_id: uint256, _hobbit_address: address):
    self.property_owners[_property_id] = _hobbit_address

@external
def is_propery_owned(_property_id: uint256, _hobbit_address: address) -> bool:
    return self.property_owners[_property_id] == _hobbit_address

@external
def set_frodos_address(_frodo_address: address):
    self.frodos_address = _frodo_address


@external
def reveal_secret(_hobbit: address) -> String[100]:
    if _hobbit == self.frodos_address:
        return "You found the entrance to the Bag End!"
    else:
        return "Nothing unusual here."