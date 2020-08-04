import React, { Component } from "react";




class Slider extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      awsApiData: [],
      loading: false,
      search: ''
    };
  }



  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20),
    })
  }
  resetNames=() => {
    this.setState({
      search: ''
    })
  }

  componentDidMount() {
    this._isMounted = true;
    console.log("app mounted");
    this.setState({ loading: true });
    fetch("api/doctors.json")
      .then(data => data.json())
      .then(data =>
        this.setState(
          {
            awsApiData: data.map(item => ({
              ...item,
              source: item.download_url
            })),
            loading: false
          }
        )
      );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    let filteredDoctors = this.state.awsApiData.filter(
      (post) => {
        return post.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

  return (
    <React.Fragment>

      {this.state.loading ? (
        <div className="text-center loading">
          <img className='loading-img' src="./images/loading-icon.gif" alt=""/>
        </div>
      ) : (
        <React.Fragment>
          <form>
            <div className="input-box">
              <input className='search-input' type="text"
                value={this.state.search}
                name='search'
                placeholder='Search..'
                id='search-input'
                onChange={this.updateSearch.bind(this)}
              />
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className={this.state.search ? 'reset-cta reset-on' : 'reset-cta'} onClick={this.resetNames.bind(this)}>Resetare</div>
          </form>
          <div className='team'>

            {
              filteredDoctors.map((post, indx) => {
                return (
                  <div key={indx} className='doctor-box'>
                    <div className="doctor-info">
                      <p className="name">{post.name}</p>
                      <ul>
                        {
                          post.skills ?
                            post.skills.map(skillDetail => {
                              return <li><i className='fas'>&#xf101;</i>{skillDetail.skill}</li>
                            })
                          :
                          null
                        }
                      </ul>
                    </div>
                    <div className="doctor-img">
                      <img
                        className="media-img card-img-top card-img-hero"
                        src={post.download_url}
                        alt="Alt text"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                );
              })
            }
          </div>

        </React.Fragment>
      )}
      </React.Fragment>
  );
  }
}

export default Slider;
