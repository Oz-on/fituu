import useClients from "../../lib/useClients";
import { UserDataProps } from "../../lib/useUser";
import DashboardPanel from "../../pages/Dashboard";

type Props = {
  user: UserDataProps;
};

const DashboardView = ({user}: Props) => {
  const {clients, clientsLoading} = useClients();

  return (
    <DashboardPanel
      userData={user}
      clients={clients}
      clientsLoading={clientsLoading}
    />
  );
};

export default DashboardView;