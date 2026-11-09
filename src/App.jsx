import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IncCount, DecCount } from "./countSlice.js";
import { addEmployee } from './employeeSlice.js';
import { addStudent } from './studentSlice.js';

const App = () => {

    const count = useSelector((state) => state.count.count);

    const employee = useSelector((state) => state.employee.employee);

    const students = useSelector((state) => state.student.student);

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const studentData = {
            name: name,
            age: age
        };

        dispatch(addStudent(studentData));

        setName("");
        setAge("");
    }

    return (
        <div>

            <button onClick={() => dispatch(IncCount())}>INC</button>

            <button onClick={() => dispatch(DecCount(5))}>DEC</button>

            <h3>Count value is: {count}</h3>

            <button onClick={() => dispatch(addEmployee("haiii..."))}>
                Add Employee
            </button>

            <h3>Employee List</h3>

            {employee.map((emp, index) => (
                <p key={index}>{emp}</p>
            ))}

            <hr />

            <h3>Add Student</h3>

            <form onSubmit={handleSubmit}>

                Name:
                <input
                    type="text"
                    placeholder="enter a name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                Age:
                <input
                    type="number"
                    placeholder="enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <button type="submit">Submit</button>

            </form>

            <h3>Student List</h3>

            {students.map((s, index) => (
                <p key={index}>
                    Name: {s.name}, Age: {s.age}
                </p>
            ))}

        </div>
    );
};

export default App;