import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className='filter'>
                <div className='filter-result'>{this.props.count}  products</div>
                <div className='filter-sort'>Order{" "}
                <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option>Latest{" "}</option>
                    <option  value='lowest'>Lowest</option>
                    <option  value='highest'>Highest</option>
                </select>

                </div>
                <div className='filter-size'>Filter{" "}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value=''>all</option>
                    <option value='XS'>xs</option>
                     <option value='X'>s</option>
                     <option value='M'>m</option>
                     <option value='L'>l</option>
                     <option value='XL'>xl</option>
                     <option value='XXL'>xxl</option>
                </select>
                </div>
            </div>
        )
    }
}
