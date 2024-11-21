import React from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/esm/Table";

export default function StudentsTable({data, onEdit, onDelete}){
    return(
        <div className="StudentsTable">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>IsActive</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student, index) =>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{student.name}</td>
                            <td>{student.description}</td>
                            <td>{student.isActive? 'Yes' : 'No'}</td>
                            <td>{student.id}</td>
                            <td>
                                <Button variant="outline-primary" onClick={() => onEdit(student)}>Edit</Button>
                            </td>
                            <td>
                                <Button variant="outline-danger" onClick={() => onDelete(student.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}