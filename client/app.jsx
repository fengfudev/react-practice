import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDnuACNKYjeCm69p_m0iXmaycyY6AkFAAI",
    authDomain: "open-plan.firebaseapp.com",
    databaseURL: "https://open-plan.firebaseio.com",
    storageBucket: "open-plan.appspot.com",
    messagingSenderId: "1079491530783"
};
firebase.initializeApp(config);

@observer
class App extends Component {

    constructor() {
        super();
        this.state = {
            speed: 10
        };
    }
    
    componentDidMount () {
        const dbRef = firebase.database().ref().child('speed');
        // const speedRef = dbRef.child('speed');

        dbRef.on('value', snap => {
            console.log("snap", snap);
            this.setState({
                speed : snap.val() || 15
            })
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.store.timer}
                </button>
                <div>{this.state.speed}</div>
                <DevTools />
            </div>
        );
    }

    onReset = () => {
        this.props.store.resetTimer();
    }
};

export default App;