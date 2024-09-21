#  Vault Smart Contract

## Overview

The Vault contract is a smart contract designed to manage bill payments with a locking mechanism for scheduled payments. Users can deposit funds, add bills, and schedule payments to be made after a lock duration. The contract ensures that payments are only made after the specified lock duration has expired. It also includes functionalities for contract balance management and bill tracking.

## Features

### Deposit and Withdrawal:
Users can deposit ARB into the contract.
The owner can withdraw funds from the contract.

### Bill Scheduling and Payment:
Bills can be added with a specific lock duration.
Bills cannot be paid until the lock duration has expired.
The contract owner can pay the bills once the lock time has passed.

### Lock Mechanism:
Each bill has a lock period during which the payment is locked.
After the lock period expires, the bill can be paid.

### Bill Tracking:
All added bills are tracked with a unique bill ID.
Users can check the status of a bill, including its lock duration and release time.

## Prerequisites

### Solidity Version: ^0.8.20

### Libraries:
```ArbSys``` for interaction with the Arbitrum Layer 2 scaling solution.
```OpenZeppelin``` Ownable for ownership management.
```SafeMath``` to ensure safe arithmetic operations.


## Smart Contract Functions

### deposit()
Allows users to deposit ETH into the contract.

Modifier: ```payable```
Conditions:
```msg.value``` must be greater than 0.

### withdraw(uint256 amount)
Allows the owner to withdraw funds from the contract.

Modifier: ```onlyOwner```
Conditions:
The contract must have sufficient balance for the withdrawal.

### addBill(address payable recipient, uint256 amount, uint256 lockDurationMins)
Adds a new bill with a specified lock duration.

Arguments:
```recipient```: Address to which the bill will be paid.
```amount```: Amount to be paid.
```lockDurationMins```: Duration (in minutes) the payment will be locked.
Conditions:
A new bill is created and stored in the contract.

### payBill(uint256 billId)
Pays the bill after its lock duration has passed.

Modifier:
```onlyOwner```
```sufficientFunds(bills[billId].amount)```
Conditions:
Bill must exist.
Bill must not be already paid.
Lock duration must have expired.

### getLockCountdown(uint256 billId)
Returns the remaining lock time for a specific bill.

Returns:
Lock duration in seconds (returns 0 if the lock has expired).
### getBalance()
Returns the current balance of the contract.

### getLockDetails(uint256 billId)
Returns the lock amount and lock release time for a specific bill.

## Events
1. BillPaid(uint256 indexed billId, address indexed recipient, uint256 amount)
Emitted when a bill is paid.

2. BillAdded(uint256 indexed billId, address indexed recipient, uint256 amount, uint256 lockReleaseTime)
Emitted when a bill is added with a lock duration.






