import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from '@components/TabBar';
import CourtGames from "@screens/CourtGames";
import MyProfile from "@screens/MyProfile";
import Menu from "@screens/Menu";
import Contact from "@screens/Contact";
import { Home } from "@screens/Home";
import { CourtForm } from "@screens/CourtForm";
import MatchDetails from "@screens/MatchDetails";
import Teams from "@screens/Teams";
import TeamDetails from "@screens/TeamDetails";
import { AboutUs } from "@screens/AboutUs";
import { TermsAndConditions } from "@screens/TermsAndConditions";


export type AppRoutes = {
    TabBar: undefined;
    CourtGames: { courtId: string };
    MyProfile: undefined;
    Menu: undefined;
    Contact: undefined;
    Home: undefined;
    CourtForm: undefined;
    MatchDetails: { matchId: string };
    Teams:undefined;
    TeamDetails:undefined;
    AboutUs:undefined;
    TermsAndConditions:undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="TabBar" component={TabBar} />
            <Screen name="CourtGames" component={CourtGames} />
            <Screen name="MyProfile" component={MyProfile} />
            <Screen name="Menu" component= {Menu} />
            <Screen name="Contact" component= {Contact} />
            <Screen name="Home" component= {Home} />
            <Screen name="CourtForm" component={CourtForm} />
            <Screen name="MatchDetails" component={MatchDetails} />
            <Screen name="Teams" component={Teams} />
            <Screen name="TeamDetails" component={TeamDetails} />
            <Screen name="AboutUs" component={AboutUs} />
            <Screen name="TermsAndConditions" component={TermsAndConditions} />
        </Navigator>
    );
}
