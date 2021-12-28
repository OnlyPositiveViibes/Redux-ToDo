import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";

const AddTodo = props => {
    const [modal, setModal] = useState(false);
    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const handleClose = () => setModal(false);
    const handleShow = () => setModal(true);

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const id = parseInt(Date.now());
        const todo = {
            ...task,
            isComplete: false,
            id: id
        };
        props.addTodo(todo);
        setTask({});
        handleClose();
    };

    return (
        <>
            <Button className="mt-2 mb-2" variant="info" onClick={handleShow}>
                Nauja užduotis
            </Button>
            <Modal show={modal} onHide={handleClose}>
                <Modal.Header>Sukurti naują užduotį</Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label htmlFor="title">Pavadinimas</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type="text"
                                value={task.title}
                                name="title"
                                id="title"
                                placeholder="Ivesk apvadinimą"
                            />
                            <Form.Label htmlFor="description">Aprašymas</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type="textarea"
                                value={task.description}
                                name="description"
                                id="description"
                                placeholder="Ivesk apvadinimą"
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit">Pridėti</Button>
                        <Button onClick={handleClose}>Uždaryti</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default connect(null, { addTodo })(AddTodo);
