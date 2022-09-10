import { useParams } from "react-router-dom";
import { Component, useContext } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./devil"
//now we will use class Component instead of function
// const Details=()=>{
//     const {id}=useParams()

//     return(<h1>{id}</h1>)
// }
// export default Details

//super(props) you are basically saying you haveto giveprops to react either it wontknow props
//whenever an instance(object) get created run this function constructor
//render function is a must for class components and it acts just like function components
//when you call props in the class you type this.props
//componentDidMount() is basically the se as uEffect butfor class you can do it without async but he does it always with it
// componentDidMount will basically do the render function fist time then call it ...This is typically where you want to do data fetching
//this.setState(Object.assign({loadin:false},json.pets[0])) is equivalent to this.setState(Object.assign(json.pets[0])) this.setState({loading:false}) but only once which is better
//object spread ... is the same as object.assign Object.assign({loadin:false},json.pets[0])={loadin:false},...json.pets[0]
//setTimeout arrow function has context but if function() it will call it without context

class Details extends Component {
  // constructor(props){
  //     super(props)
  //     this.state={loading:true}
  // }

  // replace constructor babel does the translation it is basically the same we took props
  state = { loading: true ,showModal:false};
  
  //sometimes you have a problem with showing images you have to delete .parcelcahe and dist and sometimes even nodemodules
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
  
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }
  toggleModal=()=>this.setState({showModal:!this.state.showModal})
  render() {
    if (this.state.loading) {
      return <h2>Loading ..</h2>;
    }
    //throw new Error('lmao you crashed')
    const {theme}=this.props//pull theme from this.props
    const { animal, name, breed, description, city, state, images,showModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal}-{breed}-{city},{state}
          </h2>
          {/* <button style={{backgroundColor:theme}}>Adopt {name}</button> thats first the easy way*/}
<ThemeContext.Consumer>
  {([theme])=>
    (<button onClick={this.toggleModal} style={{backgroundColor:theme}}>Adopt {name}</button>)
  
  
  }
</ThemeContext.Consumer>


          <p>{description}</p>
          {
            showModal ? 
            <Modal>
              <div>
                <h1>Would you like to Adopt {name}?</h1>
                <div className="buttons">

            <a href="https://bit.ly/pet-adopt">Yes</a>
            <button onClick={this.toggleModal}>No</button>
                </div>

              </div>
            </Modal>
            :null
            /*:null otherwise null which means react doesnt render anything */

          }
        </div>
      </div>
    );
  }
}
//you have to put error boudaries on a higher component if you expect error in details do it on wrappeddetails
const WrappedDetails = () => {
  const params = useParams();
  const [theme] = useContext(ThemeContext)
  return(
  <ErrorBoundary>
    <Details params={params} theme={theme} />
 {/*theme will now be attached to this.props.theme */}
    
  </ErrorBoundary>
  )
};
export default WrappedDetails;
