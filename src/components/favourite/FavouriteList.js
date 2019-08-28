import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col, Container, Badge } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as favouriteActions from '../../redux/actions/favouriteActions'
class FavouriteList extends Component {
    renderEmpty() {
        return (
            <div>There is no item in your favourite list.</div>
        )
    }

    renderSummary() {
        return (
            <Row>
                {
                    this.props.favouriteRecipes.map(r => (<Col xs="4" key={r.id}>
                        <Card height="500px">
                            <CardImg top width="100%" src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                            <CardBody>
                                <CardTitle><b>{r.name}</b></CardTitle>
                                <CardText>{r.description.length > 75 ? (r.description.substr(0, 75) + '...') : r.description}</CardText>
                                <Button color='danger' onClick={() => this.props.actions.removeFromFavourite(r)}>Remove From Favourite</Button>
                            </CardBody>
                        </Card><br /></Col>
                    ))
                }</Row>
        )
    }

    render() {
        return (
            <div>
                <Container>
                    <h3><Badge color='warning'>Favourites</Badge></h3>
                    {this.props.favouriteRecipes.length > 0 ? this.renderSummary() : this.renderEmpty()}
                </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(FavouriteList)