import React, { Component } from 'react';

class App extends Component {
    constructor(props){
      super(props)
      this.displayData = [];

      this.state = {
        showdata : this.displayData,
        postVal : "",
        postname: "",
        postdate: ""
    }
    this.addchirp = this.addchirp.bind(this);
    this.handleChange = this.handleChange.bind(this);

  };
    addchirp=()=>{if(this.state.postVal===""||this.state.postname===""){}else{
    this.displayData.push(
    <div className="card" style={{width: '100%'}}>
    <h5 className="card-header"><pre>{this.state.postname}</pre></h5>
    <div  className="card-body">
      <p className="card-text"><pre>{this.state.postVal}</pre></p>
    </div>
    <div className="card-footer text-muted">
    <pre>{this.state.postdate}</pre>
    </div>
  </div>);
    this.setState({
       showdata : this.displayData,
       postVal : "",
       postname: "",
       postdate: ""
    });}}
      handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
          postdate :Date()
        });
      }
    componentDidMount() {
      this.setState({
        postVal: "Wellcome To Chirper",
        postname: "Admin",
        postdate: "23/07/2019 10:09 PM CST"
      },()=>{this.addchirp()});
      setTimeout(()=>{
        this.setState({
        postVal: "Both Username and message must be entered to chirp",
        postname: "Admin",
        postdate: "23/07/2019 10:09 PM CST"},
        ()=>{this.addchirp()})},
        500);
      setTimeout(()=>{
        this.setState({
        postVal: "I am Groot",
        postname: "Groot",
        postdate: "23/07/2019 10:20 PM CST"},
        ()=>{this.addchirp()});},
      1000)
      
      
    }
  render(){return(
    <React.Fragment>
    <div className="container-fluids">
    <div className="row"></div>
    <div className='col-3'></div>
    <div className="col-6">
      <div className="Chirps">
        {this.displayData}
      </div>
      <div className="card fixed-bottom" style={{width : '50%'}}>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="postname" className="form-control" id="username" placeholder="Username" value={this.state.postname} onChange={this.handleChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor="Textarea1">Your Text</label>
            <textarea className="form-control" name="postVal" value={this.state.postVal} onChange={this.handleChange} id="Textarea1" rows="3"></textarea>
          </div>
          <input className="button" onClick={this.addchirp} value="Chirp"/>
        </form>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
    
    </React.Fragment>
  )}
}

export default App;
