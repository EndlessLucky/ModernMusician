#!/bin/bash

flow transactions send ./cli/transactions/fusd/setupFUSDVault.cdc --signer emulator-account
flow transactions send ./cli/transactions/init_account.cdc --signer emulator-account