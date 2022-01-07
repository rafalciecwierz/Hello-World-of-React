import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    })

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if there is no id', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    })

    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const newExpense = {
        id: '4',
        description: 'Car rent',
        note: 'Rentify.com',
        amount: 30000,
        createdAt: 0
    };
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense: newExpense
    });

    expect(state).toEqual([...expenses, newExpense]);
});

test('should edit the expense', () => {
    const editedExpense = expenses[1];
    editedExpense.note = 'My new edit note';
    editedExpense.description = 'Edited expense';
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note: editedExpense.note,
            description: editedExpense.description
        }
    })

    expect(state).toEqual([expenses[0], editedExpense, expenses[2]])
});

test('should edit the expense with non existing id', () => {
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note: 'Non existing expense'
        }
    })

    expect(state).toEqual(expenses);
});