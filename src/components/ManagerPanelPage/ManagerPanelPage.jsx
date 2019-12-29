import React, { Component } from 'react';
import Teams from './components/Teams';
import Modal from '../common/Modal';
import * as fetches from '../../utils/fetches';
import TeamInfo from './components/TeamInfo';
import FinishedGames from './components/FinishedGames';
import CurrentStandings from './components/CurrentStandings';

class ManagerPanelPage extends Component {
    constructor() {
        super();
        this.state = {
            dropdownIsShown: false,
            modalIsShown: false,
            playingTeams: [],
            finishedGames: [],
            currentStandings: [],
            team: {},
        }
    }

    showDropdown = () => {
        const { dropdownIsShown } = this.state;
        this.setState({ dropdownIsShown: !dropdownIsShown })
    }

    hideDropdown = () => {
        this.setState({ dropdownIsShown: false })
    }

    showModal = () => {
        this.setState({ modalIsShown: true })
    }

    hideModal = () => {
        this.setState({ modalIsShown: false })
    }

    checkPlayingTeams = () => {
        this.setState({ dropdownIsShown: false }, async () => {
            const result = await fetches.getPlayingTeams();
            this.setState({
                finishedGames: [],
                currentStandings: [],
                playingTeams: [...result.teams]
            })
        })
    }

    checkFinishedGames = () => {
        this.setState({ 
            dropdownIsShown: false,
        }, async () => {
            const result = await fetches.getFinishedGames();
            this.setState({
                playingTeams: [],
                currentStandings: [],
                finishedGames: [...result.matches]
            })
        })
    }

    checkCurrentStandings = () => {
        this.setState({ 
            dropdownIsShown: false,
        }, async () => {
            const result = await fetches.getCurrentStandings();
            this.setState({
                finishedGames: [],
                playingTeams: [],
                currentStandings: [...result.standings[0].table]
            })
        })
    }

    checkTeamInfo = async (teamId) => {
        this.hideDropdown();
        const result = await fetches.getTeamInfo(teamId);
        this.setState({
            team: { ...result }
        }, () => this.showModal());
    }

    render() {
        const { dropdownIsShown, modalIsShown, playingTeams, finishedGames, currentStandings, team } = this.state;
        return (
            <div className="jumbotron">
                <h1>Manager Panel</h1>
                <p>Please make your management choice:</p>
                <div className="dropdown">
                    <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.showDropdown}>
                        Select your action here
                    </button>
                    <div
                        className={dropdownIsShown ? "dropdown-menu show" : "dropdown-menu"}
                        aria-labelledby="dropdownMenuButton"
                    >
                        <button className="dropdown-item" onClick={this.checkPlayingTeams}>
                            Check playing Teams
                        </button>
                        <div className="dropdown-divider"></div>
                        <button to="basicinfo" className="dropdown-item" onClick={this.checkFinishedGames}>
                            See finished Games
                        </button>
                        <div className="dropdown-divider"></div>
                        <button to="basicinfo" className="dropdown-item" onClick={this.checkCurrentStandings}>
                            See current Standings
                        </button>
                    </div>
                </div>
                {playingTeams.length > 0 ? <Teams teams={playingTeams} checkTeamInfo={this.checkTeamInfo} /> : null}
                {finishedGames.length > 0 ? <FinishedGames finishedGames={finishedGames} checkTeamInfo={this.checkTeamInfo} /> : null}
                {currentStandings.length > 0 ? <CurrentStandings standings={currentStandings} checkTeamInfo={this.checkTeamInfo} /> : null}
                <Modal
                    show={modalIsShown}
                    closeModal={this.hideModal}
                >
                    <TeamInfo team={team} />
                </Modal>
            </div>
        )
    }
}

export default ManagerPanelPage;