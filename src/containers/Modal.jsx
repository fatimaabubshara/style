import React from "react";
import ReactDOM from "react-dom";
import { Field, reduxForm } from "redux-form";
import { fetchAPIAddnewFood } from "./action";
class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      newSub: [],
    };

    this.submitAddNew = this.submitAddNew.bind(this);
  }

  submitAddNew(values) {
    ////////////////////////
    var item = [...this.state.newSub];
    item.push(this.newText.value);
    //debugger;
    fetchAPIAddnewFood({
      categoryType: values.newTypeFood,
      categorySubType: item,
    }).then(() => {
      alert("The new type Food is Added to DataBase ");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="Modal1">
        <form onSubmit={handleSubmit(this.submitAddNew)}>
          <div>
            <Field
              className="inputModal"
              required
              placeholder="New Type Food"
              type="text"
              name="newTypeFood"
              component="input"
              id="newTypeFood"
            />
            <br />
            <Field
              className="inputModal"
              placeholder="New Sub Type Food"
              type="text"
              ref="newtext"
              name="newSub"
              id="newSub"
              component="input"
              ref={(ip) => {
                this.newText = ip;
              }}
            />
          </div>
          <div>
            <button type="submit">ADD Food Type</button>
            <ul>
              {this.state.newSub.map(function (todo) {
                return <li>{todo}</li>;
              })}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

const AddNEWFoodItemForm = reduxForm({
  form: "add-food",
})(Modal);

export default AddNEWFoodItemForm;
