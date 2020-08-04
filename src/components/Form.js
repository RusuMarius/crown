import React from 'react';
import axios from 'axios';


class Form extends React.Component {

  state={
    name:'',
    subject:'',
    email: '',
    message: '',
    sent: false
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSubject = (e) => {
    this.setState({
      subject: e.target.value
    })
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  handleMsg = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      subject:this.state.subject,
      email: this.state.email,
      message: this.state.message
    }

    axios.post('/api/forma', data)
    .then(res=>{
      this.setState({
        sent:true,
      },this.resetForm())
    }).catch(()=>{
      console.log('message not sent')
    })

  }

  // reset initial data
  resetForm=() => {
    this.setState({
      name: '',
      subject: '',
      email: '',
      message: ''
    })

    setTimeout(()=> {
      this.setState({
        sent: false
      })
    }, 3000)
  }


  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.formSubmit}>
          <div className='singleItem'>
            <label htmlFor="name">Nume</label>
            <input type="text" name='name'
            className='name'
            placeholder='Nume...'
            value={this.state.name}
            onChange={this.handleName}
            />
          </div>

          <div className='singleItem'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email'
            className='email'
            placeholder='Email...'
            value={this.state.email}
            onChange={this.handleEmail}
            />
          </div>

          <div className='singleItem'>
            <label htmlFor="subject">Subiect</label>
            <input type="text" name='subject'
            className='subject'
            placeholder='Subiect...'
            value={this.state.subject}
            onChange={this.handleSubject}
            />
          </div>

          <div className='singleItem text-area'>
            <label htmlFor="message">Mesaj</label>
            <textarea name="message" id="" cols="30" rows="5"
            placeholder='Mesajul d-voastra...'
            value={this.state.message}
            onChange={this.handleMsg}
            ></textarea>
          </div>
          <div className={this.state.sent ?'msg msgAppear': 'msg'}>Message has been sent</div>
          <div className="btn">
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
