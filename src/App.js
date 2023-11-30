import React, { Component } from 'react'

export default class App extends Component {
state ={
    person: {
      fullName: 'Lionel Messi',
      bio: 'footballeur international argentin jouant au poste d attaquant',
      imgSrc: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTkaV_dipGAUqj3ZqRlyfGS78-DYViwDdMMhJWBrv0skHEUagmGpm5Dg-MWvHA7iRVLN1aJQBqfd4gBp_A',
      profession: 'footballeur',
    },
    show: false,
    elapsedTime: 0,
    intervalId: null,
    
  }
  componentDidMount() {
 setInterval(() => {
      this.setState({
        elapsedTime: this.state.elapsedTime + 1,
      });
    },1000
    );

  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

   

  
  render() {
    const show=()=>{
      (this.state.show==true)? this.setState({show:false}):this.setState({show:true});

      

    }
    return (
      <div>
        {(this.state.show==true)? <div>
          <h2> {this.state.person.fullName} </h2>
<p>{this.state.person.bio}</p>
<img src={this.state.person.imgSrc} width={"200px"}/>
<h2>{this.state.person.profession}</h2>
        </div>:null}

<button onClick={show}>Toggle Profile</button>



<p> {this.state.elapsedTime} seconds</p>
     
     
      </div>
    )
  }
}
