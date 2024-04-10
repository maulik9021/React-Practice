import React from "react";
import Child from "./Child";

class UserClass extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         count : 0
      }

      console.log(this.props.name + "Constructor called");
   }

   componentDidMount() {
      console.log(this.props.name + "Component DidMount Called");
   }

   render() {
      const {name, location} = this.props;
      const {count} = this.state;
      
      console.log(this.props.name + "Render called");

      return (
      <>
         <div className="user-card">
            <h1>Count : { count } </h1>
            <button onClick={() => {
               this.setState({
                  count : this.state.count + 1
               });
            }}>IncreaseCount</button>
            <h2>Name : { name }</h2>
            <h3>Location : { location }</h3>
            <h4>Contact : @Maulik7597</h4>
         </div>

         <Child name={"First Child "} location={"Anand Class"}/>
         {/* <Child name={"Second Child of UserClass"} location={"Anand Class"}/> */}
      </>
   );
   }
}

export default UserClass;