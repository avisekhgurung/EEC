import React from 'react';
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from '../ProtectedRoute';
import StudentDashboard from './StudentDashboard';
import StudentRoutine from './StudentRoutine';
import StudentNotice from './StudentNotice';
import StudentAttendance from './StudentAttendance';
import StudentHandbook from './StudentHandbook';
import StudentExamination from './StudentExamination';
import StudentEvent from './StudentEvent';
import StudentHealthCard from './StudentHealthCard';
import StudentLibrary from './StudentLibrary';
import StudentComplaint from './StudentComplaint';
import StudentFeedback from './StudentFeedback';
import StudentSettings from './StudentSettings';
import StudentProfile from './StudentProfile';
import StudentJournal from './StudentJournal';
import StudentLearnRevise from './StudentLearnRevise';
import StudentStudyMaterials from './StudentStudyMaterials';
import StudentReportCard from './StudentReportCard';


export default class StudentRoutes extends React.Component {
    render() {
        return (
            <div className="">
                <Switch>
                    <Route exact path="/student" component={StudentDashboard} />

                    <Route path="/student_notice">
                        <ProtectedRoute component={StudentNotice} />
                    </Route>
                    <Route path="/student_routine">
                        <ProtectedRoute component={StudentRoutine} />
                    </Route>
                    <Route path="/student_attendance">
                        <ProtectedRoute component={StudentAttendance} />
                    </Route>
                    <Route path="/student_handbook">
                        <ProtectedRoute component={StudentHandbook} />
                    </Route>
                    <Route path="/student_examination">
                        <ProtectedRoute component={StudentExamination} />
                    </Route>
                    <Route path="/student_event">
                        <ProtectedRoute component={StudentEvent} />
                    </Route>
                    <Route path="/student_healthcard">
                        <ProtectedRoute component={StudentHealthCard} />
                    </Route>
                    <Route path="/student_library">
                        <ProtectedRoute component={StudentLibrary} />
                    </Route>
                    <Route path="/student_complaint">
                        <ProtectedRoute component={StudentComplaint} />
                    </Route>
                    <Route path="/student_feedback">
                        <ProtectedRoute component={StudentFeedback} />
                    </Route>
                    <Route path="/student_settings">
                        <ProtectedRoute component={StudentSettings} />
                    </Route>
                    <Route path="/student_profile">
                        <ProtectedRoute component={StudentProfile} />
                    </Route>
                    <Route path="/student_journal">
                        <ProtectedRoute component={StudentJournal} />
                    </Route>
                    <Route path="/student_learnandrevise">
                        <ProtectedRoute component={StudentLearnRevise} />
                    </Route>
                    <Route path="/student_studymaterials">
                        <ProtectedRoute component={StudentStudyMaterials} />
                    </Route>
                    <Route path="/student_reportcard">
                        <ProtectedRoute component={StudentReportCard} />
                    </Route>
                </Switch>
            </div>
        );
    }
}