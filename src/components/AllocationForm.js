import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        if (cost > remaining) {
            alert("The value cannot exceed remaining funds £" + remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: action === "Reduce" ? 'RED_EXPENSE' : 'ADD_EXPENSE',
            payload: expense,
        });
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text">Department</label>
                    </div>
                    <select className="custom-select" onChange={(e) => setName(e.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Finance">Finance</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Admin">Admin</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text">Allocation</label>
                    </div>
                    <select className="custom-select" onChange={(e) => setAction(e.target.value)}>
                        <option value="Add">Add</option>
                        <option value="Reduce">Reduce</option>
                    </select>

                    <input type='number' required value={cost} onChange={(e) => setCost(e.target.value)} style={{ marginLeft: '2rem' }} />
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
