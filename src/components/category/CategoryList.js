import React, { Component } from 'react'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../redux/actions/categoryActions'
class CategoryList extends Component {

    componentDidMount() {
        this.props.actions.getCategories();
    }

    render() {
        return (
            <div>
                <h3><Badge color='warning'>Categories</Badge></h3>
                <ListGroup>
                    {
                        
                        this.props.categories.map(c =>
                        (<ListGroupItem  key={c.id} >{c.name}</ListGroupItem>)
                        
                    )}
                </ListGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            //changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

