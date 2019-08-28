import React, { Component } from 'react'
import { NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as favouriteActions from '../../redux/actions/favouriteActions'
class FavouriteSummary extends Component {


    renderEmpty() {
        return (<NavItem>
            <NavLink>Empty Favourite List</NavLink>
        </NavItem>)
    }

    renderSummary() {
        return (<UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Your Favourites ({this.props.favouriteRecipes.length})
                </DropdownToggle>
            <DropdownMenu right>
                {this.props.favouriteRecipes.map(r => (

                    <DropdownItem key={r.id}>
                        <Badge color='danger' onClick={() => this.props.actions.removeFromFavourite(r)}>-</Badge>
                        {r.name}
                    </DropdownItem>
                ))}


                <DropdownItem divider />
                <DropdownItem><Link to='favourites'>Go To Favourites</Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>)
    }


    render() {
        return (
            <div>
                {this.props.favouriteRecipes.length > 0 ? this.renderSummary() : this.renderEmpty()}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromFavourite: bindActionCreators(favouriteActions.removeFromFavourite, dispatch),
        }
    }
}

function mapStateToProps(state) {
    return {
        favouriteRecipes: state.favouriteReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteSummary)
