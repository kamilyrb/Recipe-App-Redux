import React, { Component } from 'react'
import * as recipeActions from '../../redux/actions/recipeActions'
import * as favouriteActions from '../../redux/actions/favouriteActions'
import { connect } from 'react-redux';
import { Card, CardImg, CardBody, CardTitle, CardText, Badge, Row, Col } from 'reactstrap'
import { bindActionCreators } from 'redux';
class RecipeList extends Component {
    componentDidMount() {
        this.props.actions.getRecipes();
    }

    addRecipeToFavourite(recipe) {
        this.props.actions.addToFavourite(recipe);
    }

    recipeInFavourite(recipeId) {
        return this.props.favouriteRecipes.some(item => item.id === recipeId);
    }


    render() {
        return (
            <div>
                <h3><Badge color='warning'>Recipes</Badge> <Badge color='success'>{this.props.currentCategory.name}</Badge></h3>
                <Row>
                    {
                        this.props.recipes.map(r => (<Col xs="6" key={r.id}>
                            <Card height="500px">
                                <CardImg top width="100%" src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>{r.name}</b></CardTitle>
                                    <CardText>{r.description.length > 75 ? (r.description.substr(0, 75) + '...') : r.description}</CardText>
                                    <Row>
                                        <Col xs="10"/>
                                    {this.recipeInFavourite(r.id) ? <img onClick={() => this.props.actions.removeFromFavourite(r)} alt="remove from favourite" src="../../assets/img/star.png" /> : <img onClick={() => this.addRecipeToFavourite(r)} alt="add favourite" src="../../assets/img/empty_star.png" />}</Row>
                                </CardBody>
                            </Card><br /></Col>
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
        favouriteRecipes: state.favouriteReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getRecipes: bindActionCreators(recipeActions.getRecipes, dispatch),
            addToFavourite: bindActionCreators(favouriteActions.addToFavourite, dispatch),
            removeFromFavourite:bindActionCreators(favouriteActions.removeFromFavourite,dispatch)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)