import { Component } from "react";
// return(<img src={photo} key={photo} className={index===acive ? "active" : "" } if index is the same as the active our counter give classname otherwise dont
//if you print this inside a function declared it wont show this because it creates a new context but for arrow function it follow the context
class Carousel extends Component{
    state={active:0//this will be the index of the current image to display

    }
    HandleIndexClick=(event)=>{
        this.setState({active:+event.target.dataset.index})//dataset allows me to access whatever in dataset inside html index mean whatever this is  if i put inside the img data-lol i will invoke it like that event.target.dataset.lol
        //index will be outputted to dom as a string so change it use the + unary plus operator to number type
    }
    //if no image is given show placeholder 
    static defaultProps={images:["http://pets-images.dev-apis.com/pets/none.jpg"]}
    render(){
        const {active}=this.state
        const{images}=this.props//basically it says grab images key from props(immutable) which is given when calling the class
        return(
            <div className="carousel">
                <img src={images[active]} alt="animal"/>
                <div className="carousel-smaller">
                    {images.map((photo,index)=>{
                        return(<img src={photo} key={photo} className={index===active ? "active" : "" } alt="animal thumbnail" data-index={index} onClick={this.HandleIndexClick}/>)
                    })}
                </div>

            </div>
        )
    }
}
export default Carousel
//difference between static and state is every obj or pet in this have the same defaultProps but each can have different states maybe one has no images and the other have
//props which comes from t parent is immutable which you cant change it is one way data flow


/*const obj={lol:1}
const obj2={lol:2}
const {lol}=obj2
console.log(lol) will print 2 your making it callable outside



*/