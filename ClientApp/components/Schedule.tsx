import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as ScheduleStore from '../store/Schedule';
import GameBadge from 'components';

type ScheduleProps = ScheduleStore.ScheduleState & typeof ScheduleStore.actionCreators;

class Schedule extends React.Component<ScheduleProps, void> {
    public render() {
        return <div>
					<h1>Oilers Upcoming Schedule</h1>
					{this.props.games.map(game => <GameBadge game={game}/>)}
        </div>;
    }
}

// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.schedule, // Selects which state properties are merged into the component's props
    ScheduleStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Schedule);
