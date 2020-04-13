import React, { Component, PureComponent } from 'react';

type Props = {
    name: string;
}

type State = {

}

class Hello extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        // this.state = {
        //     name: 'default'
        // }
    }

    state = {
        name: 'default'
    }

    handleClick = () => {}

    componentWillMount() {
    }

    componentDidMount() {
        console.log('componentDidMount');
        // 1 [getHttp, addListeners]
        window.addEventListener('click', this.handleClick);
    }

    componentDidUpdate() {
        // on change props
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleClick);
        // before component destroy
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // this.props, this.state
    //     // performance
    //     return true | false
    // }

    render(){
       return <div>Hello {this.props.name}</div>
    }
 }