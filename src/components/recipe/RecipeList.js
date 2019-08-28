import React, { Component } from 'react'
import RecipeItem from './RecipeItem';
import recipeListReducer from '../../redux/reducers/recipeListReducer'
import changeCategoryReducer from '../../redux/reducers/changeCategoryReducer'
import * as recipeActions from '../../redux/actions/recipeActions'
import { connect } from 'react-redux';
import { Badge, Row, Col } from 'reactstrap'
import { bindActionCreators } from 'redux';
class RecipeList extends Component {
    componentDidMount(){
        this.props.actions.getRecipes();
    }


    render() {
        return (
            <div>
                <h3><Badge color='warning'>Recipes</Badge> <Badge color='success'>{this.props.currentCategory.name}</Badge></h3>
                <Row>
                    {
                        this.props.recipes.map(r => ( <Col xs="6">
                            <RecipeItem key={r.id} name={r.name} description={r.description} /></Col>
                        ))
                    }
           </Row> </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipeListReducer,
        currentCategory: state.changeCategoryReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getRecipes: bindActionCreators(recipeActions.getRecipes, dispatch),
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(RecipeList)