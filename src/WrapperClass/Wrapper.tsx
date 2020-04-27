import React, { Component, PureComponent } from 'react';

import Counter from '../Counter';
import People from '../People';

type Props = {
    initialValue: number
    name: string;
    age: number;
    description: 'sdsd',
    isAdmin: boolean; // true
}

type State = {
    count: number;
}

export default class Wrapper extends PureComponent<Props, State> {
    displayName = 'Counter'

    componentDidMount = () => { }

    componentDidUpdate = () => { }

    componentWillUnmount = () => { }

    // shouldComponentUpdate = (nextProps) => {
    //     if (nextProps.isAdmin !=== props.isAdmin) return false
    //     // if (nextProps.isAdmin !=== props.isAdmin ||
    //     //     nextProps.name !=== props.name
    //     // ) return true;
    //     // // true / false
    // }

    // constructor(props: Props) {
    //     super(props);
    // }

    state: State = {
        count: this.props.initialValue,
    }

    handleChange = (nextCount: number): void => {
        this.setState({
            count: (nextCount)
        })
    }

    //getItems = () => [...Array(this.state.count)].map((_, i) => i);

    render() {
        return (
            <div className='Wrapper'>
                <Counter
                    currentValue={this.state.count}
                    onChange={this.handleChange}
                />
                <People
                    count={this.state.count}
                    items={[]} />
            </div>
        );
    }
}