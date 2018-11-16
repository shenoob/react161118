import React from "react";
import {connect} from "react-redux";
import {increment,decrement} from "../actions/CountAction";
import {fetchUsers} from "../actions/UsersAction";



export class App extends React.Component {


    componentDidMount(){
        this.props.zemiKorisnici();
    }
    render(){
        return(
            <div>
            <button onClick={this.props.namali.bind(this)}>-</button>
            <h2>{this.props.count}</h2>
            <button onClick={this.props.zgolemi.bind(this)}>-</button>
            { 
                this.props.users.fetched
                ?
                    this.props.users.users.map((user) => {
                    return (
                        <div key={user.id}>
                          <h2>{user.name}</h2>
                          </div>
                    )
                })
                :
                "Loading..."

        }
            </div>
                
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        count:state.countReducer.count,
        users:state.usersReducer
    }
}

const mapDispathToProps=(dispatch)=>{
    return {
        zgolemi:()=> {
            dispatch(increment());
        },
        namali:()=>{
            dispatch(decrement());
        },
        zemiKorisnici:()=>{
            dispatch(fetchUsers())
        }
    }
}
App=connect(mapStateToProps,mapDispathToProps)(App);