import React from 'react';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ongoing: false,
    };
  }

  render() {
    const { ongoing } = this.state;
    if (!ongoing) {
      return (
        <div />
      );
    }

    return null;
  }
}

export default App;

/*
-- remove timer button if the test is ongoing
-- if test is completed prompt for data
-- if test is ongoing remove graph button
*/
