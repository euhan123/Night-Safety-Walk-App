import { registerRootComponent } from "expo";
import App from './src/App';
import Amplify from "aws-amplify";
import awsExports from './aws-exports';
Amplify.configure(awsExports);
registerRootComponent(App);

