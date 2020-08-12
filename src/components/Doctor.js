import React, {useState} from 'react';

const Doctor = (props) => {
  const [toggled, toggle] = useState(false)
  return(
    <React.Fragment>
      <div key={props.id} className='doctor-box'>
        <div className="doctor-info">
          <p className="name">{props.name}</p>
          <ul>
            {
              props.skills ?
                props.skills.map(skillDetail => {
                  return <li><i className='fas'>&#xf101;</i>{skillDetail.skill}</li>
                })
              :
              null
            }
          </ul>
        </div>
        <div className={toggled ? "doctor-img zoomed" : "doctor-img"} onClick={() => toggle(toggled => !toggled)}>
          <img
            className="media-img card-img-top card-img-hero"
            src={props.download_url}
            alt="Alt text"
            style={{ cursor: "pointer" }}
          />
          <div className='back-warning mobile-warning'><div class="arrow bounce">
          <p class="fa fa-arrow-up fa-2x"></p>
        </div>Apasă pentru a reveni la listă</div>
          <div className='back-warning desktop-warning'><div class="arrow bounce">
          <p class="fa fa-arrow-up fa-2x"></p>
        </div>Click pentru a reveni la listă</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Doctor;
