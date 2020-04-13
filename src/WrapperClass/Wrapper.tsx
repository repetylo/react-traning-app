import React, { Component, PureComponent } from 'react';

import Counter from '../Counter';
import People from '../People';

type Props = {
    initialValue: number
}

type State = {
    count: number;
}

export default class Wrapper extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    state: State = {
        count: this.props.initialValue,
    }

    handleChange = (nextCount: number) : void => {
        this.setState({
            count:(nextCount)
        })
    }

    render(){
        return (
            <div className='Wrapper'>
                <Counter currentValue={this.state.count} onChange={this.handleChange} />
                <People count={this.state.count} items={[...Array(this.state.count)].map((_, i) => i)}/>
            </div>
        );
    }
 }