import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/*- Account-related scenes -*/
import Login from "./pages/Login";

/*- Create the stack navigator -*/
const Stack = createNativeStackNavigator();

/*- Needs to be called App -*/
export default function App() {
    return (
		<React.Fragment>
			<NavigationContainer>
				<Stack.Navigator>
					{/*- Account related -*/}
					<Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>

				</Stack.Navigator>
			</NavigationContainer>
		</React.Fragment>
    );
}