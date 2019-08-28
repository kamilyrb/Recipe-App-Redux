import React, { Component } from 'react'
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap'

export default class RecipeItem extends Component {
    render() {
        return (
            <div>
                 <Card height="500px">
        <CardImg top width="100%" src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>{this.props.name}</b></CardTitle>
          <CardText>{this.props.description}</CardText>
          <Button>Add To Favourite</Button>
        </CardBody>
      </Card>
      <br/>
            </div>
        )
    }
}
