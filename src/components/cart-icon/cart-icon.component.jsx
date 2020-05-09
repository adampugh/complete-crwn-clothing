import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = (props) => (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"></span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);