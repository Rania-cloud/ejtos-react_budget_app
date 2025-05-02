import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Valeur initiale
const initialState = {
    budget: 2000,
    expenses: [
        { id: uuidv4(), name: 'Marketing', cost: 50 },
        { id: uuidv4(), name: 'Sales', cost: 300 },
        { id: uuidv4(), name: 'Finance', cost: 70 },
        { id: uuidv4(), name: 'IT', cost: 40 }
    ]
};

// Création du contexte
export const AppContext = createContext();

// Reducer
const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            const existingExpenseIndex = state.expenses.findIndex(e => e.name === action.payload.name);
            if (existingExpenseIndex !== -1) {
                const updatedExpenses = [...state.expenses];
                updatedExpenses[existingExpenseIndex].cost += action.payload.cost;
                return { ...state, expenses: updatedExpenses };
            } else {
                return {
                    ...state,
                    expenses: [...state.expenses, { ...action.payload, id: uuidv4() }]
                };
            }

        case 'RED_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.map(exp =>
                    exp.name === action.payload.name
                        ? { ...exp, cost: exp.cost - action.payload.cost }
                        : exp
                )
            };

        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(exp => exp.id !== action.payload)
            };

        default:
            return state;
    }
};

// Provider
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => total + item.cost, 0);
    const remaining = state.budget - totalExpenses;

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
                remaining
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
