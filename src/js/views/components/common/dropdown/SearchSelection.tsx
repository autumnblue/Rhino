declare const $: any;

import * as React from 'react';

//Depends on Semantic dropdown and transition js/css includes
export class SearchSelection extends React.Component<Props, {}> {
    public render() {
        const els = this.props.data && this.props.data.map(datum => {
            return (
                <option
                    key={datum.text}
                    value={datum.value || datum.text}>
                        {datum.text}
                </option>
            );
        });

        return (
            <select onChange={ (event) => this.props.onSelect(event.target.value) } 
                className="ui search dropdown">
                    { els }
            </select>
        );
    }

    public componentDidMount() {
        $('.ui.dropdown')
            .dropdown();
    }  
}

interface Props {
    data: Array<{ text: string, value?: string }>
    onSelect(selection: string): void
}
