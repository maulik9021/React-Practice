import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

   constructor(props) {
      super(props);

      console.log("Parent Constructor called");
   }

   componentDidMount() {
      console.log("Parent Component DidMount Called");
   }

   render() {
      
      console.log("Parent Render called");

      return (
         <div>
            <h1>About</h1>
            <h2>This is about page of React Practice</h2>

            <User name={"Maulik Patel (Functions)"} location={"Anand Function"}/>
            <UserClass name={"First"} location={"Anand Class"}/>
            {/* <UserClass name={"Second"} location={"Anand Class"}/> */}
         </div>
      )
   }
}

export default About;

// const About = () => {
//    return (
//       <div>
//          <h1>About</h1>
//          <h2>This is about page of React Practice</h2>

//          <User name={"Maulik Patel (Functions)"} location={"Anand Function"}/>
//          <UserClass name={"First"} location={"Anand Class"}/>
         
//          <UserClass name={"Second"} location={"Anand Class"}/>
         
//          <UserClass name={"Third"} location={"Anand Class"}/>
         
//          <UserClass name={"Fourth"} location={"Anand Class"}/>
         
//          <UserClass name={"Fifth"} location={"Anand Class"}/>
//       </div>
//    )
// }

// export default About;