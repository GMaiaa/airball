import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Intro } from "@screens/Intro";

import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

type AuthRoutes = {
    intro: undefined
    signIn: undefined;
    signUp: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
            name="intro"
            component={Intro}
            />
            <Screen 
            name="signIn"
            component={SignIn}
            />
            <Screen 
            name="signUp"
            component={SignUp}
            />
        </Navigator>
    )
}