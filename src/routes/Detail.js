// import React from "react";
// import { connect } from "react-redux";
// import { useParams } from "react-router-dom";

// function Detail(id, props) {
//   console.log(props)
//   console.log(id);
//   return <h1>Detail</h1>;
// }

// function mapStateToprops(state, ownProps) {
//   const {
//     match: {
//       params: { id },
//     },
//   } = ownProps;
//   console.log(id)
//   console.log(ownProps);
//   return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
// }

// export default connect(mapStateToprops)(Detail);


import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const myId = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId)); 

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

// function mapStateToProps(state, ownProps) {
function mapStateToProps(state) {
  // const {
  //   match: {
  //     params: { id }
  //   }
  // } = ownProps;
  // return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
