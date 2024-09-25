import Screen from "@/shared/ui/containers/Screen";
import UserProfileHeader from "@/widgets/UserProfileHeader/UserProfileHeader";
import Navigation from '../../widgets/Navigation/Navigation';

const HomePage = () => {
  return (
    <Screen>
      <UserProfileHeader />
      <Navigation />
    </Screen>
  );
};

export default HomePage;
