import { Button, ButtonGroup } from "react-bootstrap";
import { filterTodo } from "../../store/actions/todoActions";
import { connect } from "react-redux";

const TopNav = props => {
    let { filterTodo } = props;

    return (
        <ButtonGroup>
            <Button
                variant="primary"
                onClick={() => {
                    filterTodo("ALL");
                }}
            >
                Visos užduotys
            </Button>
            <Button
                variant="primary"
                onClick={() => {
                    filterTodo("ACTIVE");
                }}
            >
                Aktyvios užduotys
            </Button>
            <Button
                variant="primary"
                onClick={() => {
                    filterTodo("DONE");
                }}
            >
                Pabaigtos užduotys
            </Button>
        </ButtonGroup>
    );
};

export default connect(null, { filterTodo })(TopNav);
