import React , {Component} from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {searchText:"",placeholder:"tapez votre film"}
  }
  render(){
    return (
      <div className='row'>
        <div className='col-md-8'>
          <input className='form-control input-xs ' onChange={this.handleChange.bind(this)} placeholder={this.state.placeholder}/>
        </div>
      </div>
    )
  }
  handleChange(event){
    this.setState({searchText:event.target.value});
  }
}
export default SearchBar;