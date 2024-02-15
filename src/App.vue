<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';

import { ref, computed } from 'vue';

const transactions = ref([
    {id: 1, text: 'Groceries', amount: -34 },
    {id: 2, text: 'Cake', amount: -8.99 },
    {id: 3, text: 'Salary', amount: 430.4 },
    // {id: 4, text: 'Nothing', amount: 0 },
])

// Get total
const total = computed(() => {
  const totalAmount = transactions.value.reduce((accumulator, transaction) => {
    return accumulator + transaction.amount;
  }, 0);

  // Rounds it up
  return parseFloat(totalAmount.toFixed(2))
});

// Get income 
const income = computed(() => {
  return transactions.value
  .filter((transaction) => transaction.amount > 0)
  .reduce((accumulator, transaction) => {
    return accumulator + transaction.amount;
  }, 0)
  .toFixed(2);
});

// Get expenses
const expenses = computed(() => {
  return transactions.value
  .filter((transaction) => transaction.amount < 0)
  .reduce((accumulator, transaction) => {
    return accumulator + transaction.amount;
  }, 0)
  .toFixed(2);
});
</script>

<template>
  <Header />
  <div class="container">
    <Balance :total="total"/>
    <IncomeExpenses :income="income" :expenses="expenses"/>
    <TransactionList :transactions="transactions"/>
    <AddTransaction />
  </div>
</template>