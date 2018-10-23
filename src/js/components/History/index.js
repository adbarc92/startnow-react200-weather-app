import { connect } from 'react-redux';
import History from './history';

function mapStoreToProps(store) {
  return {
    history: store.search.history
  };
}

export default connect(mapStoreToProps)(History);
