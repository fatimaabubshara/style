import React from "react";
import { connect } from "react-redux";
import { createPropsSelector } from "reselect-immutable-helpers";
import { getProducts } from "../../../shared/store/selectors/productsSelector";
import { getAllFoodAPI } from "../../action";
import * as types from "../../../shared/store/actions/types";

import { fetchAPIAddFood } from "../../action";

class FoodItemList extends React.Component {
  constructor(props) {
    super(props);

    this.deleteContact = this.deleteContact.bind(this);
  }

  componentWillMount() {
    this.props.getAllFoodAPI();
  }

  deleteContact() {
    this.props.deleteContact(this.props.products.id);
  }
  render() {
    const { products } = this.props;
    return (
      <div id="menutable">
        <div id="list">
          {products && products.length > 0 ? (
            products.map((foodItem) => (
              <tr id="tr" key={foodItem.id}>
                <div id="all">
                  <img alt="img" id="imgfood" src={foodItem.imageUrl} />
                  <div id="info">
                    <p id="food">{foodItem.name}</p>
                    <p className="cost">{foodItem.price}$</p>
                    <p id="sub" className="cost">
                      {foodItem.subType}
                    </p>
                    <p className="des"> {foodItem.type}</p>
                    <p id="desc" className="des">
                      {" "}
                      {foodItem.description}
                    </p>
                  </div>
                </div>
                <div></div>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createPropsSelector({
  products: getProducts,
});

const mapDispatchToProps = (dispatch) => ({
  getAllFoodAPI: () => dispatch(getAllFoodAPI()),
  deleteContact: () => dispatch(types.deleteContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodItemList);
