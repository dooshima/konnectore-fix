import React from 'react';
import PropTypes from 'prop-types';

function MasonryGrid(props) {
    const { columns, gap, children } = props;
    let columnWrapper = {};
    let grid = [];
    let c = 0;
    for(let i=0; i<children.length; i++) {
        for(let j = 0; j<columns; j++) {
            if(c === columns - 1) {  
                if(!columnWrapper[`col${c}`]) {
                    columnWrapper[`col${c}`] = [];
                }             
                columnWrapper[`col${c}`].push(
                    getItem(i, children[i], gap)
                )
                c = 0;
                break;
            } else {             
                if(!columnWrapper[`col${c}`]) {
                    columnWrapper[`col${c}`] = [];
                }
                columnWrapper[`col${c}`].push(
                    getItem(i, children[i], gap)
                )
                c++;
                break;
            }
        }
    }

    for(let i = 0; i < columns; i++) {
        grid.push(
            <div
                key={i}
                style={{ marginLeft: `${i > 0? gap: 0}px`, flex: 1 }}
                >
                    {columnWrapper[`col${i}`]}
                </div>
        )
    }

    return (
        <div style={{ display: 'flex' }}>
            {grid}
        </div>
    )
}

function getItem(i, item, gap) {
    return (
        <div
            key={i}
            style={{ marginBottom:  `${gap}px`}} >
         {item}   
        </div>
    )
}

// Takes the following props
/* 
    columns: number
    gap: number
    children: array of elements implementing the IItemCard interface
*/

MasonryGrid.propTypes = {
    columns: PropTypes.number.isRequired,
    gap: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
}

MasonryGrid.defaultProps = {
    columns: 2,
    gap: 10,
}

export default MasonryGrid;