import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";
import './list.css'

class List extends React.Component {

    componentWillMount() {
        this.props.GetText();
    }

    deleteDataHandler = (id) => {
        this.props.DeleteText(id);
    }

    editDataHandler = (id) => {
        let newdata = document.getElementById(id).value;
        this.props.EditText(id, newdata);
        document.getElementById(id).value = '';
    }

    CheckedDataHandler = (id, data) => {
        this.props.CheckedText(id, data);
    }

    render() {
        let newArray = [...this.props.Text]

        return (
            <div class = "listbox" >
                {newArray.map(result => (
                    <div>
                        <input type="text" for="packers" placeholder={result.text} id={result.id}
                            onChange={(event) => { result.text = event.target.value }} disabled={result.status} />
                        <button onClick={() => this.deleteDataHandler(result.id)} class="buttons" ><i class="fa fa-trash"></i></button>
                        <button onClick={() => this.editDataHandler(result.id)} class="buttons" disabled={result.status} ><i class="fa fa-refresh"></i></button>
                        <button onClick={() => this.CheckedDataHandler(result.id, result.text)} class="buttons" disabled={result.status}  ><i class=" fa fa-check "></i></button><br></br>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};


export default connect(mapStateToProps, actionCreators)(List);
// export default connect(actionCreators)(List);