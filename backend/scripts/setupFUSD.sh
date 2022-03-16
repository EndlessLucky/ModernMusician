# - Setup FUSD Vault and Minter in the emulator-account
# - Mint some FUSD to the created Vault

flow transactions send cli/transactions/fusd/setupFUSDVault.cdc
flow transactions send cli/transactions/fusd/setupFUSDMinter.cdc 
flow transactions send cli/transactions/fusd/depositFUSDMinter.cdc 0xf3fcd2c1a78f5eee 
flow transactions send cli/transactions/fusd/mintFUSD.cdc 1.0 0xf3fcd2c1a78f5eee

