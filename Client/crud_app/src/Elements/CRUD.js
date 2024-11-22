import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import StudentsTable from './StudentsTable';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/CRUD.css';
import Modal from 'react-bootstrap/Modal';

export default function CRUD(){
    const [studentId, setStudentId] = useState('');
    const [studentName, setStudentName] = useState('');
    const [studentDescription, setStudentDescription] = useState('');
    const [studentIsActive, setStudentIsActive] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        clearForm();
    };
    const handleShow = () => setShow(true);

    const [isEditing, setIsEditing] = useState(false);

    const [StudentData, setStudentData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () =>{
        axios.get("https://localhost:7023/api/Students")
        .then((res) => {
            setStudentData(res.data);
        })
        .catch(err => {
            console.error("Error fetching data: ", err);
        });
    }

    function DeleteStudent(id){
        if(window.confirm("Are you sure you want to delete")){
            axios.delete(`https://localhost:7023/api/Students/${id}`)
            .then(() =>{
                getData();
            })
            .catch(err => {
                console.error("Error deleting data: ", err);
            });
        }
    }

    const handleEditStudent = (student) => {
        setStudentId(student.id);
        setStudentName(student.name);
        setStudentDescription(student.description);
        setStudentIsActive(student.isActive);
        setIsEditing(true);
        handleShow();
    };

    function handleSubmit(e){
        e.preventDefault();
        
        if(studentName === '' || studentDescription === ''){
            alert('Please fill all the fields');
            return;
        }

        const student = {
            id: isEditing ? studentId : uuidv4(),
            name: studentName,
            description: studentDescription,
            isActive: studentIsActive,
        };

        if (isEditing) {
            // Update existing student
            axios.put(`https://localhost:7023/api/Students/${studentId}`, student)
                .then(() => {
                    getData();
                    handleClose();
                })
                .catch((err) => console.error("Error updating student:", err));
        } else {
            // Add new student
            axios.post("https://localhost:7023/api/Students", student)
                .then(() => {
                    getData();
                    clearForm();
                })
                .catch((error) => console.error("Error adding student:", error));
        }
    }

    const clearForm = () => {
        setStudentId("");
        setStudentName("");
        setStudentDescription("");
        setStudentIsActive(false);
        setIsEditing(false);
    };

    return (
        <Fragment>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter description" value={studentDescription} onChange={(e) => setStudentDescription(e.target.value)} />
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicActive">
                    <Form.Label>IsActive</Form.Label>
                    <Form.Check type="checkbox" checked={studentIsActive} onChange={(e) => setStudentIsActive(e.target.checked)} />
                </Form.Group>
                <br/>
                <Button type='submit' variant="primary">Submit</Button>
                <br/>
                <br/>
            </Form>
            
            <StudentsTable data={StudentData} onEdit={handleEditStudent} onDelete={DeleteStudent} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {isEditing ? "Edit Student" : "Add New Student"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                            />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter description"
                                value={studentDescription}
                                onChange={(e) => setStudentDescription(e.target.value)}
                            />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicActive">
                            <Form.Label>IsActive</Form.Label>
                            <Form.Check
                                type="checkbox"
                                checked={studentIsActive}
                                onChange={(e) => setStudentIsActive(e.target.checked)}
                            />
                        </Form.Group>
                        <br />
                        <Button type="submit" variant="primary">
                            Update
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}