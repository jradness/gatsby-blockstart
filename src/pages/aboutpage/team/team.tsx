import * as React from 'react'
import './team.scss'
import { IMAGE } from '../../../util/image-path'

class Team extends React.Component {
  team = [
    {
      name: 'Mark Price',
      position: 'CEO at Devslopes & Blockchain Expert',
      image: IMAGE.markProfile,
      linkedIn: 'https://www.linkedin.com/in/spentak/',
      twitter: 'https://twitter.com/markprice_dev',
    },
    {
      name: 'Jacob Luetzow',
      position: 'Senior Engineer & Blockchain Developer',
      image: IMAGE.jacobProfile,
      linkedIn: 'https://www.linkedin.com/in/jacob-luetzow-173b9397',
      twitter: 'https://twitter.com/floatware',
    },
    {
      name: 'Nathan Brewer',
      position: 'Blockchain Developer',
      image: IMAGE.nateProfile,
      linkedIn: 'https://www.linkedin.com/in/nathan-brewer-0988',
      twitter: null,
    },
  ]

  render() {
    return (
      <div className="container">
        <h1 className="team-title">Team</h1>
        <div className="profile-wrapper">
          {this.team.map((person) =>
            <div className="profile-card">
              <img className="profile-img" key={person.image} src={person.image} alt="Devslopes software developer"/>
              <span className="link-wrapper">
                <a className="link-icon" href={person.linkedIn} target="_blank">
                  {person.linkedIn && <img src={IMAGE.linkedIn} alt="LinkedIn icon"/>}
                </a>
                <a className="link-icon" href={person.twitter} target="_blank">
                  {person.twitter && <img src={IMAGE.twitter} alt="Twitter icon"/>}
                </a>
              </span>
              <div key={person.name} className="name">{person.name}</div>
              <div key={person.position} className="description">{person.position}</div>
            </div>)}
        </div>
      </div>
    )
  }
}

export default Team