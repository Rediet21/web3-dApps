import pytest
from web3 import web3

@pytest.fixture(scope="module")
def web3():
    return Web3(Web3.HTTPProvider('http://localhost:8545'))


@pytest.fixture(scope="module")
def my_contract(web3):
    # Contrat will be included when written
    contract = mycontract  # will be replaced with contract deployment logic