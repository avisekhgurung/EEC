import React from 'react';
import { Route, Switch } from "react-router-dom";
import MangDashboard from './MangDashboard';
import MangTeacher from './MangTeacher';
import MangAddTeacher from './MangAddTeacher';
import MangEditTeacher from './MangEditTeacher';
import MangTeacherDetails from './MangTeacherDetails';
import MangStudent from './MangStudent';
import MangAddStudent from './MangAddStudent';
import MangStudentDetails from './MangStudentDetails';
import MangParent from './MangParent';
import MangClass from './MangClass';
import MangEditClass from './MangEditClass';
import MangSubject from './MangSubject';
import MangAddClassSubject from './MangAddClassSubject';
import MangExam from './MangExam';
import MangRoutine from './MangRoutine';
import MangAttendance from './MangAttendance';
import MangEvent from './MangEvent';
import MangNotice from './MangNotice';
import MangLibary from './MangLibary';
import MangComplaints from './MangComplaints';
import MangComplaintDetails from './MangComplantDetails';
import MangFeedbacks from './MangFeedbacks';
import MangSettings from './MangSettings';
import MangProfile from './MangProfile';
import MangHandbook from './MangHandbook';
import MangHealthCard from './MangHealthCard';
import MangViewHealthCard from './MangViewHealthCard';
import MangProgress from './MangProgress';
import ProtectedRoute from '../ProtectedRoute';
import SampleForm from '../management/SampleForm';

export default class MangRoutes extends React.Component {
    render() {
        return (
            <div className="">
                <Switch>
                    <Route exact path="/management" component={MangDashboard} />
                    <Route path="/mang_teacher">
                        <ProtectedRoute component={MangTeacher} />
                    </Route>
                    <Route path="/mang_add_teacher">
                        <ProtectedRoute component={MangAddTeacher} />
                    </Route>
                    <Route path="/mang_edit_teacher/:teacherid">
                        <ProtectedRoute component={MangEditTeacher} />
                    </Route>
                    <Route path="/mang_teacher_details/:teacherid">
                        <ProtectedRoute component={MangTeacherDetails} />
                    </Route>
                    <Route path="/mang_student">
                        <ProtectedRoute component={MangStudent} />
                    </Route>
                    <Route path="/mang_add_student">
                        <ProtectedRoute component={MangAddStudent} />
                    </Route>
                    <Route path="/mang_student_details">
                        <ProtectedRoute component={MangStudentDetails} />
                    </Route>
                    <Route path="/mang_parent">
                        <ProtectedRoute component={MangParent} />
                    </Route>
                    <Route path="/mang_class">
                        <ProtectedRoute component={MangClass} />
                    </Route>
                    <Route path="/mang_editclass/:classid">
                        <ProtectedRoute component={MangEditClass} />
                    </Route>
                    <Route path="/mang_subject">
                        <ProtectedRoute component={MangSubject} />
                    </Route>
                    <Route path="/mang_add_classsubject">
                        <ProtectedRoute component={MangAddClassSubject} />
                    </Route>
                    <Route path="/mang_exam">
                        <ProtectedRoute component={MangExam} />
                    </Route>
                    <Route path="/mang_routine">
                        <ProtectedRoute component={MangRoutine} />
                    </Route>
                    <Route path="/mang_attendance">
                        <ProtectedRoute component={MangAttendance} />
                    </Route>
                    <Route path="/mang_event">
                        <ProtectedRoute component={MangEvent} />
                    </Route>
                    <Route path="/mang_notice">
                        <ProtectedRoute component={MangNotice} />
                    </Route>
                    <Route path="/mang_libary">
                        <ProtectedRoute component={MangLibary} />
                    </Route>
                    <Route path="/mang_complaints">
                        <ProtectedRoute component={MangComplaints} />
                    </Route>
                    <Route path="/mang_complaint_details/:complaintid">
                        <ProtectedRoute component={MangComplaintDetails} />
                    </Route>
                    <Route path="/mang_feedback">
                        <ProtectedRoute component={MangFeedbacks} />
                    </Route>
                    <Route path="/mang_settings">
                        <ProtectedRoute component={MangSettings} />
                    </Route>
                    <Route path="/mang_profile">
                        <ProtectedRoute component={MangProfile} />
                    </Route>
                    <Route path="/mang_handbook">
                        <ProtectedRoute component={MangHandbook} />
                    </Route>
                    <Route path="/mang_healthcard">
                        <ProtectedRoute component={MangHealthCard} />
                    </Route>
                    <Route path="/mang_viewhealthcard">
                        <ProtectedRoute component={MangViewHealthCard} />
                    </Route>
                    <Route path="/mang_progress">
                        <ProtectedRoute component={MangProgress} />
                    </Route>
                    <Route path="/sample_form">
                        <ProtectedRoute component={SampleForm} />
                    </Route>
                </Switch>
            </div>
        );
    }
}