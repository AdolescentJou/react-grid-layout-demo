import React from 'react';
import GridLayout from 'react-grid-layout';
import './index.scss';

export default class GridLayoutDemo extends React.Component {
  render() {
    const boxStyle = {
      // backgroundColor: 'rgba(239,241,243)',
      // fontSize: '22px',
      // color: 'black',
      // fontWeight: 700,
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
    };

    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ];
    return (
      <div className='layout_container'>
        <GridLayout className='layout layout_border' layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key='a' style={boxStyle} className='box'>
            a
          </div>
          <div key='b' style={boxStyle} className='box'>
            b
          </div>
          <div key='c' style={boxStyle} className='box'>
            c
          </div>
        </GridLayout>
      </div>
    );
  }
}
