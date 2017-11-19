import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeCreate from './Components/EmployeeCreate';
import EmployeeEdit from './Components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Login Now"
                    />
                    <Scene
                        onRight={() => Actions.employeeCreate()}
                        onLeft={() => null}
                        rightTitle="Add"
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Add Employee"
                        leftTitle="Back"
                    />
                    <Scene
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Update Employee"
                        leftTitle="Back"
                    />
            </Stack>
        </Router>
    );
};
export default RouterComponent;
