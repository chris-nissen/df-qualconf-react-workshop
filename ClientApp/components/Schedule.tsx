import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { ApplicationState } from 'store';
import * as ScheduleStore from '../store/Schedule';
import { GameBadge } from 'components';
import { Game } from 'models';
import { Row, Col } from 'react-bootstrap';

type ScheduleProps = ScheduleStore.ScheduleState & typeof ScheduleStore.actionCreators;

class Schedule extends React.Component<ScheduleProps, void> {
    public render() {
        return <div className="schedule">
            
               </div>;
    }

    componentWillMount(): void {
        this.props.fetchSchedule();
    }
}

// Wire up the React component to the Redux store
export default connect(
    // Selects which state properties are merged into the component's props
    (state: ApplicationState) => state.schedule, 
    // Selects which action creators are merged into the component's props
    ScheduleStore.actionCreators 
)(Schedule);