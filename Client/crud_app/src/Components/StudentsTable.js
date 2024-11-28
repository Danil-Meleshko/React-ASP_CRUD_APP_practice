import React, {useContext} from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/esm/Table";
import { TableMethods } from "./CRUD";

export default function StudentsTable(){
    const tableMethods = useContext(TableMethods);
    
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
                    {tableMethods.StudentData.map((student, index) =>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{student.name}</td>
                            <td>{student.description}</td>
                            <td>{student.isActive? 'Yes' : 'No'}</td>
                            <td>{student.id}</td>
                            <td>
                                <Button variant="outline-primary" onClick={() => tableMethods.handleEditStudent(student)}>Edit</Button>
                            </td>
                            <td>
                                <Button variant="outline-danger" onClick={() => tableMethods.DeleteStudent(student.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}