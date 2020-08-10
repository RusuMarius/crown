import React from 'react';
import Doctor from '../components/Doctor';
import './scss/team.scss';
import {Helmet} from 'react-helmet';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awsApiData: [],
      loading: false,
      search: '',
      zoomed: false
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

      <Helmet>
        <title>Echipa | Crown Medical Center</title>
        <meta name="description" content="Estetica dentara, Implantologie, Parodontologie" />
      </Helmet>

        {this.state.loading ? (
          <div className="text-center loading">
        <img className='loading-img' src="./images/loading-icon.gif" alt=""/>
        </div>
        ) : (
          <div className="main-container">
            <React.Fragment>
              <form>
            <div className="input-box">
            <input className='search-input' type="text"
            value={this.state.search}
            name='search'
            placeholder='Cauta..'
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
                      <React.Fragment key={post.indx}>
                        <Doctor
                        key={post.indx}
                        name={post.name}
                        download_url={post.download_url}
                        skills={post.skills}
                        />
                      </React.Fragment>
                    );
                  })
                }
              </div>

            </React.Fragment>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Team;
