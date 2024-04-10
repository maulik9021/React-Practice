import React from "react";

class Child extends React.Component {

   constructor(props) {
      super(props);

      console.log(this.props.name + "Constructor called");
   }

   componentDidMount() {
      console.log(this.props.name + "Component DidMount Called");
   }

   render() {
      
      console.log(this.props.name + "Render called");

      return (
      <>
         <h1>Child Component</h1>
      </>
   );
   }
}

export default Child;