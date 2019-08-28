import React, { Component } from 'react'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../redux/actions/categoryActions'
import * as recipeActions from '../../redux/actions/recipeActions'
class CategoryList extends Component {

    componentDidMount() {
        this.props.actions.getCategories();
    }

    selectCategory = (category) =>{
        this.props.actions.changeCategory(category);
        this.props.actions.getRecipes(category.id);
    }


    render() {
        return (
            <div>
                <h3><Badge color='warning'>Categories</Badge></h3>
                <ListGroup>
                    {
                        
                        this.props.categories.map(c =>
                        (<ListGroupItem active={c.id === this.props.currentCategory.id}  key={c.id} onClick={() => this.selectCategory(c)}>{c.name}</ListGroupItem>)
                        
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
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getRecipes: bindActionCreators(recipeActions.getRecipes, dispatch),
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

