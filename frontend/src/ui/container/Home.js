import Home from 'ui/component/Home';
import {connect} from 'react-redux';
import {fetchSimple} from 'reducers/simple';

export default connect(
  state => ({items: state.simple.items}),
  {fetchSimple}
)(Home);
