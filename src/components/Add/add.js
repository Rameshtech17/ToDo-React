import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";
import './add.css'


class AddToDO extends React.Component {
    postDataHandler = (e) => {
        if (e.key === 'Enter') {
            let data = document.getElementById("inputText").value;
            this.props.PostText(data);
            document.getElementById("inputText").value='';
        }
    }

    render() {
        return (
            <div class="addbox">
                <input type="text"
                    onKeyPress={this.postDataHandler}
                    class="no-outline" 
                    placeholder="Add a task" 
                    id="inputText" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(AddToDO);
