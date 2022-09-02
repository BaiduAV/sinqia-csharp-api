import {AddNewDestination} from "./components/AddNewDestination";
import { Home } from "./components/Home";
import {FetchData} from "./components/FetchData";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/destinations',
    element: <FetchData />
  },
  {
    path: '/insert',
    element: <AddNewDestination />
  }
];

export default AppRoutes;
